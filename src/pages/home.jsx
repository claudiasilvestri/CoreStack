import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Hero from "../components/home/Hero";
import ProblemSection from "../components/home/ProblemSection";
import SolutionSection from "../components/home/SolutionSection";
import ProcessSection from "../components/home/ProcessSection";
import AudienceSection from "../components/home/AudienceSection";
import CTASection from "../components/home/CTASection";
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
      <SolutionSection />
      <ProcessSection />
      <AudienceSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;