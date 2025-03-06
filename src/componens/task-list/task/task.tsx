import { useNavigate } from "react-router-dom";
import { EStatus, EType } from "../../../enums/enums";
import CustomButton from "../../../ui-kit/custom-button/custom-button";
import styles from "./styled.module.scss";
import cn from "classnames";

export interface ITask {
  id: number;
  name: string;
  type: EType;
  status: EStatus;
  site: string;
  borderColor: number;
}
type TProps = {
  task: ITask;
};
function Task(props: TProps) {
  const { task } = { ...props };
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        styles.taskContainer,
        styles["borderLeftColor" + task.borderColor]
      )}
    >
      <span>{task.name}</span>
      <span>{task.type}</span>
      <span className={task.status && styles["color" + task.status]}>
        {task.status}
      </span>
      <span>{task.site}</span>
      <div>
        <CustomButton
          buttonType={task.status !== "Draft" ? "primary" : "secondary"}
          callback={() => {
            navigate(
              `/${task.status !== "Draft" ? "results" : "finalize"}/${task.id}`
            );
          }}
        >
          {task.status !== "Draft" ? "Results" : "Finalize"}
        </CustomButton>
      </div>
    </div>
  );
}

export default Task;
