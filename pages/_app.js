import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { supabase } from "../utils/supabase";

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <div>
      <Navbar session={session} />
      <Component {...pageProps} session={session} />
      <Footer />
    </div>
  );
}

export default MyApp;
