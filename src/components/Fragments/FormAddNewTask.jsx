import { FieldInput, FieldTextArea } from "../Elements/Input/Index";

const FormAddNewTask = ({
  valueInput,
  onChangeInput,
  valueTextArea,
  onChangeTextArea,
}) => {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <FieldInput
          placeholder="Type your Title"
          type="text"
          value={valueInput}
          onChange={onChangeInput}
        >
          Title
        </FieldInput>

        <FieldTextArea
          placeholder="Type your Description"
          name="description"
          id="description"
          value={valueTextArea}
          onChange={onChangeTextArea}
        >
          Description
        </FieldTextArea>
      </div>
    </form>
  );
};

export default FormAddNewTask;
