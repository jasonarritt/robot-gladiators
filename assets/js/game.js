


//Function to generate random numbers
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// Function to prompt user to enter robot name
var playerInfo = {
    name : window.prompt("What is your robot's name?"),
    health : 100,
    attack : 10,
    money : 10,
    reset : function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth : function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 monies.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough monies.");
        }
    },
    upgradeAttack : function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 monies.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough monies.");
        }
    }
};


console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);

var enemyInfo = [
    {
        name : "Roborto",
        attack : randomNumber(10, 14)
    },
    {
        name : "Amy Android",
        attack : randomNumber(10, 14)
    },
    {
        name : "Robo Trumble",
        attack : randomNumber(10, 14)
    }
];

// var enemy.names = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemy.health = 50;
// var enemy.attack = 12;

// Alert players that they are starting the round

// Create function named "fight"
var fight = function(enemy) {
    //Repeat as long as enemy robot is alive
    while (playerInfo.health > 0 && enemy.health > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //If player picks 'skip' confirm and stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //Confirm Player Wants to Skip
            var confirmSkip = window.confirm("Are you sure you would like to quit? (subtract 10 monies)");

            //If yes/true, leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight. By-eee!");
                //Subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("Player Money: ", playerInfo.money);
                break;
            }
        };
        //Generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
  
        //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
        enemy.health = Math.max(0, enemy.health -damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        )

        //Check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            //Award player monies
            playerInfo.money = playerInfo.money + 20;
            //Leave loop since enemy is dead
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        //Generate random number for enemy attack damage
        var damage = randomNumber(enemy.attack -3, enemy.attack);
  
        // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        playerInfo.health = Math.max(0, playerInfo.health - damage);
  
        // Log a resulting message to the console so we know that it worked.
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

        //Check Player's Health
        if (playerInfo.health <= 0) {
             window.alert(playerInfo.name + " has died! You have lost your robot in battle. Game Over!");
            //Exit loop if player robot dies
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        };
    };
};

//   else {
//       window.alert("You need to choose a valid option. Try again!");
//       fight ();
//   }
// };

// for (var i = 0; i < enemy.names.length; i++) {
//     console.log(enemy.names[i]);
//     console.log(i);
//     console.log(enemy.names[i] + " is at " + i + " index.")
// }

// fight();

var startGame = function() {
    //Reset player stats
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            //Welcome player to round
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            //Pick a new enemy
            var pickedEnemyObject = enemyInfo[i];
            //Set enemy health
            pickedEnemyObject.health = randomNumber(40, 60);
            //debugger
            fight(pickedEnemyObject);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("Would you like to visit the store before the next round?");
                if (storeConfirm) {
                shop();
                }
            }
        }

        else {
            window.alert("You have lost your robot in battle. Game Over!")
        }
    }
    //Play Again
    endGame();
};

//Function to end entire game
var endGame = function() {
    //If player is still alive, player wins
    if (playerInfo.health > 0) {
        window.alert("You survived the game. Great job. You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You have lost your robot in battle. Game Over!");
    }

    //Ask the player if they want to play Again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators. Come back soon!");
    }
}

var shop = function() {
    //Ask player what they would like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    //Use switch to carry out player's choice
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;

    }
}

startGame();