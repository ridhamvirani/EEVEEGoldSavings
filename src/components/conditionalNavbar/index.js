"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../navbar"; 

const ConditionalNavbar = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);// Mark the component as mounted
  }, []);

  // Render nothing until mounted to avoid hydration issues
  if (!isMounted) {
    return null; 
  }

  // Check the current pathname
  if (router.pathname === "/login" || router.pathname === "/signup") {
    return null; 
  }

  return <Navbar />;
};

export default ConditionalNavbar;
