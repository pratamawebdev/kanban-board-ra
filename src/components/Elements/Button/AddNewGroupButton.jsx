const AddNewGroupButton = () => {
  return (
    <button
      type="button"
      className="bg-primary text-layout flex items-center rounded-lg gap-1 py-1 px-4"
    >
      <img src="images/plus-white.svg" alt="plus icon" className="w-3 h-3" />
      <span className="font-bold text-[12px] leading-5 text-layout">
        Add New Group
      </span>
    </button>
  );
};

export default AddNewGroupButton;
