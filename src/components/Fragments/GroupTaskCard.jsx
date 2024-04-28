const GroupTaskCard = ({
  titleGroupTask,
  description,
  bgAndBorder,
  textAndBorder,
  children,
  onClick,
}) => {
  return (
    <div
      className={`h-full max-w-[326px] min-w-[326px] ${bgAndBorder} border flex flex-col gap-2 p-4 rounded`}
    >
      <span
        className={`rounded py-[2px] px-2 text-[12px] leading-5 ${textAndBorder} border  w-fit`}
      >
        {titleGroupTask}
      </span>
      <span className="text-[12px] leading-5 font-bold text-[#404040]">
        {description}
      </span>
      {children}
      <span
        className="flex gap-[5px] text-[12px] leading-5 items-center cursor-pointer"
        onClick={onClick}
      >
        <img src="images/plus-black.svg" alt="plus icon" className="w-5 h-5" />
        New Task
      </span>
    </div>
  );
};

export default GroupTaskCard;
