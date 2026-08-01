import { Routes, Route } from "react-router";
import { Layout } from "./layout";
import { HomePage } from "./pages/home/page";
import { AIOrchestrationPage } from "./pages/ai-orchestration/page";
import { AutomationsPage } from "./pages/automations/page";
import { CloudInfrastructurePage } from "./pages/cloud-infrastructure/page";
import { CrmOrchestrationPage } from "./pages/crm-orchestration/page";
import { DataEngineeringPage } from "./pages/data-engineering/page";
import { AboutPage } from "./pages/about/page";
import { ContactPage } from "./pages/contact/page";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/ai-orchestration" element={<AIOrchestrationPage />} />
        <Route path="/services/automations" element={<AutomationsPage />} />
        <Route path="/services/cloud-infrastructure" element={<CloudInfrastructurePage />} />
        <Route path="/services/crm-orchestration" element={<CrmOrchestrationPage />} />
        <Route path="/services/data-engineering" element={<DataEngineeringPage />} />
      </Route>
    </Routes>
  );
}
