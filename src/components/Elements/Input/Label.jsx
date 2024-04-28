const Label = ({ htmlFor, id, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      id={id}
      className="text-[12px] leading-5 text-[#404040]"
    >
      {children}
    </label>
  );
};

export default Label;
