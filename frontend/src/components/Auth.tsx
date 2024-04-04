import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "@backendkid/medium-common";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  return (
    <div className="h-screen flex justify-center flex-col">
      {/* {JSON.stringify(postInputs)} */}
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">Create an Account</div>
            <div className="text-slate-400">
              {type === "signin"
                ? "Don't have an account? "
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signup" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <LabelInput
              label="Name"
              placeholder="Jhon Doe"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            />
            <LabelInput
              label="Username"
              placeholder="example@gmail.com"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  username: e.target.value,
                }));
              }}
            />
            <LabelInput
              label="Password"
              type={"password"}
              placeholder="Aurojyoti.."
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
            <button
              type="button"
              className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none     font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 "
            >
              {type === "signup" ? "Sign Up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-sm font-medium text-black pt-2">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
