export async function getProjects(){
 const result = await fetch('http://127.0.0.1:8000/projects',
  {
    method: "GET",
  });
  if (!result.ok) {
    throw new Error("Failed to retrieve projects")
  }
  return result.json()

};


export async function register(data) {
  const result = await fetch('http://127.0.0.1:8000/auth/users/',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!result.ok) {
      throw new Error("Failed to login")
    }
    console.log(`user ${data.email} registered`)
  return result.json;
}

export async function getJwt(data) {
try {
  const result = await fetch ('http://127.0.0.1:8000/api/token/',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(request => request.json())
    .then(data => {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      localStorage.setItem("id", data.user_id);
    })
  // if (!result.ok) {
  //  throw new Error(`Response error ${result.status}`)
  // }
  // // console.log(result)
  // // localStorage.setItem("access",result.access)
  // // localStorage.setItem("refresh",result.refresh)
 } catch (e){
  console.error(e)
 }
}

export async function postProject(data){
  const result = await fetch('http://127.0.0.1:8000/projects/',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access")}`
      },
      body: JSON.stringify(data)
    });
    return result.json()
}
async function getUserData(data){
  const result = await fetch('http://127.0.0.1:8000/projects/')
}
