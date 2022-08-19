import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { messageBox } from '../utilities/message.ts';
import { HttpRequest } from '../services/serverHttpRequest.ts';
import { VERIFY_USER, CHECK_VERIFICATION } from '../api/index.ts';

const title = "Verify your account";

const Verification = (props) => {
    const [disable, setDisabled] = useState(false);
    const params = useParams();
    async function checkIfUserAlreadyVerified(){
        const data = {token:params.token, email:params.email}
        const response = await HttpRequest.server(CHECK_VERIFICATION, 'POST', data);
        if(response.code == 200){
            messageBox(".msg", "block", "green", "Your already verifed");
            setDisabled(true)
        }  
        else{
            messageBox(".msg", "block", "green", ""); 
        }  
    }
    useEffect(() => {
        checkIfUserAlreadyVerified()
    });

    async function handleSubmit(e){
        e.preventDefault();
        const data = {token:params.token, email:params.email}
        if(data){
            const response = await HttpRequest.server(VERIFY_USER, 'POST', data);
            if(response.code == 200){
                messageBox(".msg", "block", "green", "Your profile is now verfied and can login.");
                setDisabled(true)
            }
            else{
                messageBox(".msg", "block", "green", "Something went wrong."); 
            }
        }
    }

    return (
        <div>
            <div className="login-section padding-tb">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <div className="account-bottom">
                            <div className="msg"></div>
                            <span className="d-block cate pt-10">
                            <button 
                            disabled={disable}
                            className={!disable ? "lab-btn" :null }
                            onClick={handleSubmit}>{disable ? "Verified!" : "Click to verify your account"}</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Verification;