import { useEffect, useMemo, useState } from "react";
import styles from "./styled.module.scss";

import { getSites } from "../../api/get-sites";
import FindIcon from "../../componens/icons/find";
import TaskList, { TSortParams } from "../../componens/task-list/task-list";
import CustomInput from "../../ui-kit/custom-input/custom-input";

import { getTests, ISite, ITest } from "../../api/get-tests";
import {
  formatEmail,
  // formatSringFromUppercase,
} from "../../functions/formatters";
import { EStatus, EType } from "../../enums/enums";
import { ITask } from "../../componens/task-list/task/task";
import CustomButton from "../../ui-kit/custom-button/custom-button";
import { sortByStatus, sortByString } from "../../functions/sorters";

function DashboardPage() {
  const [searchParam, setSearchParam] = useState("");
  const [tests, setTests] = useState<ITest[] | null>(null);
  const [sites, setSites] = useState<ISite[] | null>(null);
  const [sortParams, setSortParams] = useState<TSortParams | []>([]);

  useEffect(() => {
    getSites({ onSuccess: setSites });
    getTests({ onSuccess: setTests });
  }, []);
  const taskListData = useMemo(() => {
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }
    if (tests && sites) {
      return tests.map((el) => {
        const newEl: ITask = {
          id: el.id,
          name: el.name,
          //  type: formatSringFromUppercase(el.type),
          type: EType[el.type],
          status: EStatus[el.status],
          site: formatEmail(sites.find((i) => i.id === el.siteId)!.url),
          borderColor: getRandomInt(3),
        };

        return newEl;
      });
    } else {
      return null;
    }
  }, [tests, sites]);

  const filteredListData = useMemo(() => {
    if (taskListData && searchParam) {
      return taskListData.filter((el) =>
        el.name.toLowerCase().includes(searchParam.toLowerCase())
      );
    } else if (taskListData && !searchParam) {
      return taskListData;
    } else {
      return null;
    }
  }, [searchParam, taskListData]);

  const sortedListData = useMemo(() => {
    if (filteredListData && sortParams.length > 0) {
      if (sortParams[0] === "status") {
        return sortByStatus({
          arr: filteredListData,
          isASC: sortParams[1] || false,
        });
      } else {
        return sortByString({
          arr: filteredListData,
          objKey: sortParams[0] || "name",
          isASC: sortParams[1] || false,
        });
      }
    } else if (filteredListData && sortParams.length === 0) {
      return filteredListData;
    } else {
      return null;
    }
  }, [sortParams, filteredListData]);

  const reset = () => {
    setSearchParam("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Header</h1>
      <CustomInput
        value={searchParam}
        callback={setSearchParam}
        prefix={<FindIcon />}
        postfix={
          sortedListData?.length === 1
            ? "1 test"
            : `${sortedListData?.length} tests`
        }
      />
      {filteredListData ? (
        filteredListData.length > 0 ? (
          <TaskList
            tasks={filteredListData}
            sortParams={sortParams}
            setSortParams={setSortParams}
          />
        ) : (
          <div className={styles.notResultContainer}>
            <span className={styles.notResult}>
              Your search did not match any results.
            </span>
            <div className={styles.reset}>
              <CustomButton buttonType={"primary"} callback={reset}>
                Reset
              </CustomButton>
            </div>
          </div>
        )
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default DashboardPage;
