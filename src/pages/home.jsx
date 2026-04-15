import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import AudienceSection from "../components/AudienceSection";
import ProcessSection from "../components/ProcessSection";
import SolutionSection from "../components/SolutionSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function Home() {
  const { user, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    if (role === "developer") {
      navigate("/dashboard/dev", { replace: true });
    }

    if (role === "startup") {
      navigate("/dashboard/startup", { replace: true });
    }
  }, [user, role, navigate]);

  return (
    <>
      <Hero />

      <ProblemSection />

      <AudienceSection />

      <ProcessSection />

      <SolutionSection />

      <CTASection />

      <Footer />
    </>
  );
}

export default Home;