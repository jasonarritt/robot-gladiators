

// Function to prompt user to enter robot name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Alert players that they are starting the round

// Create function named "fight"
var fight = function(enemyName) {
    //Repeat as long as enemy robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //If player picks 'skip' confirm and stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //Confirm Player Wants to Skip
            var confirmSkip = window.confirm("Are you sure you would like to quit? (subtract 10 monies)");

            //If yes/true, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. By-eee!");
                //Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("Player Money: ", playerMoney);
                break;
            }
        };
  
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        )

        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //Award player monies
            playerMoney = playerMoney + 20;
            //Leave loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
  
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
  
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //Check Player's Health
        if (playerHealth <= 0) {
             window.alert(playerName + " has died! You have lost your robot in battle. Game Over!");
            //Exit loop if player robot dies
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        };
    };
};

//   else {
//       window.alert("You need to choose a valid option. Try again!");
//       fight ();
//   }
// };

// for (var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index.")
// }

// fight();

var startGame = function() {
    //Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //Welcome player to round
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            //Pick a new enemy
            var pickedEnemyName = enemyNames[i];
            //Set enemy health
            enemyHealth = 50;
            //debugger
            fight(pickedEnemyName);
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
    if (playerHealth > 0) {
        window.alert("You survived the game. Great job. You now have a score of " + playerMoney + ".");
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

startGame();