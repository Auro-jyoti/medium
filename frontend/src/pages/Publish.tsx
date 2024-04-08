import { ChangeEvent } from "react";
import { useState } from "react";
import { AppBar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <AppBar />
      <div className="flex justify-center w-full pt-10">
        <div className="max-w-screen-lg w-full">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
            placeholder="Title"
          />
          <TextArea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content: description,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="m-4 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-20"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

export const TextArea = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 mt-2">
        <div className="flex items-center justify-between  focus:border-blue-500 focus:ring-blue-500">
          <div className="py-2 bg-white rounded-lg w-full">
            <label className="sr-only">Publish</label>
            <textarea
              onChange={onChange}
              id="editor"
              rows={8}
              className="block w-full px-2 text-sm text-gray-800 bg-white focus:outline-none "
              placeholder="Enter your thoughts"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
