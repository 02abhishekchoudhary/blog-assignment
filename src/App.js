import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";

const App = () => {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
