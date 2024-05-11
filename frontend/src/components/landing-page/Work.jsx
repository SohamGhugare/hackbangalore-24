const Work = () => {
    const Card = ()=>{
        return(
            <div className="h-48 w-48 bg-gradient-to-r from-[#1DB954] to-[#002A02] to-90%"></div>
        )
    }
  return (
    <section className="min-h-screen flex flex-col items-center">
      <div className="relative my-10">
        <h1 className="custom-stroke absolute text-8xl -top-1/2 text-center text-transparent left-[1rem]">WORK</h1>
        <h1 className="text-5xl font-bold">How it Works?</h1>
      </div>
      <p className="px-40 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
        reiciendis neque quisquam ullam doloribus perferendis eos earum vel
        animi cum?
      </p>
      <div>
        <Card/>
      </div>
    </section>
  );
};

export default Work;
