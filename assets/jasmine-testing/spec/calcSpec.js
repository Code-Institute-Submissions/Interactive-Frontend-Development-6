describe("Score", function () {
    describe("addScore", function() {
        it("should return 100", function() {
            addScore();
            gameScore = addScore(90);
            expect(gameScore).toBe(100);
        });
    });

    describe("minusScore", function() {
        it("should return -30", function() {
            minusScore();
            gameScore = minusScore(-25);
            expect(gameScore).toBe(-30);
        });
    });
});