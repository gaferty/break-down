export async function postRequest(url, data) {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!result.ok) {
    const text = await result.text();
    throw new Error(text);
  }
  return result.json();
}
export async function authPostRequest(url, data) {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
    body: JSON.stringify(data),
  });
  if (!result.ok) {
    const text = await result.text();
    throw new Error(text);
  }
  return result;
}

export async function getFetch(url, data = None) {
  const result = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!result.ok) {
    const text = await result.text();
    throw new Error(text);
  }
  return result.json();
}

export async function authGetFetch(url, data) {
  const result = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
  });

  if (!result.ok) {
    const text = await result.text();
    throw new Error(text);
    return false;
  }

  return result.json();
}

export async function AuthGetRequest(url, data) {
  try {
    result = await AuthGetFetch(url, data);
  } catch (error) {
    if (error.message) {
      console.log(error.message);
    }
  }
}

export async function refreshAccessToken() {
  const body = {
    refresh: localStorage.getItem("refresh"),
  };
  const token = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!token.ok) {
    const text = await result.text();
    throw new Error(text);
  }
  return token.json();
}
