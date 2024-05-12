"use client";
import titles from "../../constants/investorQuestionsTitles.json";
import investorQuestions from "../../constants/investorQuestions.json";
import Button from "../ui/Button";
import Form from "./Form";
import QuestionCard from "./QuestionCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormPage = ({ currentPage, setCurrentPage, formData, setFormData }) => {
  const router = useRouter();
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const [loading, setLoading] = useState(false);
  const questionsData =
    investorQuestions[currentPage !== 0 ? currentPage - 1 : currentPage];
  console.log(currentPage - 1);
  const questions = questionsData.map((question) => (
    <QuestionCard
      key={question.title}
      formData={formData}
      setFormData={setFormData}
      questionData={question}
    />
  ));
  const runChecks = () => {
    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (formData.password !== formData.cpass) {
      toast.error("Passwords do not match");
      return;
    }
    setCurrentPage((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const sendData = async () => {
    setLoading(true);
    const id = toast.loading("Signing Up...");
    const newFormData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      tags: {},
    };

    formData.tags.forEach((tag) => {
      newFormData.tags[tag.title] = tag.ans;
    });
    const response = await fetch(
      `http://127.0.0.1:8080/api/v1/investor/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFormData),
      }
    );
    console.log(response);
    console.log(response.status);
    if (response.status == 200) {
      console.log("Signed Up!");
      toast.update({
        render: "Signed Up!",
        type: "success",
        isLoading: false,
      });
      router.push("/investor/dashboard");
    } else {
      toast.update(id, {
        render: "Failed to sign up",
        type: "error",
        isLoading: false,
      });
    }
    setLoading(false);
    const data = await response.json();
    console.log(data);
  };
  return (
    <main className="min-h-screen pt-20 max-w-screen-lg m-auto flex flex-col items-center">
      <ToastContainer />
      <div className="relative w-full">
        <div className="absolute h-6 w-1/3 top-1/3  bg-[#69d18dca] left-1/3 -z-10" />
        <h1 className="text-center text-3xl md:text-5xl my-2 font-bold">
          {titles[currentPage][0]}
        </h1>
      </div>
      <h1 className="text-center text-lg my-2">{titles[currentPage][1]}</h1>
      {currentPage === 0 && (
        <Form formData={formData} setFormData={setFormData} />
      )}
      {currentPage !== 0 && (
        <div className="flex flex-col gap-10 items-center">{questions}</div>
      )}
      <div className="flex w-full justify-between py-10 px-52">
        {currentPage !== 0 ? (
          <Button
            text={"Previous"}
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : (
          <div></div>
        )}
        {currentPage !== investorQuestions.length ? (
          <Button
            text={"Next"}
            onClick={() => {
              runChecks();
            }}
          />
        ) : (
          <Button
            variant="primary"
            text={"Submit"}
            onClick={() => {
              console.log(formData);
              sendData();
            }}
          />
        )}
        {/* {true && <Loader />} */}
      </div>
    </main>
  );
};

export default FormPage;
