export const LoginForm = () => {
  return (
    <fieldset className="border border-gray-500 p-4 w-full rounded">
      <legend>Welcome</legend>

      <div className="mb-4 flex gap-2">
        <label className="w-[5rem]" htmlFor="login">
          Login:
        </label>
        <input type="text" id="login" />
      </div>

      <div className="mb-4 flex gap-2">
        <label className="w-[5rem]" htmlFor="password">
          Password:
        </label>
        <input type="password" id="password" />
      </div>

      <div className="mt-5 flex justify-end pr-3">
        <button>Time to run!</button>
      </div>
    </fieldset>
  );
};
