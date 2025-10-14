import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import UserList from "./components/UserList";

function App() {
  const [activeTab, setActiveTab] = useState<
    "counter" | "users" | "typescript"
  >("counter");

  return (
    <div className="app">
      <header className="app-header">
        <h1>TypeScript + React Playground</h1>
        <p>다양한 TypeScript 및 React 예제를 실험해보세요</p>
      </header>

      <nav className="tab-nav">
        <button
          className={activeTab === "counter" ? "active" : ""}
          onClick={() => setActiveTab("counter")}
        >
          카운터
        </button>
        <button
          className={activeTab === "users" ? "active" : ""}
          onClick={() => setActiveTab("users")}
        >
          사용자 목록
        </button>
      </nav>

      <main className="main-content">
        {activeTab === "counter" && <Counter />}
        {activeTab === "users" && <UserList />}
      </main>
    </div>
  );
}

export default App;
