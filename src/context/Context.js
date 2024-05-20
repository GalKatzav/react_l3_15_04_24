import { createContext, useState } from "react";
export const AppContext = createContext(null);

export function ContextProvider(props) {
  const [counter, setCounter] = useState(99);

  const Glovalvalue = {
    counter,
    setCounter,
  };
  return (
    <AppContext.Provider value={Glovalvalue}>
      {props.children}
    </AppContext.Provider>
  );
}
