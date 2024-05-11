"use client";
import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import Label from "@/components/ui/Label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const formData = {
    email: "",
    password: "",
  };
  console.log(process)
  const login = async () => {
    const res = await fetch("https://api.example.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
    } else {
      toast("Logged in successfully");
    }
  };
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <ToastContainer />
      <div className="flex flex-col gap-2 items-center shadow-xl border border-black border-opacity-15 w-96 py-12 rounded-xl">
        <h1 className="text-3xl font-bold my-2">Login</h1>
        <Label label={"Email"} htmlFor={"email"} />
        <FormInput
          type="email"
          placeholder="Enter your email"
          value={FormData.email}
          onChange={(e) => {
            FormData = { ...FormData, email: e.target.value };
          }}
        />
        <Label label={"Password"} htmlFor={"pass"} />
        <FormInput
          type="password"
          placeholder="Enter your password"
          value={FormData.password}
          onChange={(e) => {
            FormData = { ...FormData, password: e.target.value };
          }}
        />
        <div className="my-4">
          <Button
            text="Login"
            onClick={() => {
              login();
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
