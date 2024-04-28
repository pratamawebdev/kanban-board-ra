const SkeletonCard = () => {
  return (
    <div
      className={`h-full animate-pulse max-w-[326px] min-w-[326px]  border flex flex-col gap-2 p-4 rounded`}
    >
      <span className={`rounded-full h-3 bg-gray-200 leading-5 w-20`} />

      <span className="w-20 h-3 bg-gray-200 rounded-full" />

      <div className="w-full p-4 rounded border border-[#E0E0E0] bg-[#FAFAFA] flex gap-2 flex-col">
        <div className="w-full h-2 bg-gray-200 rounded-full " />
        <div className="w-[30%] h-2 bg-gray-200 rounded-full " />
        <div className="border-[#E0E0E0] w-full h-[1px] border-dashed border" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[175px] h-4 rounded-[9.999px] bg-gray-200">
              <div className=" h-full rounded-[9.999px] bg-gray-200" />
            </div>

            <span className="w-4 h-4 bg-gray-200 rounded-full" />
          </div>
          <img src="images/setting.svg" alt="setting icon" />
        </div>
      </div>
      <span className="flex gap-[5px] text-[12px] leading-5 items-center">
        <img src="images/plus-black.svg" alt="plus icon" className="w-5 h-5" />
        New Task
      </span>
    </div>
  );
};

export default SkeletonCard;
