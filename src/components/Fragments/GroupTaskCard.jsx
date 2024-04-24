import TaskCard from "./TaskCard";

const GroupTaskCard = () => {
  return (
    <div className="min-h-40 max-w-[326px] bg-[#F7FEFF] border-primary border flex flex-col gap-2 p-4 rounded">
      <span className="rounded py-[2px] px-2 text-[12px] leading-5 text-primary border border-primary w-fit">
        Group Task 1
      </span>
      <span className="text-[12px] leading-5 font-bold text-[#404040]">
        January - March
      </span>
      <TaskCard />
    </div>
  );
};

export default GroupTaskCard;
