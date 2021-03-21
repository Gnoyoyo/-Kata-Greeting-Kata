import {Kata} from "../app";


/*Write a method greet(name) that interpolates name in a simple greeting. For example,
 when name is "Bob", the method should return a string "Hello, Bob.".*/

  describe('greet', function() {
    it('Take name and return Hello Name', () => {
      expect(Kata.greet("Bob")).toBe("Hello, Bob.");
    });
  });