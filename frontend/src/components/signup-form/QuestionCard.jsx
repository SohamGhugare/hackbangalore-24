"use client";
import { useEffect, useState } from "react";
import FormInput from "../ui/FormInput";
import Label from "../ui/Label";
const Option = ({ text, questionData, formData }) => {
  const [selected, setSelected] = useState(false);
  //   if (formData.tags) {
  //     formData.tags.forEach((tag) => {
  //       if (tag.title === questionData.title && tag.ans.includes(text)) {
  //         setSelected(true);
  //       }
  //     });
  //   }  
  console.log(formData);
  return (
    <div
      onClick={() => {
        setSelected((prev) => !prev);
        if (formData.tags.length === 0) {
          console.log("tags are empty");
          formData.tags.push({ title: questionData.title, ans: [text] });
        } else {
          formData.tags = formData?.tags?.map((tag) => {
            if (tag.title === questionData.title) {
              if (!tag.ans?.includes(text)) {
                tag.ans = [...tag.ans, text];
              } else {
                const idx = tag.ans.indexOf(text);
                if (idx > -1) {
                  tag.ans.splice(idx, 1);
                }
              }
              return tag;
            } else {
              return tag;
            }
          });

          // Check if the tag exists in the formData.tags, if not, add it
          if (!formData.tags.some((tag) => tag.title === questionData.title)) {
            formData.tags.push({ title: questionData.title, ans: [text] });
          }
        }
      }}
      className={`border ${
        selected ? "border-black" : "border-black"
      } ${!selected ? "bg-transparent" : "bg-primary-green"} rounded-md p-1 cursor-pointer`}
    >
      {text}
    </div>
  );
};
const QuestionCard = ({ questionData, formData }) => {
  const options = questionData.o.map((opt) => {
    return (
      <Option
        key={opt}
        questionData={questionData}
        formData={formData}
        text={opt}
      />
    );
  });
  return (
    <div className="shadow-lg border border-black border-opacity-10 bg-white rounded-lg w-96 text-center p-4 ">
      {questionData.type === "options" ? (
        <>
          {" "}
          <h1 className="font-semibold leading-tight my-2">{questionData.q}</h1>
          <div className="flex flex-col gap-2">{options}</div>
        </>
      ) : (
        <div>
          <h1 className="font-semibold leading-tight">{questionData.q}</h1>
          <Label htmlFor={"answer"} label={questionData.label}/>
          <FormInput
            type={"number"}
            onChange={(event) => {
              console.log("change");
              if (formData.tags.length === 0) {
                formData.tags.push({
                  title: questionData.title,
                  ans: [event.target.value],
                });
              } else {
                let tagExists = false;

                formData?.tags?.forEach((tag) => {
                  if (tag.title === questionData.title) {
                    tag.ans = [event.target.value];
                    tagExists = true;
                  }
                });

                if (!tagExists) {
                  console.log("pushing tag");
                  formData.tags.push({
                    title: questionData.title,
                    ans: [event.target.value],
                  });
                  console.log("after pushing :", formData);
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
