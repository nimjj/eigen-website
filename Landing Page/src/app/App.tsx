import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { Layout } from "./layout";
import { HomePage } from "./pages/home/page";

const AIOrchestrationPage = lazy(() =>
  import("./pages/ai-orchestration/page").then((m) => ({ default: m.AIOrchestrationPage }))
);
const AutomationsPage = lazy(() =>
  import("./pages/automations/page").then((m) => ({ default: m.AutomationsPage }))
);
const CloudInfrastructurePage = lazy(() =>
  import("./pages/cloud-infrastructure/page").then((m) => ({ default: m.CloudInfrastructurePage }))
);
const CrmOrchestrationPage = lazy(() =>
  import("./pages/crm-orchestration/page").then((m) => ({ default: m.CrmOrchestrationPage }))
);
const DataEngineeringPage = lazy(() =>
  import("./pages/data-engineering/page").then((m) => ({ default: m.DataEngineeringPage }))
);
const AboutPage = lazy(() =>
  import("./pages/about/page").then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import("./pages/contact/page").then((m) => ({ default: m.ContactPage }))
);

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--accent-yellow)] border-t-transparent" />
        </div>
      }
    >
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
    </Suspense>
  );
}
