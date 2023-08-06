import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Inbox } from "./Pages/Inbox";
import { Spam } from "./Pages/Spam";
import { Trash } from "./Pages/Trash";
import { Header } from "./Components/Header";
import { SingleEmail } from "./Pages/SingleEmail";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/:mailId" element={<SingleEmail />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}
