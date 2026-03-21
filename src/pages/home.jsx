import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

import Hero from "../components/hero";
import ForCompanies from "../components/ForCompanies";
import ForDevelopers from "../components/ForDevelopers";
import ProcessSection from "../components/ProcessSection";
import SolutionSection from "../components/SolutionSection";
import CTASection from "../components/CTASection";
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

      <ForCompanies />

      <ForDevelopers />

      <ProcessSection />

      <SolutionSection />

      <CTASection />

      <Footer />
    </>
  );
}

export default Home;