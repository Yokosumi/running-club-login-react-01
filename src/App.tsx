import { useState } from "react";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";
import { LoggedInPage } from "./components/LoggedInPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Header />
      {isLoggedIn ? (
        <LoggedInPage />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
