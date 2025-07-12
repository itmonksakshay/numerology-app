import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import NumerologyDetail from "./pages/numerologyDetail/NumerologyDetail";
import About from "./pages/about/About";
import NoMatch from "./pages/noMatch/NoMatch";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NumerologyDetail />}>
          <Route index element={<NumerologyDetail />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
