import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";
import { AppProvider } from "./context/AppContext";

export const App = () => {
  // presentational elements
  return (
    <AppProvider>
      <div>
        {/* children passed into the AppProvider in AppContext.js */}
        <Header title="My ToDo Items" />
        <TodoForm />
        <Todos />
      </div>
    </AppProvider>
  );
};
