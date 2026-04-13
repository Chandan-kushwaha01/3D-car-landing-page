import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
// npm i three gsap @react-three/fiber @react-three/drei
// npx gltfjsx monkey.jlb

const App = () => {
  return <div className="text-zinc-100 bg-zinc-950">
    <NavBar />
    <main className="h-screen">
      {/* pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
    {/* <Footer /> */}
  </div>;
};

export default App;
