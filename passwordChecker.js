export class PasswordChecker {

    check8Char(pwd){
        if (pwd.lenght < 8){
            console.log("HEREER")
            return false
        }

        return true;
    }

    checkSpecialChar(pwd){
        return true
    }
}