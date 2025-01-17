import { PasswordChecker } from "../passwordChecker.js";

let passwordChecker = new PasswordChecker()

describe("Test for at least 8 charactere", function (){
    it("Should return true cause 8 char", function(){
        let result = passwordChecker.check8Char("12345678");
        expect(result).toBe(true)
    })

    it("Should return false cause < 8 char", function (){
        let result = passwordChecker.check8Char("1234567");
        expect(result).toBe(false);
    })
})


describe("Test for special charactere", function(){
    it("Should return true because there is a special char", function(){
        let result = passwordChecker.checkSpecialChar("1234567#")
        expect(result).toBe(true)
    })

    
})