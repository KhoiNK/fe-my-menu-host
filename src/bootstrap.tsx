import React from "react";
import { createRoot } from "react-dom/client";
import { RemoteComponent } from "./components/RemoteComponent";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <div>
        Hello
        <RemoteComponent
          remoteName="main"
          remoteUrl="http://localhost:3001/remoteEntry.js"
          module="Main"
        />
      </div>
    </React.StrictMode>
  );
};

const container = document.getElementById("root") as HTMLElement;
console.log("🚀 ~ container - host:", container);
const root = createRoot(container);
root.render(<App />);
