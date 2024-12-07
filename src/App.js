import React from "react";
import User from "./components/User";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow"></div>
      <User />
    </div>
  );
}

export default App;
