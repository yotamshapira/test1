var expect = require("chai").expect;
describe("Test Suite 1", function() {

    it("Is a simple test", function () {
        expect(true).to.equal(true);
    });

    it("Is a failing test", function () {
        expect(false).to.equal(true);
    });
});