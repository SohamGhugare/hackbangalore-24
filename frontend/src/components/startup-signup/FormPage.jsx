"use client";
import titles from "../../constants/startupQuestionsTitles.json";
import investorQuestions from "../../constants/startupQuestions.json";
import Button from "../ui/Button";
import Form from "./Form";
import QuestionCard from "./QuestionCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "../ui/FormInput";
import { v4 as uuidv4 } from "uuid";
import Label from "../ui/Label";

const FormPage = ({ currentPage, setCurrentPage, formData, setFormData }) => {
  const router = useRouter();
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const MemberCard = ({ idx, member }) => {
    console.log(formData);
    return (
      <div className="shadow-lg border border-black border-opacity-15 flex flex-col gap-4 py-4 px-8 rounded-lg">
        <h1 className="font-bold text-center">Member {idx + 1}</h1>
        {/* <Label label={"Name"} htmlFor="name" /> */}
        <FormInput
          placeholder="Enter name"
          value={formData.team[idx].name}
          onChange={(e) => {
            console.log("changing", idx);
            setFormData({
              ...formData,
              team: formData.team.map((member, i) =>
                i === idx ? { ...member, name: e.target.value } : member
              ),
            });
          }}
        />
        <FormInput
          placeholder="Enter Role"
          value={formData.team[idx].role}
          onChange={(e) => {
            setFormData({
              ...formData,
              team: formData.team.map((member, i) =>
                i === idx ? { ...member, role: e.target.value } : member
              ),
            });
          }}
        />
        <textarea
          rows={5}
          className="border border-black rounded-lg p-1"
          placeholder="Enter Role"
          value={formData.team[idx].bio}
          onChange={(e) => {
            setFormData({
              ...formData,
              team: formData.team.map((member, i) =>
                i === idx ? { ...member, bio: e.target.value } : member
              ),
            });
          }}
        />
        <FormInput
          placeholder="Linkedin URL"
          value={formData.team[idx].linkedin}
          onChange={(e) => {
            setFormData({
              ...formData,
              team: formData.team.map((member, i) =>
                i === idx ? { ...member, linkedin: e.target.value } : member
              ),
            });
          }}
        />
      </div>
    );
  };
  const members = formData.team.map((member, idx) => {
    return <MemberCard key={member} idx={idx} member={member} />;
  });

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
    if (formData.fullName === "" || formData.email === "") {
      toast.error("Please fill all the fields");
      return;
    }
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email");
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
      `http://127.0.0.1:8080/api/v1/startup/signup`,
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
      router.push("/startup/signup/success");
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
      {currentPage === 4 && (
        <div className="flex flex-col gap-4">
          {members}
          <div
            className="shadow-lg border border-black border-opacity-15 flex flex-col gap-4 px-8 rounded-lg cursor-pointer text-center hover:scale-105 transition-all text-4xl"
            onClick={() => {
              {
                setFormData({
                  ...formData,
                  team: [
                    ...formData.team,
                    { id: uuidv4(), name: "", role: "", bio: "", linkedin: "" },
                  ],
                });
              }
            }}
          >
            +
          </div>
        </div>
      )}
      {currentPage === 5 && (
        <div className="flex flex-col gap-6">
          <div className="py-4 shadow-lg border border-black border-opacity-15 flex flex-col gap-4 px-8 rounded-lg text-center">
            <Label label={"Pitch Deck"} />
            <input type="file" name="" id="" />
          </div>
          <div className="py-4 shadow-lg border border-black border-opacity-15 flex flex-col gap-4 px-8 rounded-lg text-center">
            <Label label={"Business Plan"} />
            <input type="file" name="" id="" />
          </div>
          <div className="py-4 shadow-lg border border-black border-opacity-15 flex flex-col gap-4 px-8 rounded-lg text-center">
            <Label label={"Fiancial Projections"} />
            <input type="file" name="" id="" />
          </div>
          <div className="py-4 shadow-lg border border-black border-opacity-15 flex flex-col gap-4 px-8 rounded-lg text-center">
            <Label label={"Other relavent Documents"} />
            <input type="file" name="" id="" />
          </div>
        </div>
      )}
      {currentPage === 0 && (
        <Form formData={formData} setFormData={setFormData} />
      )}
      {currentPage !== 0 && currentPage !== 4 && currentPage !== 5 && (
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
