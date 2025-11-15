import { useEffect } from "react";
import { useLocation } from "wouter";

const UgrmcDocuments = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to UGRMC page
    setLocation("/ugrmc-iec");
  }, [setLocation]);

  return null;
};

export default UgrmcDocuments;
