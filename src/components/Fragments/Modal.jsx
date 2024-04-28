import ModalButton from "../Elements/Button/ModalButton";

const Modal = ({
  isDeleteModal = false,
  title,
  titleButton,
  onClick,
  handleSubmit,
  children,
  firstClassname,
  secondClassname,
}) => {
  return (
    <div>
      <div
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ${firstClassname}`}
      />
      <div
        className={`z-50 rounded-[10px] transition-transform duration-500 shadow-lg  bg-layout p-6 w-[420px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${secondClassname}`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {isDeleteModal && (
              <img
                src="images/exclamation.svg"
                alt="exclamation icon"
                className="w-6 h-6"
              />
            )}
            <span className="text-lg font-bold text-[#1D1F20] w-full">
              {title}
            </span>
            <img
              src="images/close-black.svg"
              alt="close icon"
              className="w-6 h-6 cursor-pointer"
              onClick={onClick}
            />
          </div>
          {isDeleteModal ? (
            <div>
              Are you sure want to delete this task? your action can’t be
              reverted.
            </div>
          ) : (
            children
          )}
          <div className="flex gap-[10px] justify-end items-center">
            <ModalButton classname={"border border-[#E0E0E0]"}>
              Cancel
            </ModalButton>
            <ModalButton
              type={"submit"}
              onClick={handleSubmit}
              classname={`${
                isDeleteModal ? "bg-[#E11428]" : "bg-primary text-layout"
              }`}
            >
              {titleButton}
            </ModalButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
