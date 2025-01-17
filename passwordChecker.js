export class PasswordChecker {

    check8Char(pwd){
        if (pwd.lenght() >= 8){
            return true
        }

        return false;
    }

    checkSpecialChar(pwd){
        return true
    }
}