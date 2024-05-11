import titles from "../../constants/investorQuestionsTitles.json";
import investorQuestions from "../../constants/investorQuestions.json";
import Button from "../ui/Button";
import Form from "./Form";
import QuestionCard from "./QuestionCard";
const FormPage = ({ currentPage, setCurrentPage, formData, setFormData }) => {
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
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
  const sendData = async () => {
    const newFormData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      tags: formData.tags.map((tag) => {
        const { title, ans } = tag;
        return { [title]: ans };
      }),
    };

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
    const data = await response.json();
    console.log(data);
  };
  return (
    <main className="min-h-screen max-w-screen-lg m-auto">
      <h1 className="text-center text-3xl md:text-5xl my-2 font-bold">
        {titles[currentPage][0]}
      </h1>
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
            }}
          />
        ) : (
          <div></div>
        )}
        {currentPage !== investorQuestions.length ? (
          <Button
            variant="primary"
            text={"Next"}
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
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
      </div>
    </main>
  );
};

export default FormPage;
