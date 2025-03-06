import Task, { ITask } from "./task/task";
import styles from "./styled.module.scss";
import ChevronTopLightIcon from "../icons/chevron-top-light";
import cn from "classnames";

export type TSortParams = ["name" | "type" | "site" | "status", boolean] | [];
type TProps = {
  tasks?: ITask[];
  sortParams: TSortParams;
  setSortParams: (a: (b: TSortParams) => TSortParams) => void;
};
function TaskList(props: TProps) {
  const { tasks, sortParams, setSortParams } = { ...props };

  const handleOnSortClick = (key: "name" | "type" | "site" | "status") => {
    setSortParams((prev) => {
      if (prev[0] === key) {
        return [key, !prev[1]];
      } else {
        return [key, true];
      }
      //   ...prev,
      //   isTypeReverseSort: !prev.isTypeReverseSort,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.tasksHeader}>
        <div
          className={styles.typeBlock}
          onClick={() => {
            handleOnSortClick("name");
          }}
        >
          <span>NAME</span>
          {sortParams.length > 0 && sortParams[0] === "name" && (
            <div
              className={cn(styles.chevronBlock, {
                [styles.rotate]: sortParams[1],
              })}
            >
              <ChevronTopLightIcon />
            </div>
          )}
        </div>
        <div
          className={styles.typeBlock}
          onClick={() => {
            handleOnSortClick("type");
          }}
        >
          <span>TYPE</span>
          {sortParams.length > 0 && sortParams[0] === "type" && (
            <div
              className={cn(styles.chevronBlock, {
                [styles.rotate]: sortParams[1],
              })}
            >
              <ChevronTopLightIcon />
            </div>
          )}
        </div>

        <div
          className={styles.typeBlock}
          onClick={() => {
            handleOnSortClick("status");
          }}
        >
          <span>STATUS</span>
          {sortParams.length > 0 && sortParams[0] === "status" && (
            <div
              className={cn(styles.chevronBlock, {
                [styles.rotate]: sortParams[1],
              })}
            >
              <ChevronTopLightIcon />
            </div>
          )}
        </div>

        <div
          className={styles.typeBlock}
          onClick={() => {
            handleOnSortClick("site");
          }}
        >
          <span>SITE</span>
          {sortParams.length > 0 && sortParams[0] === "site" && (
            <div
              className={cn(styles.chevronBlock, {
                [styles.rotate]: sortParams[1],
              })}
            >
              <ChevronTopLightIcon />
            </div>
          )}
        </div>
      </div>

      <div className={styles.tasksContainer}>
        {tasks ? (
          tasks.map((el) => <Task task={el} key={el.id} />)
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}

export default TaskList;
