import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Completed from "./pages/Completed";
import Inprogres from "./pages/Inprogres";
import Deleted from "./pages/deleted";

import Navbar from "./components/Navbar";

import { TodoContextProvider } from "./context/todoContext";

function App() {
  return (
    <TodoContextProvider>
      <div className="app">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route index element={<Inprogres />} />
            <Route path="deleted" element={<Deleted />} />
            <Route path="completed" element={<Completed />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </TodoContextProvider>
  );
}

export default App;
