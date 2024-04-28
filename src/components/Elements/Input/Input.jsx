const Input = ({ type = "text", onChange, value, placeholder, classname }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={`rounded-lg py-2 px-4 border-[2px] border-[#E0E0E0] w-full bg-layout placeholder:text-[14px] placeholder:leading-6 ${classname}`}
    />
  );
};

export default Input;
