import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import RoutesConfig from "./routes/RoutesConfig";
import { MinimizeContextProvider } from "./context/LayoutContext";

function App() {
  return (
    <div className="w-full max-w-full m-auto">
      <Router>
        <MinimizeContextProvider>
          <RoutesConfig />
        </MinimizeContextProvider>
      </Router>
    </div>
  );
}

export default App;
