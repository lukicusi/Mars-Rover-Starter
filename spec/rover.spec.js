const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  //test 7
  test("constructor sets position and default values for mode and generatorWatts", function() {
  const mode = "NORMAL";
  const generatorWatts = 110;
  const rover = new Rover();
    expect(rover.mode).toBe(mode);
    expect(rover.generatorWatts).toBe(generatorWatts);
  });

  //test 8
  /*
  test("response returned by receiveMessage contains the name of the message", function() {
  const messageName = "the message passed";
const messsageInstance = new Message(messageName);
  const response = receiveMessage(messsageInstance);
    expect(response).toContain(messageName);
  });
  */

  //test 9
/*  
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    expect(rover.results).toBe([("string 1"), ("string 2")]);
  });
*/

  //test 10
  

  //test 11
  

  //test 12
  

  //test 13

});
