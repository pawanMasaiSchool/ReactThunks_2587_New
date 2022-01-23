import { Routes } from "./AllRoutes.jsx/Routes";
import Navbar from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Navbar />
      <Routes />
    </div>
  );
}
