describe("turnCard", function () {

    beforeEach(function () {
        turnCard = new TurnCard();
    });
    beforeEach(function () {
        gameScore = new GameScore();
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
});