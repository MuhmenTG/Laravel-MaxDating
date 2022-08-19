import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';
import { checkName, checkEmailaddress, checkUserPassword, checkMatchPassword, checkGender } from '../utilities/validation.ts';
import { messageBox } from '../utilities/message.ts';
import { REGISTER_USER } from '../api/index.ts';
import { HttpRequest } from '../services/serverHttpRequest.ts';

const title = "Register Now";

const SignInPage = (props) => {
    const [firstName, setRegFirstName] = useState('')
    const [lastName, setRegLastName] = useState('')
    const [email, setRegEmail] = useState('')
    const [password, setRegPassword] = useState('')
    const [confirmedPassword, setRegConPassword] = useState('')
    const [gender, setRegGender] = useState('')

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'firstname':
                if(checkName(value)){setRegFirstName(value); messageBox(".firstnameError", "none", "green", "");} else {messageBox(".firstnameError", "block", "red", "Firstname must only contains alphabetic characters");}
                break;
            case 'lastname':
                if(checkName(value)){setRegLastName(value); messageBox(".lastnameError", "none", "red", "");} else {messageBox(".lastnameError", "block", "red", "Lastname must only contains alphabetic characters");}
                break;
            case 'email':
                if(checkEmailaddress(value)){ setRegEmail(value); messageBox(".emailError", "none", "red", "");} else {messageBox(".emailError", "block", "red", "Invalid email");}
                break;
            case 'password':
                if(checkUserPassword(value)){setRegPassword(value); messageBox(".passwordError", "none", "red", "");} else { messageBox(".passwordError", "block", "red", "Password must be more than 10 characters, including one lowercase, one uppercase letter & numeric value");}
                break;
            case 'conpassword':
                if(checkMatchPassword(value, password)){ setRegConPassword(password); messageBox(".confirmedPasswordError", "block", "red", "Not match between passwords"); } else { messageBox(".confirmedPasswordError", "block", "green", "Pasword Matches");}
                break;
            case 'gender':
                if(checkGender(value)){setRegGender(value); messageBox(".genderError", "none", "red", ""); } else {messageBox(".genderError", "block", "red", "Select gender");}
                break;
            default:
                break;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(firstName !== "" && lastName !== "" && email !== "" && confirmedPassword !== "" && gender !== ""){
                const response = await HttpRequest.server('http://127.0.0.1:8000/api/register-user', "POST", {
                    firstName,
                    lastName,
                    email,
                    confirmedPassword,
                    gender
                })
                if(response.code == 200){
                    messageBox(".regFormError", "block", "green", "User registered successfully");
                }
                else if(response.code == 300){
                    messageBox(".regFormError", "block", "green", "User already registered");
                }
        }
        else{
            messageBox(".regFormError", "block", "red", "All (*) fields are required");
        }
    }

    return (
        <div>
            <Header />
            <PageHeader title={'Sign Up'} />
            <div className="login-section padding-tb">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" id='register' onSubmit={handleSubmit}>
                            <span className='regFormError'></span>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    onChange={handleChange}
                                    placeholder="Your firstname *"
                                />
                                <span className='firstnameError'></span>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    onChange={handleChange}
                                    placeholder="Your lastname *"
                                />
                                <span className='lastnameError'></span>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    placeholder="Your email *"
                                />
                               <span className='emailError'></span>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    placeholder="Password *"
                                />
                                <span className='passwordError'></span>

                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="conpassword"
                                    id="conpassword"
                                    onChange={handleChange}
                                    placeholder="Confirm Password *"
                                />
                                <span className='confirmedPasswordError'></span>
                            </div>
                            <div className="form-group">
                                <div className="custom-select right w-100">
                                    <select
                                        name="gender"
                                        id="gender"
                                        onChange={handleChange}
                                    >
                                        <option value="0">Gender * </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                    <span className='genderError'></span>

                                </div>
                            </div>

                            <div className="form-group">
                                <button className="d-block lab-btn"><span>Get Started Now</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>

                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
}

export default SignInPage;