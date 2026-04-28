import { useState } from "react";
import useTheme from "./hooks/useTheme";
import useDebounce from "./hooks/useDebounce";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./pages/Dashboard";
import BuggyComponent from "./pages/BuggyComponent";

function App() {
  const { theme, toggleTheme } = useTheme();

  const [name, setName] = useLocalStorage("name", "");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 700);

  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <main className="container">
      <h1>React Reusable Logic Demo</h1>

      <section className="card">
        <h2>useTheme</h2>
        <p>Current theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </section>

      <section className="card">
        <h2>useLocalStorage</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Saved name: {name}</p>
      </section>

      <section className="card">
        <h2>useDebounce</h2>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search something..."
        />
        <p>Immediate value: {searchTerm}</p>
        <p>Debounced value: {debouncedSearchTerm}</p>
      </section>

      <section className="card">
        <h2>withAuth HOC</h2>
        <button onClick={toggleLogin}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        <p>Status: {isLoggedIn ? "Logged in" : "Logged out"}</p>
      </section>

      <Dashboard />
      <BuggyComponent />
    </main>
  );
}

export default App;