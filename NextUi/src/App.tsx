import { NextCard } from "./components/NextCard";
import { DATA } from "./constant";

const App = () => {
  return (
    <>
      <p className="text-center font-bold text-3xl">Hello NextUi/HeroUI</p>
      <div className="flex justify-center items-center gap-5 p-2 max-md:flex-col">
        {DATA?.map((it) => (
          <NextCard name={it.name} age={it.age} type={it.type} key={it.id} />
        ))}
      </div>
      <div className="grid grid-cols-10 w-full border-2  border-black h-20">
        <div className="col-span-1"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-1"></div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};

export default App;
