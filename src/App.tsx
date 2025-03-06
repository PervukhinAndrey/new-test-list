import DashboardPage from "./pages/dashboard-page/dashboard-page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FinalizePage from "./pages/finalize-page/finalize-page";
import ResultsPage from "./pages/results-page/results-page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route
            path="/results"
            element={<Navigate replace to="/dashboard" />}
          />
          <Route path="/results/:id" element={<ResultsPage />} />
          <Route
            path="/finalize"
            element={<Navigate replace to="/dashboard" />}
          />
          <Route path="/finalize/:id" element={<FinalizePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
