import { Routes, Route } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
