import Input from "./Input";
import Label from "./Label";
import TextArea from "./TextArea";

const FieldInput = ({
  children,
  htmlFor,
  id,
  type,
  value,
  placeholder,
  onChange,
  classname,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor} id={id}>
        {children}
      </Label>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        classname={classname}
      />
    </div>
  );
};

const FieldTextArea = ({
  name,
  id,
  cols = 30,
  rows = 10,
  value,
  placeholder,
  onChange,
  children,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} id={id}>
        {children}
      </Label>
      <TextArea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export { FieldInput, FieldTextArea };
