import { Routes, Route } from "react-router";
import { Layout } from "./layout";
import { HomePage } from "./pages/home/page";
import { AIOrchestrationPage } from "./pages/ai-orchestration/page";
import { AutomationsPage } from "./pages/automations/page";
import { CloudInfrastructurePage } from "./pages/cloud-infrastructure/page";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/ai-orchestration" element={<AIOrchestrationPage />} />
        <Route path="/services/automations" element={<AutomationsPage />} />
        <Route path="/services/cloud-infrastructure" element={<CloudInfrastructurePage />} />
      </Route>
    </Routes>
  );
}
