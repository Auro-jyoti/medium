import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
export const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center cursor-pointer">
        <Link to={"/blogs"}>Medium</Link>
      </div>
      <div>
        <Avatar size={"big"} name="Goldie" />
      </div>
    </div>
  );
};
