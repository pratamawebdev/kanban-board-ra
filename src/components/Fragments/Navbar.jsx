import AddNewGroupButton from "../Elements/Button/AddNewGroupButton";

const Navbar = () => {
  return (
    <div className="max-w-[1400px] bg-layout h-16 px-6 border-b border-shadow flex items-center mx-auto">
      <div className=" w-full h-14 flex items-center gap-[10px]">
        <h1 className="font-bold text-dark text-lg">Product Roadmap</h1>
        <AddNewGroupButton />
      </div>
    </div>
  );
};

export default Navbar;
