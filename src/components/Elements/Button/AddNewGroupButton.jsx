const AddNewGroupButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="flex items-center gap-1 px-4 py-1 rounded-lg bg-primary text-layout"
      onClick={onClick}
    >
      <img src="images/plus-white.svg" alt="plus icon" className="w-3 h-3" />
      <span className="font-bold text-[12px] leading-5 text-layout">
        Add New Group
      </span>
    </button>
  );
};

export default AddNewGroupButton;
