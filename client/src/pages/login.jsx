import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { useJwt } from "react-jwt";
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';
import {checkEmailaddress} from '../utilities/validation.ts';
import { messageBox } from '../utilities/message.ts';
import { LOGIN_USER } from '../api/index.ts';
import { HttpRequest } from '../services/serverHttpRequest.ts';
const title = "Login";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const token = "stringToken";
    const { decodedToken, isExpired } = useJwt(token)

    async function handleLogin(e){
        e.preventDefault();
        if(email !== "" && password !== ""){
            const response = await HttpRequest.server(LOGIN_USER, "POST", {email, password})
            if(response.code !== 200){
                messageBox(".loginerror", "block", "red", "You have entered wrong credentials - please try again");
            }
            else {
                console.log({decodedToken});
                console.log(response);
                messageBox(".loginerror", "block", "red", "");
            }
        }
        else{
            messageBox(".loginerror", "block", "red", "All (*) fields are required");
        }
    }
    
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'email':
                if(checkEmailaddress(value)){ setEmail(value); messageBox(".emailError", "none", "red", "");} else {messageBox(".emailError", "block", "red", "Invalid format email");}
                break;
            case 'password':
                if(value){ setPassword(value); }
                break;
            default:
                break;
        }
   }


        return (
            <div>
                <Header />
                <PageHeader title={'Log In'} />
                <div className="login-section padding-tb">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form" onSubmit={handleLogin}>
                            <span className="loginerror"></span>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        onChange={handleChange}
                                        placeholder="User email"
                                    />
                                </div>
                                <span className='emailError'></span>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="userPassword"
                                        onChange={handleChange}
                                        placeholder="Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                        <div className="checkgroup">
                                            <input type="checkbox" name="remember" id="remember" />
                                            <label htmlFor="remember">Remember Me</label>
                                        </div>
                                        <span className="d-block cate pt-10">Forgot your password? <Link to="/sendResetLink"> Click here</Link></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="d-block lab-btn" type="submit"><span>Login</span></button>
                                </div>
                            </form>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/signup"> Sign Up</Link></span>
                                <span className="or"><span>or</span></span>
                                {/* <ul className="social-media social-color lab-ul d-flex justify-content-center">
                                    <li>
                                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="pinterest"><i className="icofont-pinterest"></i></a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
                <FooterSection />
            </div>
        );
    
}

export default LoginPage;