import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Spinner from "./spinner";
const IndexHome = lazy(() => import("./home/IndexHome"));
const IndexAdmin = lazy(() => import("./admin/IndexAdmin"));

export default function App() {
  return (
    <Suspense fallback={<Spinner/>}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home/*" element={<IndexHome />} />
          <Route path="/Admin/*" element={<IndexAdmin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
