import { overlayMenu } from "../../utils/data";

const Overlay = ({
  handleCloseOverlay,
  handleDelete,
  handleMoveRight,
  handleMoveLeft,
  handleEdit,
}) => {
  const settingOption = (item) => {
    if (item === "handleDelete") {
      handleDelete();
      console.log("delete");
    } else if (item === "handleMoveRight") {
      handleMoveRight();
    } else if (item === "handleMoveLeft") {
      handleMoveLeft();
    } else if (item === "handleEdit") {
      handleEdit();
    }
  };
  return (
    <div className="absolute z-10 top-9 left-[236px]">
      <div className="relative z-20 p-4 w-[320px] h-[160px] bg-white rounded-lg py-2 shadow-md">
        <img
          src="./images/close-black.svg"
          alt="close black icon"
          className="absolute w-4 h-4 cursor-pointer right-2"
          onClick={handleCloseOverlay}
        />
        {overlayMenu.map((item) => (
          <div
            key={item.id}
            onClick={() => settingOption(item.onClick)}
            className={`flex gap-[10px] text-[14px] h-9 cursor-pointer leading-6 font-semibold items-center mx-4 tracking-[0.2px] ${
              item.title !== "Delete"
                ? "hover:text-[#01959F]"
                : "hover:text-[#E11428]"
            }`}
          >
            <img
              src={`./images/${item.icon}.svg`}
              alt="arrow right icon"
              className="w-6 h-6 cursor-pointer"
            />
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overlay;
