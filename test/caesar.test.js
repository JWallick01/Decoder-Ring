const { expect } = require("chai");
const caesarModule = require("../src/caesar");


describe("caesar()", () => {
  it("should be a function", () => {
    expect(caesarModule.caesar).to.be.a("function");
  });
  it("should shift letters to the right or left", () => {
    const input = "thinkful";
    let shift = 3;
       
    const expected = "wklqnixo";
    const actual = caesarModule.caesar(input,shift);
    
    expect(actual).to.equal(expected);
  });
  it("shift should equal zero if not given", () => {
    const input = "thinkful"; 
    let encode = true;
    
    const expected = false;
    const actual = caesarModule.caesar(input);
    
    expect(actual).to.equal(expected);
  });
  it("spaces and symbols should be maintained throughout", () => {
    const input = "This is a secret message!";
    let shift = 8;
      
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesarModule.caesar(input,shift);
    
    expect(actual).to.equal(expected);
  });
   it("capital letters should be ignored", () => {
    const input = "THINKFUL";
    let shift = 3;
    
    
    const expected = "wklqnixo";
    const actual = caesarModule.caesar(input,shift);
    
    expect(actual).to.equal(expected);
  });
  it("if a letter shifts off the alphabet it should wrap around", () => {
    const input = "zebra";
    let shift = 3;
    
    const expected = "cheud";
    const actual = caesarModule.caesar(input,shift);
    
    expect(actual).to.equal(expected);
  });
  
});