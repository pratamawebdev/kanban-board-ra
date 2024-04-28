import "./App.css";
import Navbar from "./components/Fragments/Navbar";
import Container from "./components/Layouts/Container";
import GroupTaskCard from "./components/Fragments/GroupTaskCard";
import TaskCard from "./components/Fragments/TaskCard";
import Modal from "./components/Fragments/Modal";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAddNewGroup from "./components/Fragments/FormAddNewGroup";
import { createTodo, getListOfTodos } from "./store/actions/todosActions";
import { getColorsByIndex } from "./utils/colorUtils";
import Overlay from "./components/Fragments/Overlay";
import SkeletonCard from "./components/Fragments/SkeletonCard";
import FormAddNewTask from "./components/Fragments/FormAddNewTask";

function App() {
  const isLoading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const [isOverlayAction, setIsOverlayAction] = useState(false);
  const overlayRef = useRef();
  const imgRef = useRef();

  const [formAddGroup, setFormAddGroup] = useState({
    showModal: false,
    titleModal: "Add New Group",
    isDeleteModal: false,
    titleButton: "Submit",
    modalContent: "FormAddNewGroup",
    valueInput: "",
    valueTextArea: "",
  });
  const [formAddTask, setFormAddTask] = useState({
    showModal: false,
    titleModal: "Create Task",
    isDeleteModal: false,
    titleButton: "Save Task",
    modalContent: "FormAddNewTask",
    valueInput: "",
    valueTextArea: "",
  });

  const allGroupTodos = useSelector((state) => state.todos.todos.data);

  const dispatch = useDispatch();
  const handleCloseModal = () =>
    setFormAddGroup({ ...formAddGroup, showModal: false });

  const bgAndBorderGroupColors = [
    "bg-[#F7FEFF] border-primary",
    "bg-[#FFFCF5] border-[#FEEABC]",
    "bg-[#FFFAFA] border-[#F5B1B7]",
    "bg-[#F8FBF9] border-[#B8DBCA]",
  ];

  const textAndBorderGroupColors = [
    "text-primary border-primary",
    "text-[#FA9810] border-[#FEEABC]",
    "text-[#E11428] border-[#F5B1B7]",
    "text-[#43936C] border-[#B8DBCA]",
  ];

  const openOverlay = (id) => {
    if (id) {
      setIsOverlayAction(true);
    }
  };

  const content = () => {
    if (formAddGroup.modalContent === "FormAddNewGroup") {
      return (
        <FormAddNewGroup
          valueInput={formAddGroup.valueInput}
          ValueTextArea={formAddGroup.valueTextArea}
          onChangeInput={(e) =>
            setFormAddGroup({
              ...formAddGroup,
              valueInput: e.target.value,
            })
          }
          onChangeTextArea={(e) =>
            setFormAddGroup({
              ...formAddGroup,
              valueTextArea: e.target.value,
            })
          }
        />
      );
    } else if (formAddGroup.modalContent === "FormAddNewTask") {
      return (
        <FormAddNewTask
          valueInput={formAddGroup.valueInput}
          ValueTextArea={formAddGroup.valueTextArea}
          onChangeInput={(e) =>
            setFormAddTask({
              ...formAddTask,
              valueInput: e.target.value,
            })
          }
          onChangeTextArea={(e) =>
            setFormAddTask({
              ...formAddTask,
              valueTextArea: e.target.value,
            })
          }
        />
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTodo({
        title: formAddGroup.valueInput,
        description: formAddGroup.valueTextArea,
      })
    );
  };

  useEffect(() => {
    dispatch(getListOfTodos());
  }, [dispatch]);

  return (
    <>
      <div className="relative">
        <Navbar
          onClick={() => {
            setFormAddGroup({
              ...formAddGroup,
              showModal: true,
            });
          }}
        />
        <Container>
          {error ? (
            <div className="flex items-center justify-center w-full h-full">
              Data is error
            </div>
          ) : isLoading ? (
            [1, 2, 3, 4].map((_, index) => {
              return <SkeletonCard key={index} />;
            })
          ) : (
            allGroupTodos?.map((todo, index) => {
              return (
                <GroupTaskCard
                  key={todo.id}
                  titleGroupTask={todo.title}
                  description={todo.description}
                  bgAndBorder={`${getColorsByIndex(
                    index,
                    bgAndBorderGroupColors
                  )}`}
                  textAndBorder={`${getColorsByIndex(
                    index,
                    textAndBorderGroupColors
                  )}`}
                  onClick={() => {
                    setFormAddTask({
                      ...formAddTask,
                      showModal: true,
                    });
                  }}
                >
                  {todo?.items?.length > 0 ? (
                    todo?.items?.map((item) => (
                      <TaskCard
                        key={item.id}
                        titleTask={item.name}
                        progress={item.progress_percentage}
                        handleOpenSetting={() => openOverlay(item.id)}
                        isOverlayAction={isOverlayAction}
                        handleClose={() => openOverlay(null)}
                        id={item.id}
                      />
                    ))
                  ) : (
                    <div className="py-2 px-4 rounded border border-[#E0E0E0] bg-[#FAFAFA] text-[14px] leading-6 text-[#757575]">
                      No Task
                    </div>
                  )}
                </GroupTaskCard>
              );
            })
          )}
        </Container>
        {formAddGroup.showModal ||
          (formAddTask.showModal && (
            <Modal
              firstClassname={
                formAddGroup.showModal || formAddTask.showModal
                  ? "opacity-[37.8%]"
                  : "opacity-0"
              }
              secondClassname={
                formAddGroup.showModal || formAddTask.showModal
                  ? "scale-100"
                  : "scale-95"
              }
              isDeleteModal={formAddGroup.isDeleteModal}
              title={formAddGroup.titleModal}
              onClick={handleCloseModal}
              titleButton={formAddGroup.titleButton}
              handleSubmit={handleSubmit}
            >
              {content()}
            </Modal>
          ))}
      </div>
    </>
  );
}

export default App;
