const TextArea = ({
  name,
  id,
  cols = 30,
  rows = 10,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <textarea
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="rounded-lg py-2 px-4 border-[2px] h-[88px] border-[#E0E0E0] w-full bg-layout placeholder:text-[14px] placeholder:leading-6"
    />
  );
};

export default TextArea;
