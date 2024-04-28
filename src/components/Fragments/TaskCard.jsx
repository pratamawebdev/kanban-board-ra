import { useState } from "react";
import Overlay from "./Overlay";

const TaskCard = ({
  titleTask,
  progress,
  handleOpenSetting,
  handleClose,
  id,
}) => {
  const [openOverlayId, setOpenOverlayId] = useState(null);

  const handleOpenOverlay = () => {
    setOpenOverlayId(id);
    handleOpenSetting();
  };

  const handleCloseOverlay = () => {
    setOpenOverlayId(null);
    handleClose();
  };
  return (
    <div className="w-full p-4 rounded border border-[#E0E0E0] bg-[#FAFAFA] flex gap-2 flex-col">
      <div className="w-full font-bold text-[14px] leading-6 text-[#404040]">
        {titleTask}
      </div>
      <div className="border-[#E0E0E0] w-full h-[1px] border-dashed border" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[175px] h-4 rounded-[9.999px] bg-[#EDEDED]">
            <div
              className=" h-full rounded-[9.999px]"
              style={{
                width: `${progress}%`,
                backgroundColor: progress < 100 ? "#019f9f" : "#43936C",
              }}
            />
          </div>
          {progress < 100 ? (
            <span className="text-xs text-[#757575]">{progress}%</span>
          ) : (
            <img
              src="images/checklist.svg"
              alt="checklist icon"
              className="w-4 h-4"
            />
          )}
        </div>
        <img
          src="images/setting.svg"
          alt="setting icon"
          onClick={handleOpenOverlay}
          className="cursor-pointer"
        />

        {openOverlayId === id && (
          <Overlay handleCloseOverlay={handleCloseOverlay} />
        )}
      </div>
    </div>
  );
};

export default TaskCard;
