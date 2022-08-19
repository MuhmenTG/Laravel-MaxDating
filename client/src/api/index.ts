export const BASE_URL = "http://localhost:8888/RistaByMuhmen/app/";

export const LARAVEL_BASE_URL = "http://localhost:8000/api/";

export const REGISTER_USER = LARAVEL_BASE_URL+"register-user";


export const VERIFY_USER = BASE_URL+"Controller/api/Auth/verifyUser.php";
export const CHECK_PASSWORD_LINK_EXPIRY = BASE_URL+"Controller/api/Auth/checkLinkExpiry.php";
export const CHECK_VERIFICATION = BASE_URL+"Controller/api/Auth/checkVerification.php";
export const SEND_RESET_PASSWORD_LINK = BASE_URL+"Controller/api/Auth/sendResetLink.php";
export const RESET_USER_PASSWORD = BASE_URL+"Controller/api/Auth/resetPassword.php";
export const GET_ALL_MEMBERS = BASE_URL+"Controller/api/User/getAllMembers.php";
export const LOGIN_USER = BASE_URL+"Controller/api/Auth/login.php";