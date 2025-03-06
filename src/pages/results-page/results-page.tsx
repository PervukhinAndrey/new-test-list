import { useEffect, useState } from "react";
import styles from "./styled.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { getTests, ITest } from "../../api/get-tests";
import ChevronLeftIcon from "../../componens/icons/chevron-left";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [task, setTask] = useState<ITest[] | null>(null);
  useEffect(() => {
    getTests({
      onSuccess: setTask,
      id: Number(location.pathname.replace("/finalize/", "")),
    });
  }, [location]);
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Results</h1>
      <span>{task ? task[0].name : "loading..."}</span>
      <div
        className={styles.backBlock}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <ChevronLeftIcon />
        <span className={styles.backText}>Back</span>
      </div>
    </div>
  );
}

export default ResultsPage;
