// Part 1: Humble Beginnings

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
    
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {  // Leo's companion (Frank) and its own belongings
//             name: "Frank",
//             type: "Flea",
//             belongings: ["small hat", "sunglasses"]
//         }

//     },

//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//         }

//     }   

//     // create a loop that logs each item in Robin’s inventory.

// adventurer.inventory.forEach(item => {
//     console.log(item);
// });

// adventurer.roll()
// adventurer.roll()
// adventurer.roll()
// console.log(adventurer.roll());


// Part 2: Class Fantasy

// Start with a Character class, which will define generic character entities.

class Character {
    static MAX_HEALTH = 100; 
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
      
    }
   
   
    roll (mod = 0) {
                const result = Math.floor(Math.random() * 20) + 1 + mod;
                console.log(`${this.name} rolled a ${result}.`)
                }

  }


//   const robin = new Character("Robin");
//   robin.inventory = ["sword", "potion", "artifact"];
//   robin.companion = new Character("Leo");
//   robin.companion.type = "Cat";
//   robin.companion.companion = new Character("Frank");
//   robin.companion.companion.type = "Flea";
//   robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll();                        
// robin.companion.roll();            
// robin.companion.companion.roll();     


//  Part 3: Class Features

class Adventurer extends Character {

    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor (name, role) {
      super(name);


      // Check if the given role is valid
      if (!Adventurer.ROLES.includes(role)) {
        throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(", ")}`);
    }
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      this.skills = [];  
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    addSkill(skill) {          // Method to add a skill
        this.skills.push(skill);
        console.log(`${this.name} learned a new skill: ${skill}`);
    }

  }

  // Companion class extending Character
class Companion extends Character {
    constructor(name, type) {
        super(name);             
        this.type = type;        
        this.skills = [];      
    }

    play(adventurer) {       // Method for playing with adventurer
        console.log(`${this.name} is playing with ${adventurer.name}.`);
        super.roll();           
    }
}


// Create instances for characters and companions
// const robin = new Adventurer("Robin", "Warrior");
// const leo = new Companion("Leo", "Cat");  // Create Leo as a Companion
// const frank = new Companion("Frank", "Flea"); // Create Frank as a Companion

// Assign Frank's inventory
// frank.inventory = ["small hat", "sunglasses"];

//Example outputs
// console.log(robin);
// console.log(leo);
// console.log(frank);

// Test methods for Robin
// robin.scout(); 
// robin.addSkill("Rolldice"); 

// Test methods for Leo
// leo.play(robin);          



// Part 4: Class Uniforms
// Add a static MAX_HEALTH property to the Character class, equal to 100.


// Part 5: Gather your Party

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
   robin = healers.generate("Robin");
   const semhar = healers.generate("Semhar");

   // Example outputs
// Find a healer by name
const foundHealer = healers.findByName("Semhar");
console.log(foundHealer); 


// Part 6: Developing Skills

