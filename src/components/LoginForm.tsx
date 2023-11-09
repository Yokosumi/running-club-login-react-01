import { useState } from "react";

// dieses Object wird an useState übergeben als initialValue
const initialFormData = {
  login: "111",
  password: "222",
};

export const LoginForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleLoginChange = (login: string) => {
    const _formData = structuredClone(formData);
    _formData.login = login;
    setFormData(_formData);
  };
  const handlePasswordChange = (password: string) => {
    const _formData = structuredClone(formData);
    _formData.password = password;
    setFormData(_formData);
  };

  const handleFormSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };
  return (
    <fieldset className="border border-gray-500 p-4 w-full rounded bg-slate-300 bg-opacity-50">
      <legend>Welcome</legend>

      <div className="mb-4 flex gap-2">
        <label className="w-[5rem]" htmlFor="login">
          Login:
        </label>
        <input
          type="text"
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
