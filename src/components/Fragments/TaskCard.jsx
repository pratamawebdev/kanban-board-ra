const TaskCard = () => {
  return (
    <div className="w-full p-4 rounded border border-[#E0E0E0] flex gap-2 flex-col">
      <div className="w-full font-bold text-[14px] leading-6 text-[#404040]">
        Re-designed the zero-g doggie bags. No more spills!
      </div>
      <div className="border-[#E0E0E0] w-full h-[1px] border-dashed border" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-[175px] h-4 bg-[#43936C] rounded-[9.999px]"></div>
          <img
            src="images/checklist.svg"
            alt="checklist icon"
            className="w-4 h-4"
          />
        </div>
        <img src="images/setting.svg" alt="" />
      </div>
      <span className="flex gap-[5px] text-[12px] leading-5 items-center">
        <img src="images/plus-black.svg" alt="plus icon" className="w-5 h-5" />
        New Task
      </span>
    </div>
  );
};

export default TaskCard;
