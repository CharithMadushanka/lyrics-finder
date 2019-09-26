import React, { useState } from "react";

export const Context = React.createContext();

function ContextController({ children }) {
  const [state, setState] = useState({ trackList : [], heading : '' }); //Initial state

  return (
    <div>
      <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    </div>
  );
}

export default ContextController;
