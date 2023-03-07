import { useState, createContext } from "react";

export let Context = createContext();

function LoginContext(props) {
  let [isLogin, setLogin] = useState(false);
 
  return (
    <Context.Provider
      value={{ isLogin, setLogin}}
    >
      {props.children}
    </Context.Provider>
  );
}

export default LoginContext;
