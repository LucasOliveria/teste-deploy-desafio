import { useEffect } from 'react';
import './style.css';
import { toast } from "react-toastify";

function SignIn() {
  useEffect(() => {
    toast.success("Sucesso")
  })
  return (
    <main>
      <h1>Login</h1>
    </main>
  )
}

export default SignIn;
