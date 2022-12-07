import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [tokenExpirationDate, setTokenExpirationDate] = useState()
  const [email, setEmail] = useState(null)
  const [cid, setcid] = useState(null)

  const login = useCallback((email, token, expirationDate) => {
    setToken(token)
    setEmail(email)
    if (email == 'DEVACCESS') {
      setcid('eg5tbesgbnjdav2yud723yy')
    } else { 
      async function obtainCompanyDetails() {
        const result = await fetch('http://localhost:5000/obtain-company-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
            })
        });
        const companyDetails = await result.json();
        console.log(companyDetails.companyinfo[0].name)
        console.log(companyDetails.cid)
        //navigateToPage(token)
        setcid(companyDetails.cid)
      }
      obtainCompanyDetails()
    }
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem('userData', JSON.stringify({
      email: email,
      token: token,
      expiration: tokenExpirationDate.toISOString()
    }))
  }, []);

  const logout = useCallback(() => {
    setToken(null)
    setEmail(null)
    setcid(null)
    setTokenExpirationDate(null)
    localStorage.removeItem('userData')
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime)
    } else {
      clearTimeout()
    }
  }, [logout, token, tokenExpirationDate])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.email, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  return { token, login, logout, email, cid };
};