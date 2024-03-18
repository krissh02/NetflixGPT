
export const checkValidData = (email,password) => {

    const Email = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!Email) return "Email Id is not valid";
    if(!Password) return "Password is not valid";

    return null;
}