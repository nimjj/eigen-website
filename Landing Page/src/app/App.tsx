import { Routes, Route } from "react-router";
import { Layout } from "./layout";
import { HomePage } from "./pages/home/page";
import { AIOrchestrationPage } from "./pages/ai-orchestration/page";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/ai-orchestration" element={<AIOrchestrationPage />} />
      </Route>
    </Routes>
  );
}
