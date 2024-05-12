import { BsPatchCheck } from "react-icons/bs";
const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-9xl text-primary-green">
        <BsPatchCheck />
      </h1>
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Congratulations your application has been submitted.</h1>
        <h1 className="text-xl">Please be patient as we review your application.</h1>
      </div>
    </main>
  );
};

export default page;
