import React, { Component, useState } from 'react';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';
import { HttpRequest } from '../services/serverHttpRequest.ts';

import {checkEmailaddress } from '../utilities/validation.ts';
import { messageBox } from '../utilities/message.ts';
import { SEND_RESET_PASSWORD_LINK } from '../api/index.ts';
const title = "Send link to password recovery";

const SendResetLink = (props) => {
    const [regEmail, setRegEmail] = useState('')
   
    
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'email':
                if(checkEmailaddress(value)){ setRegEmail(value); messageBox(".emailError", "none", "red", "");} else {messageBox(".emailError", "block", "red", "Invalid email");}
                break;
            default:
                break;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(regEmail !== ""){
                const response = await HttpRequest.server(SEND_RESET_PASSWORD_LINK, "POST", {
                    regEmail,
                })
                if(response.code == 200){
                    messageBox(".emailError", "block", "green", "User found and a mail has been sent with further instructions.");
                }
                else{
                    messageBox(".emailError", "block", "red", "User could not be found.");
                }
        }
        else{
            messageBox(".emailError", "block", "red", "All (*) fields are required");
        }
    }

        return (
            <div>
                <Header />
                <PageHeader title={title} />
                <div className="login-section padding-tb">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form" id='forgetPassword' onSubmit={handleSubmit}>
                            <span className='emailError'></span>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="User email *"
                                        onChange={handleChange}
                                    />
                                </div>
                             
                      
                                <div className="form-group">
                                    <button className="d-block lab-btn" type="submit"><span>Send reset link</span></button>
                                </div>
                            </form>
                          
                        </div>
                    </div>
                </div>
                <FooterSection />
            </div>
        );
}

export default SendResetLink;