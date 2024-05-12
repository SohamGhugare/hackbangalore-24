"use client";
import { useState } from "react";
import FormPage from "@/components/startup-signup/FormPage";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    url: "",
    stage_of_development: "",
    description: "",
    team:[{
      id:"23",
      name: "",
      role: "",
      linkedin: "",
      bio: "",
    }],
    milestones:[],
    resources:[],
    tags: [],
  });
  return (
    <main>
      <FormPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        formData={formData}
        setFormData={setFormData}
      />
    </main>
  );
};

export default Page;
