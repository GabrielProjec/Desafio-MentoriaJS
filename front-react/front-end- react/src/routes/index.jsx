import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePge from "../page/Home";
import MemberCad from "../page/MemberCad";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MemberCad />} />
        <Route path="/user-list" element={<HomePge />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
