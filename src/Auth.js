  
import { auth, googleProvider} from "./Firebase";
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email)


  const signIn= async ()=>{
  await createUserWithEmailAndPassword(auth,email,password)
};
const signInwithGoogle= async ()=>{
  await signInWithPopup(auth, googleProvider)
};
const logout= async ()=>{
  await signOut(auth)
};


  return (

    
    <div className='registration'>
      <h1>Welcome Back</h1>
      <input className="signin"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="signin"
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button className='bt' onClick={signIn}>Register</button>

      <button onClick={signInwithGoogle}>Sign in with Google</button>

      <button onClick={logout}>Sign Out</button>

    </div>
  );
};