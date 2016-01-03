var expect = require("chai").expect;
describe("Test Suite 1", function() {

    it("Is a simple test", function () {
        expect(true).to.equal(true);
    });

    it("Is not a failing test anymore", function () {
        expect(false).not.to.equal(true);
    });
});