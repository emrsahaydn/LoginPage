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
            navigate("/Success");
        }

    }
    return (
       
        <form onSubmit={handleSubmit}>
            <input 
            onChange={handleEmailChange} 
            type="email" 
            value={email}
            placeholder="e-mail"
             />
            <input 
            onChange={handlePasswordChange} 
            type="password" 
            value={password}
            placeholder="password"
            />
            <input 
            onChange={handleAcceptedChange} 
            checked={accepted} 
            type="checkbox" 
            />
        </form>
       
    )
}
  
  

