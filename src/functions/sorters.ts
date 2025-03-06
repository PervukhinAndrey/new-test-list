import { ITask } from "../componens/task-list/task/task";

export const sortByString = ({
  arr,
  objKey,
  isASC,
}: {
  arr: ITask[];
  objKey: "name" | "type" | "site";
  isASC: boolean;
}) => {
  if (isASC) {
    return arr.sort((a, b) => {
      if (a[objKey] < b[objKey]) return -1;
      if (a[objKey] > b[objKey]) return 1;
      return 0;
    });
  } else {
    return arr.sort((a, b) => {
      if (a[objKey] > b[objKey]) return -1;
      if (a[objKey] < b[objKey]) return 1;
      return 0;
    });
  }
};

const statusSortPriority = {
  Online: 0,
  Paused: 1,
  Stopped: 2,
  Draft: 3,
};

export const sortByStatus = ({
  arr,
  isASC,
}: {
  arr: ITask[];
  isASC: boolean;
}) => {
  if (isASC) {
    return arr.sort((a, b) => {
      if (statusSortPriority[a.status] < statusSortPriority[b.status])
        return -1;
      if (statusSortPriority[a.status] > statusSortPriority[b.status]) return 1;
      return 0;
    });
  } else {
    return arr.sort((a, b) => {
      if (statusSortPriority[a.status] > statusSortPriority[b.status])
        return -1;
      if (statusSortPriority[a.status] < statusSortPriority[b.status]) return 1;
      return 0;
    });
  }
};
