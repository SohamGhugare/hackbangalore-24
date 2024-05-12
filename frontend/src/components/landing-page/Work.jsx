const Work = () => {
  return (
    <section className="flex justify-center gap-10 items-center px-20">
      <div className="w-1/2 border-2 rounded-xl border-black flex justify-center flex-col p-4 h-36 text-center">
        <h1 className="text-2xl font-bold text-center w-full tracking-wider">Connect{"   "} Invest{"   "} Transform</h1>
        <p className="font-semibold text-center w-full">
          The future of sustainable impact investing
        </p>
      </div>
      <div className="w-1/4 h-36 flex flex-col gap-2 border-2 border-black rounded-xl overflow-hidden">
        <div className="leading-tight bg-[#4fc885] font-bold text-lg p-2 flex justify-center items-center">
          Join as Impact Investor
        </div>
        <p className="leading-tight p-2 text-center">
          Unlock a world of personalised impact investment opportunities.
        </p>
      </div>
      <div className="w-1/4 h-36 flex flex-col gap-2 border-2 border-black rounded-xl overflow-hidden">
        <div className="leading-tight bg-[#4fc885] font-bold text-lg p-2 flex justify-center items-center">
          List Your Project
        </div>
        <p className="leading-tight p-2 text-center">
        Amplify your sustainable initiative's visibility to a global network of impact investors.
        </p>
      </div>
    </section>
  );
};

export default Work;
