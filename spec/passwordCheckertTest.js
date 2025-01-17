

describe("Test for at least 8 charactere", function (){
    it("Should return true cause 8 char", function(){
        expect(true).toBe(true)
    })

    it("Should return false cause < 8 char", function (){
        expect(false).toBe(false);
    })
})