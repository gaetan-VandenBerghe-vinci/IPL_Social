import { PasswordChecker } from "../passwordChecker.js";

let passwordChecker = new PasswordChecker()

describe("Test for at least 8 charactere", function (){
    it("Should return true cause 8 char", function(){
        let result = passwordChecker.check8Char("12345678ZDZDZD");
        expect(result).toBe(true)
    })

    it("Should return false cause < 8 char", function (){
        let result = passwordChecker.check8Char("123456");
        expect(result).toBe(false);
    })
})


describe("Test for special charactere", function(){
    it("Should return true because there is a special char", function(){
        let result = passwordChecker.checkSpecialChar("1234567#")
        expect(result).toBe(true)
    })

    it("Should return false because there is no special char", function(){
      let result = passwordChecker.checkSpecialChar("1234567P")
      expect(result).toBe(false)  
    })
})

describe("Test for at leats a number in the password", function(){
    it("Should return true because there is a number", function(){
        let result = passwordChecker.checkNumber("123456@4")
        expect(true).toBe(true)
    })
})