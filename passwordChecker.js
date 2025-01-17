export class PasswordChecker {

    check8Char(pwd) {
        if (pwd.length >= 8) {
          return true;
        } else {
          return false;
        }
      } 

    checkSpecialChar(pwd){
        const regex = /[^\w\s]/;
        return regex.test(pwd);
    }

    checkNumber(pwd){
        for (let i = 0; i < pwd.length; i++) {
            if (!isNaN(pwd[i])) {
              return true;
            }
          }
          return false;
    }

    checkIPL(pwd){
        return true
    }
}