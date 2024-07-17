"use client";
import React, { useState } from "react";
import { getJwt } from "../../lib/data";
import "../../styles/session.module.scss";
import { useRouter } from "next/navigation";

function Spacer({ children }) {
  return <div className="md-6">{children}</div>;
}

function InvalidCredentials() {
  return (
    <div className="text-red-600 text-center mt-3">
      {" "}
      Invalid credentials. Please try again!
    </div>
  );
}
function TextInput({ type, ...props }) {
  const className = {
    default:
      "mb-4 p-2 w-6/12 text-center mx-auto border-2 border-secondary rounded-lg max-w-md min-w-72 ",
    square:
      "mb-4 p-2 w-6/12 text-center mx-auto border-2 border-secondary rounded-lg",
  };

  return <input type="text" className={className.default} {...props} />;
}
function PasswordInput({ type, ...props }) {
  const className = {
    default:
      "mb-4 p-2 w-6/12 text-center mx-auto border-2 border-secondary rounded-lg max-w-md min-w-72",
    square:
      "mb-4 p-2 w-6/12 text-center mx-auto border-2 border-secondary rounded-lg",
  };

  return <input type="password" className={className.default} {...props} />;
}

export default function Login() {
  const [formData, setformData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const submit = (event) => {
    //  I want to submit and if there is an issue it notifies the user and if it is successful
    // then the user will be redirected to the project page.
    event.preventDefault();
    const result = getJwt(formData).then((response) => {
      if (response.success) {
        router.push("/projects");
      } else {
        setIsLoading(false);
      }
    });
  };
  //  once I sort out the loggin in
  return (
    <div className="flex flex-col justify-center bg-white py-20 rounded-2xl mr-10 max-w-xl min-w-80">
      <form className="flex flex-col justify-center" onSubmit={submit}>
        <label className="text-center text-lg font-bold text-primary mb-2">
          Username
        </label>
        <TextInput
          value={formData.username}
          onChange={(e) =>
            setformData({ ...formData, username: e.target.value })
          }
        />

        <label className="text-center text-lg font-bold text-primary mb-2">
          Password
        </label>
        <PasswordInput
          value={formData.password}
          onChange={(e) =>
            setformData({ ...formData, password: e.target.value })
          }
        />
        <input
          type="submit"
          className="bg-primary mx-auto text-white border-4 w-fit px-5 py-2 rounded-full border-secondary"
          value="Log In"
        />
      </form>
      {!isLoading && InvalidCredentials()}
    </div>
  );
}
