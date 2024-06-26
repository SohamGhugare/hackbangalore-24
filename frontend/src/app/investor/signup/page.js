"use client";
import { useState } from "react";
import FormPage from "@/components/signup-form/FormPage";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    cpass: "",
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
