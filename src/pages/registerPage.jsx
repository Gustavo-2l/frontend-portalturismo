import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import bg2 from "../assets/imagens/bg2.jpg"
import RegisterForm from "../components/registerForm";
const RegisterPage = () => {
    return(
        <>
        <div
        className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: `url(${bg2})` }}
        >
            <Navbar/>
            <div className="flex-grow flex items-center justify-center">
                <RegisterForm/>
            </div>
            <Footer/>
        </div>
        </>
    )
}
 
export default RegisterPage