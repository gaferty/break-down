import {
  authPostRequest,
  getRequest,
  postRequest,
  refreshAccessToken,
} from "./requesthandler";

export async function getProjects() {
  const result = await fetch("http://127.0.0.1:8000/projects", {
    method: "GET",
  });
  if (!result.ok) {
    await refreshAccessToken();
    throw new Error("Failed to retrieve projects");
  }
  return result.json();
}

async function fetchJson(url, data) {
  const result = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!result.ok) {
    const text = await result.text();
    throw new Error(text);
  }
  return result.json();
}

export async function register(data) {
  return fetchJson("http://127.0.0.1:8000/auth/users/", data);
}

export async function getJwt(post_data) {
  try {
    const response = await postRequest(
      "http://127.0.0.1:8000/api/token/",
      post_data,
    );
    localStorage.setItem("access", response.access);
    localStorage.setItem("refresh", response.refresh);
    localStorage.setItem("id", response.user_id);
    return { success: true };
  } catch (ex) {
    if (ex.status === 401) {
      return { success: false, message: ex.message };
    }
    return { success: false, message: ex.message };
  }
}

export async function postProject(data, isRetry = false) {
  // Posts to the project db in django
  const response = await authPostRequest(
    "http://127.0.0.1:8000/projects/",
    data,
  );
  if (response) return response.json();

  if (isRetry) return; // handle error here

  // if the response fails then the system should use the refresh token to get a new access token
  const { access } = await refreshAccessToken();
  localStorage.setItem("access", access);
  //  what I want is to see if the access token is received then the function should try again.
  const new_response = await postProject(data, true);

  return new_response;
}
async function getUserData(data) {
  const result = await fetch("http://127.0.0.1:8000/projects/");
}

async function updateAccess() {}

async function handlePostRequest(type, data, response) {
  // the function that will handle post requests
  response = await fetchJson("http://127.0.0.1:8000/api/refresh", data);
}

async function handleGetRequest() {}
