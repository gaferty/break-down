"use client";
import React, { useEffect, useState } from "react";
import { postProject } from "../../lib/data";
import { useRouter } from "next/navigation";
export default function CreateForm() {
  const difficult_options = ["Easy", "Medium", "Hard"];
  const project_length = ["SHORT", "MEDIUM", "LONG"];
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    difficulty: "",
    length: "",
    user: localStorage.getItem("id"),
  });
  const router = useRouter();
  const createProject = (event) => {
    event.preventDefault();
    postProject(projectForm).then((req) => {
      router.push("/projects");
    });
  };

  return (
    <div>
      <form
        className="flex flex-col w-8/12 mx-auto bg-white p-4 rounded shadow"
        onSubmit={createProject}
      >
        <label className="text-lg text-primary text-center font-bold">
          About the Project
        </label>
        <input
          type="text"
          className="mb-3 p-2 bg-gray-100 rounded-lg"
          placeholder="Project Title"
          required
          onChange={(e) =>
            setProjectForm({ ...projectForm, title: e.target.value })
          }
        />
        <textarea
          rows="5"
          cols="50"
          className="bg-gray-100 rounded-lg mb-3"
          placeholder="Describe what this project is about and add in some steps later"
          required
          onChange={(e) =>
            setProjectForm({ ...projectForm, description: e.target.value })
          }
        />
        <select
          name="difficulty"
          onChange={(e) =>
            setProjectForm({ ...projectForm, difficulty: e.target.value })
          }
          id="difficulty"
          placeholder="select the project difficulty..."
          className="bg-gray-100 p-3 mb-4  rounded"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Select Project Difficulty
          </option>
          {difficult_options.map((difficult) => (
            <option key={difficult}>{difficult}</option>
          ))}
        </select>
        <select
          name="difficulty"
          id="difficulty"
          placeholder="select the project difficulty..."
          className="bg-gray-100 p-3 mb-4  rounded"
          defaultValue={"DEFAULT"}
          onChange={(e) => {
            setProjectForm({ ...projectForm, length: e.target.value });
          }}
        >
          <option value="DEFAULT" disabled>
            Select Project Length
          </option>
          {project_length.map((length) => (
            <option key={length}>{length}</option>
          ))}
        </select>
        <input
          type="submit"
          value="Create Project"
          className="bg-primary border-2 border-secondary text-white text-lg w-fit px-4 py-2 rounded-lg mx-auto"
        />
      </form>
    </div>
  );
}
