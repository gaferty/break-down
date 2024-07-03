import Image from "next/image";
import Login from "./ui/Home/Login"
export default function Home() {
  return (
    <div className="grid grid-cols-2 h-10/12">
      <div>
        <p> This is an image</p>
      </div>

    <div className="my-auto">
      <Login />
    </div>
    </div>
  );
}
