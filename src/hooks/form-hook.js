import { useState, useCallback } from "react";

export const useForm = () => {
  const [companyName, setCompanyName] = useState(null)
  const [formLink, setFormLink] = useState(null)

  const saveFormContext = useCallback((companyName, link) => {
    setCompanyName(companyName)
    setFormLink(link)
    console.log(companyName)
    console.log(link)
    console.log('ssssss')
  }, []);

  const clearFormContext = useCallback(() => {
    setCompanyName(null)
    setFormLink(null)
  }, []);

  return { companyName, formLink, saveFormContext, clearFormContext }
};