class Rover {
   constructor(position) {
      this.position = position; //((number?))
      this.mode = "NORMAL";
      this.generatorWatts = 110;

      /*
      this.name = name;
      if (!name) {
        throw Error("name required.");
      }
      this.commands = commands;
      */
    }

    receiveMessage(message) {
      return {
         name: message.name
      };
    }

    /* receiveMessage old attempt LUCASSS
    receiveMessage(message) {             //msg is an obj of msg class?
      let message = "the name of the original Message object"; 
      let results = [
         //CREATE OBJECTS HERE -each corrisponding to a meassage command

      ];
      return _____;
    } //method returns obj with msg(strng) & results (arr of objs)

       reportStats() {
      let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
      return stats;
   }
    */
}

module.exports = Rover;