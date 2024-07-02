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
