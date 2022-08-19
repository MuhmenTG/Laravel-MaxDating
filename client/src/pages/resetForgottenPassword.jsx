import {useEffect, useState } from 'react';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';
import { HttpRequest } from '../services/serverHttpRequest.ts';
import {checkUserPassword, checkMatchPassword } from '../utilities/validation.ts';
import { messageBox } from '../utilities/message.ts';
import { RESET_USER_PASSWORD,CHECK_PASSWORD_LINK_EXPIRY } from '../api/index.ts';
import { useParams } from 'react-router-dom';
const title = "Password reset";

const SendResetLink = () => {
     const [hide, setHide] = useState(false);
     const [regPassword, setRegPassword] = useState('')
     const [regConPassword, setRegConPassword] = useState('')
     const params = useParams();

    useEffect(() => {
        async function checkIfExpired(){
            const response = await HttpRequest.server(CHECK_PASSWORD_LINK_EXPIRY, 'POST', {token:params.token});
            if(response.code == 401){
                setHide(true)
            }  
        }
         checkIfExpired()
     }, [hide]);
   
    function handleChange(e) {
         const name = e.target.name;
         const value = e.target.value;
         switch (name) {
             case 'password':
                 if(checkUserPassword(value)){setRegPassword(value); messageBox(".passwordError", "none", "red", "");} else { messageBox(".passwordError", "block", "red", "Password must be more than 10 characters, including one lowercase, one uppercase letter & numeric value");}
                 break;
             case 'conpassword':
                 if(checkMatchPassword(value, regPassword)){ setRegConPassword(value); messageBox(".confirmedPasswordError", "block", "red", "Not match between passwords"); } else { messageBox(".confirmedPasswordError", "block", "green", "Pasword Matches");}
                 break;
             default:
                 break;
         }
    }

    async function handleSubmit(e) {
         e.preventDefault();
         if(regPassword !== "" && regConPassword !== ""){
                 const response = await HttpRequest.server(RESET_USER_PASSWORD, "POST", {token:params.token, regConPassword:regConPassword })
                 if(response.code == 200){
                     messageBox(".regFormError", "block", "green", "Your password has been reset. Login to your account with your new credentials");
                 }
         }
         else{
             messageBox(".regFormError", "block", "red", "All (*) fields are required");
         }
    }

         return (
             <div>
                 <PageHeader title={'Password reset'} />
                 {
                     (!hide) ? (
                         <div className="login-section padding-tb">
                         <div className=" container">
                             <div className="account-wrapper">
                                 <h3 className="title">{title}</h3>
                                 <form className="account-form" id='forgetPassword' onSubmit={handleSubmit} >
                                 <span className='regFormError'></span>
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
                                         <button className="d-block lab-btn" type="submit"><span>Save new password</span></button>
                                     </div>
                                 </form>
                              
                             </div>
                         </div>
                     </div>
                     ) :
                     (
                         <div>
                             Link expired
                         </div>
                     )
                 }
             
           
             </div>
         );
}

export default SendResetLink;