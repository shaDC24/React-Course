import { useState } from 'react'
import './App.css'

       function App()
       {
        const [showPassword,setShowPassword]= useState(false);
        function passwordUpdate(){
            if(showPassword)
            {
                setShowPassword(false);
            }
            else
            {
                setShowPassword(true);
            }
        }


        return (
            <>
                <p className="head-content">Hello , Welcome to my website</p>
                <div>
                    <input placeholder="Email" className="input-content"/>
                </div>
                
                <div>
                    <input placeholder="Password" className="input-content" type={showPassword?"text":"password"}/>
                    <button onClick={passwordUpdate} className="show-button">{showPassword?"Hide":"Show"}</button>
                </div>
                
                <div>
                    <button className="button-content">Login</button>
                    <button className="button-content">Sign up</button>
                </div>
                            
            </>
        );
       } 

export default App
