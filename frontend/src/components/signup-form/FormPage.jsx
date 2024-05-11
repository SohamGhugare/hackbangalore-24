import titles from "../../constants/investorQuestionsTitles.json";
import investorQuestions from "../../constants/investorQuestions.json";
import Button from "../ui/Button";
import Form from "./Form";
import QuestionCard from "./QuestionCard";
const FormPage = ({ currentPage, setCurrentPage, formData, setFormData }) => {
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
    const response = await fetch(`${process.env.API_ENDPOINT}/investor/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <main className="min-h-screen">
      <h1 className="text-center">{titles[currentPage][0]}</h1>
      <h1 className="text-center">{titles[currentPage][1]}</h1>
      {currentPage === 0 && (
        <Form formData={formData} setFormData={setFormData} />
      )}
      {currentPage !== 0 && (
        <div className="flex flex-col gap-4">{questions}</div>
      )}
      <div className="flex w-full justify-between p-10">
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
            text={"Next"}
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
            }}
          />
        ) : (
          <Button
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
