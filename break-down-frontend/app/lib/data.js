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
  const result = await fetch ('http://127.0.0.1:8000/api/token/',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    return result.json()
}
