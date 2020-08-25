describe("turnCard", function () {

    /*beforeEach(function () {
        turnCard = new TurnCard();
    });
    beforeEach(function () {
        gameScore = new GameScore();
    });

    beforeEach(function () {
        addScore = new AddScore();
    });

    beforeEach(function () {
        minusScore = new MinusScore();
    });
    
    describe("Checks TurnCard", function () {
        it("should exist", function () {
            expect(TurnCard).toBeDefined();
        });
    });

    describe("Checks GameScore", function () {
        it("should exist too", function () {
            expect(GameScore).toBeDefined();
        });
    });
*/
    describe("addScore", function() {
        it("should return 50 and 100", function() {
            var gameScore = 0;
            addScore();
            expect(gameScore).toBe(100);
            expect(gameScore).toBe(50);
            /*expect(AddScore).toBeDefined();*/
        });
    });


    describe("minusScore", function() {
        it("should return -10 and -30", function() {
            var gameScore = 0;
            minusScore();
            expect(gameScore).toBe(-30);
            expect(gameScore).toBe(-10);
            /*expect(MinusScore).toBeDefined();*/
        });
    });
});


/*
describe("FizzBuzz", function () {
    beforeEach(function () {
        FizzBuzz = new fizzBuzz();
    });
    describe("Checks Modulus", function () {
        it("should exist", function () {
            expect(fizzBuzz).toBeDefined();
        });
        it("should return FizzBuzz if divisible by 3 and by 5", function () {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });
        it("should return Fizz if divisible by 3", function () {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });
        it("should return Buzz if divisible by 5", function () {
            var result = fizzBuzz(25);
            expect(result).toBe("Buzz");
        });
        it("should return number if not divisible by 3 or by 5", function () {
            var result = fizzBuzz(2);
            expect(result).toBe(2);
        });
        it("should return an error if we don't supply a number", function() {
            spyOn(window, "alert");
            var result = fizzBuzz(alert("Error!"));
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});

*/