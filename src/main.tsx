import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/main.module.scss";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root")!
);

root.render(<App />);
