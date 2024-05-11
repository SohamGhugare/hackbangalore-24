"use client";

import { useSearchParams } from "next/navigation";

const page = () => {
  const params = useSearchParams();
  const startUpId = params.get("id");
  return (
    <div>
      <h1>Startup Page</h1>
      <p>Startup ID: {startUpId}</p>
    </div>
  );
};

export default page;
