import AddNewGroupButton from "../Elements/Button/AddNewGroupButton";

const Navbar = ({ onClick }) => {
  return (
    <div className="max-w-[1400px] bg-layout h-16 px-6 border-b border-shadow flex items-center mx-auto">
      <div className=" w-full h-14 flex items-center gap-[10px]">
        <h1 className="text-lg font-bold text-dark">Product Roadmap</h1>
        <AddNewGroupButton onClick={onClick} />
      </div>
    </div>
  );
};

export default Navbar;
