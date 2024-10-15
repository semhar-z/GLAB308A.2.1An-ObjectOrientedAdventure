// Part 1: Humble Beginnings

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {  // Leo's companion (Frank) and its own belongings
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }

    },

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }

    }   

    // create a loop that logs each item in Robin’s inventory.

adventurer.inventory.forEach(item => {
    console.log(item);
});

adventurer.roll()
adventurer.roll()
adventurer.roll()
console.log(adventurer.roll());


