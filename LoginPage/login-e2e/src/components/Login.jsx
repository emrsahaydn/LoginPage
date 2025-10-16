import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accepted, setAccepted] = useState(false);
    const[error, setError] = useState("");
    const navigate = useNavigate();

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleAcceptedChange(e) {
        setAccepted(e.target.checked);
    }
  
  }

