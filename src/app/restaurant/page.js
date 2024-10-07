"use client"
import { useState } from "react";
import RestaurantLogin from "../_componants/RestaurantLogin";
import RestaurantSignUp from "../_componants/RestaurantSignUp";
import RestaurantHeader from "../_componants/RestaurantHeader";
import Footer from "../_componants/Footer";
import './style.css'

const Restaurant = () => {
    const [Login, setLogin] = useState(true)
    return (
        <>
            <div className="container">
                <RestaurantHeader/>
                <h1>
                    Restaurant login/signup page
                </h1>
                {
                    Login ? <RestaurantLogin /> : <RestaurantSignUp />
                }
                <div><button className="button-link" onClick={() => setLogin(!Login)}>
                    {Login ? "DO not have account ? SignUp" : "Already have Account? Login"}</button></div>

            </div>
            <Footer/>
        </>
    )
}

export default Restaurant;