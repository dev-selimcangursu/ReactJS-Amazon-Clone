import "./App.css";
import MasterLayout from "./MasterLayout";
import Router from "./Router";
import { ContextProvider } from "./ContextApi";
function App() {
  return (
    <>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </>
  );
}

export default App;
