import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

import Hero from "../components/hero";
import HiringSection from "../components/hiringsection";
import DeveloperSection from "../components/developersection";
import HowItWorks from "../components/howitworks";
import DiversitySection from "../components/whydifferent";
import FinalCTA from "../components/finalcta";
import Footer from "../components/footer";

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

      <HiringSection />

      <DeveloperSection />

      <HowItWorks />

      <DiversitySection />

      <FinalCTA />

      <Footer />
    </>
  );
}

export default Home;