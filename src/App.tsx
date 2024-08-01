import "./App.css";
import MessagesList from "./components/messagesList";

function App() {
  return (
    <main className="lg:container mx-auto p-8">
      <h1 className="text-3xl text-center font-bold p-4 border border-dashed rounded">
        Chat Game 👾
      </h1>
      <MessagesList />
    </main>
  );
}

export default App;
