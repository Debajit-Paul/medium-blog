const Quote = () => {
  return (
    <div className="bg-slate-300 w-full h-screen  flex-col items-center justify-center lg:flex hidden">
      <div className="flex flex-col gap-5">
        <p className="w-[33vw] font-bold text-3xl">
          "The customer service I received was exceptional. The support team
          went above and beyond to address my concerns"
        </p>
        <div>
          <p className="font-[700]">Jules Winnfield</p>
          <p className=" text-slate-500 font-[400]">CEO, Acme Inc</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
