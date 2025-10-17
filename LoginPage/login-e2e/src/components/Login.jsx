import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accepted, setAccepted] = useState(false);
    const[error, setError] = useState({
        email: null,
        password: null,
        accepted: null
    });
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!email || !emailRegex.test(email)) {
            return "Geçerli bir email giriniz";
        }
        return null;
};

    const validatePassword = (password) => {

        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!password || !strongPasswordRegex.test(password)) {
            return "Şifre en az 8 karakter olmalı, büyük harf ve rakam içermeli";
        }
        return null;
    };

    const validateAccepted = (isAccepted) => {
        if (!isAccepted) {
            return "Şartları kabul etmelisiniz";
        }
        return null;
    };

    function handleEmailChange(e) {
        let newEmail=e.target.value;
        setEmail(newEmail);
        let result=validateEmail(newEmail);
        setError(prevError => ({...prevError, email: result}));
        
    }

    function handlePasswordChange(e) {
        let newPassword=e.target.value;
        setPassword(newPassword);
        let result=validatePassword(newPassword);
        setError(prevError => ({...prevError, password: result}));
    }

    function handleAcceptedChange(e) {
        let newAccepted=e.target.checked;
        setAccepted(newAccepted);
        let result=validateAccepted(newAccepted);
        setError(prevError => ({...prevError, accepted: result}));
    }
        
    function handleSubmit(e) {
        e.preventDefault();
        
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const acceptedError = validateAccepted(accepted);

        setError({
            email: emailError,
            password: passwordError,
            accepted: acceptedError
        });
        
        if (!emailError && !passwordError && !acceptedError) {
            navigate("/success");
        }

        


    }
    const isFormValid = !validateEmail(email) && !validatePassword(password) && !validateAccepted(accepted);
    return (
       
        <div className="page">
            <form onSubmit={handleSubmit} className="card form" style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            margin: "80px auto",
            gap: "12px",
  }}>
            <div className="field">
                <label htmlFor="email">E-posta</label>
            <input 
            id="email"
            onChange={handleEmailChange} 
            type="email" 
            value={email}
            placeholder="e-mail"
            style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "6px",
  }}
             />
             {error.email && <p style={{ color: "red", fontSize: "14px", margin: "0" }} role="alert">{error.email}</p>}
            </div>

            <div className="field">
                <label htmlFor="password">Şifre</label>
            <input 
            id="password"
            onChange={handlePasswordChange} 
            type="password" 
            value={password}
            placeholder="password"
            style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "6px",
  }}
            />
            {error.password && <p style={{ color: "red", fontSize: "14px", margin: "0" }} role="alert">{error.password}</p>}
            </div>

            <div className="field checkbox">
                <label style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
  }}>
            <input 
            id="accepted"
            onChange={handleAcceptedChange} 
            checked={accepted} 
            type="checkbox" 
            />
            Şartları kabul ediyorum
            </label>
            {error.accepted && <p style={{ color: "red", fontSize: "14px", margin: "0" }} role="alert">{error.accepted}</p>}
            </div>

            <div className="actions">
                <button 
                disabled={!isFormValid}
                type="submit" 
                style={{
                padding: "10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
  }}> Kayıt Ol</button>
            </div>
        </form>
        </div>
       
    )
}


                                
  
  

