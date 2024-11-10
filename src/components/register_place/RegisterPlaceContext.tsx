import * as React from "react";
import { IRegisterPlaceContext } from "../../types/scrTypes";
import { useLocalStorage } from "../../hooks/useLocalStorage";

let RegisterPlaceContext = React.createContext<IRegisterPlaceContext>(null!);

let apCtxt = 0;

export function RegisterPlaceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [formValues, setFormValues] = useLocalStorage("formValues", null);

  let value: IRegisterPlaceContext = { formValues, setFormValues };

  return (
    <RegisterPlaceContext.Provider value={value}>
      {children}
    </RegisterPlaceContext.Provider>
  );
}

export function useRegisterPlace() {
  return React.useContext(RegisterPlaceContext);
}
