import { Routes, Route} from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Home from "./components/Home";
import Description from "./components/Description";

function App() {
  return (
    <>
    <TopHeader/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description/:name" element={<Description />} />
        </Routes>
    
    </>
  );
}

export default App;
