//import {GENDER} from '../types/index.ts';
const regExpression = /^[a-zA-Z]{5,15}$/;
const emailRegExpression = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,20}$/;

export const checkName = (name: string) : boolean => {
    return (!name.match(regExpression)) ? false : true; 
}

export const checkEmailaddress = (email: string) : boolean => {
    return (!email.match(emailRegExpression)) ? false : true; 
}
  
export const checkUserPassword = (userPassword: string) : boolean => {
    return (!userPassword.match(passwordRegExpression)) ? false : true; 
}

export const checkMatchPassword = (userConfirmedpassword: string,  userPassword: string ) : boolean => {
    return (userPassword == userConfirmedpassword) ? false : true; 
}
   
export const checkGender = (gender: string ) : boolean => {
    return (gender == "male"|| gender == "female" || gender == "other") ? true : false; 
}
   
