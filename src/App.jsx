import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { NotFound } from "./pages/Notfound/Notfound";
import { Home } from "./pages/Home/Home";
import { Careers } from "./pages/Careers/Careers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />}/>
          <Route index element={<Home />}/>
          <Route path="careers" element={<Careers />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
