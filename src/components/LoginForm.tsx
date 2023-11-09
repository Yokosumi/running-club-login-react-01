import { useState, useRef } from "react";
import * as config from "../config";

export const LoginForm = () => {
  const [formData, setFormData] = useState(config.initialFormData);
  const [legend, setLegend] = useState("Welcome");
  const inputLoginRef = useRef<HTMLInputElement>(null);

  const handleLoginChange = (login: string) => {
    // hier wird ein deep clone von formData erstellt
    const _formData = structuredClone(formData);
    //hier wird der clone an den login prop gegeben
    _formData.login = login;
    //hier wird der clone gesetzt
    setFormData(_formData);
  };
  const handlePasswordChange = (password: string) => {
    const _formData = structuredClone(formData);
    _formData.password = password;
    setFormData(_formData);
  };

  const handleFormSubmit = () => {
    if (formData.login !== config.user.login) {
      setLegend("Login was incorrect");
      if (inputLoginRef.current) {
        inputLoginRef.current.focus();
      }
    }
  };
  return (
    <fieldset className="border border-gray-500 p-4 w-full rounded bg-slate-300 bg-opacity-50">
      <legend className="font-bold">{legend}</legend>

      <div className="mb-4 flex gap-2">
        <label className="w-[5rem]" htmlFor="login">
          Login:
        </label>
        <input
          type="text"
          autoFocus
          ref={inputLoginRef}
          id="login"
          value={formData.login}
          onChange={(e) => handleLoginChange(e.target.value)}
        />
      </div>

      <div className="mb-4 flex gap-2">
        <label className="w-[5rem]" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
      </div>

      <div className="mt-5 flex justify-end pr-3">
        <button onClick={handleFormSubmit}>Time to run!</button>
      </div>
      <pre className="debug">{JSON.stringify(formData, null, 2)}</pre>
    </fieldset>
  );
};
