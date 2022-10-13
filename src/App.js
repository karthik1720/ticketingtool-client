import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/authentication/Register/Register";
import Login from "./pages/authentication/Login/Login";

import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Main />}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
