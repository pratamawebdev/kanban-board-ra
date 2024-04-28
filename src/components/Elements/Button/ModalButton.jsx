const ModalButton = ({ children, classname, type, onClick }) => {
  return (
    <button
      type={type}
      className={`font-bold text-[14px] leading-6 py-1 px-4 rounded-lg shadow-md ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ModalButton;
