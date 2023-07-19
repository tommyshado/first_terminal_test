import assert from "assert";
import greet from "../greet.js";


describe("The GREET function", () => {
    it("should be able to greet Mthunzi correctly", () => {
        assert.equal("Hello, Mthunzi", greet("Mthunzi"));
    });
    it("should be able to greet Malebo correctly", () => {
        assert.equal("Hello, Malebo", greet("Malebo"));
    });
});