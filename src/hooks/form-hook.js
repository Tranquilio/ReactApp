import { useState, useCallback } from "react";

export const useForm = () => {
  const [company, setCompanyName] = useState(null)
  const [formLink, setFormLink] = useState(null)

  const saveFormContext = useCallback((company, link) => {
    setCompanyName(company)
    setFormLink(link)
    console.log(company)
    console.log(link)
    console.log('ssssss')
  }, []);

  const clearFormContext = useCallback(() => {
    setCompanyName(null)
    setFormLink(null)
  }, []);

  return { company, formLink, saveFormContext, clearFormContext }
};