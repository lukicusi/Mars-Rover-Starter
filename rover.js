class Rover {
   constructor(position) {
      this.position = position; //((number?))
      this.mode = "NORMAL";
      this.generatorWatts = 110;
    }

  
    
    receiveMessage(message) {             //msg is an obj of msg class?
   //   let message = "the name of the original Message object"; 
   //   let results =[("firstcommand"),("secondcommand")];
         //CREATE OBJECTS HERE -each corrisponding to a meassage command
      const results = message.commands.map(command => {
         //initializes results array ^^^
         if (command.commandType === "STATUS_CHECK") {
            return {
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position
               }
            };
         }
         
         //additional commands and if completed false here ---return{ };
      });
 
         return {
         name: message.name,
         results: message.commands // i need an array of objs in the results key (1 for each command)
      }; //method returns obj with msg(strng) & results (arr of objs)
   }

    /*
       reportStats() {
      let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
      return stats;
   }
    */
}

module.exports = Rover;