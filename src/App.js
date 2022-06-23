import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Indonesia from "./pages/Indonesia";
import Provinces from "./pages/Provinces";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/indonesia" element={<Indonesia/>}/>
          <Route path="/provinces" element={<Provinces/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
