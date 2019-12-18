/**
 * rolls any sided die with the amount of die rolled
 */
function rollDice(numSides, amt)
{
    var sum = 0;
    for(var i = 0; i < amt; i++)
    {
        sum += Math.floor(Math.random() * numSides) + 1;
    }
    return sum;
}

/**
 * our game loop to play lucky sevens
 */
function playGame(bet)
{
    var startingBet = parseFloat(bet); // we want to work with a number for formating later
    var gameMoney = startingBet;
    var numRolls = 0; 
    var result;
    var highestWin = startingBet; // we will initialize our highest win with what we started with since it doesn't make sense in case our highest win is lower than what we started with
    var rollAtHighestWin = numRolls;
    while (gameMoney > 0)
    {
        result = rollDice(6, 2);
        numRolls++;
        if (result == 7)
        {
            gameMoney += 4;
        }
        else
        {
            gameMoney -= 1;
        }
        if (gameMoney > highestWin)
        {
            highestWin = gameMoney;
            rollAtHighestWin = numRolls;
        }
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("playButton").innerText = "Play Again";
    document.getElementById("startingBet").innerText = "$" + startingBet.toFixed(2);
    document.getElementById("numRolls").innerText = numRolls;
    document.getElementById("highestWin").innerText = "$" + highestWin.toFixed(2);
    document.getElementById("rollAtHighestWin").innerText = rollAtHighestWin;
}

/**
 * make sure the user enters a correct value
 */
function validate()
{
    clearErrors();
    var bet = document.forms["luckySevens"]["bet"].value;
    if (bet == "" || isNaN(bet) || bet < 0) 
    {
        alert("Starting Bet must be a positive whole number.");
        document.forms["luckySevens"]["bet"].parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["bet"].focus();
        return false;
    }
    // we may want to reuse this game in the future so it's better that we call a function instead of lumping it all in our validation code
    playGame(bet);
    return false;
}

/**
 * clears any invalid input from the user
 */
function clearErrors() 
{    
    for (var i = 0; i < document.forms["luckySevens"].elements.length; i++) 
    {
        if (document.forms["luckySevens"].elements[i].parentElement.className.indexOf("has-") != -1) 
        {
            document.forms["luckySevens"].elements[i].parentElement.className = "form-group";
        }
    }    
}

/**
 * sets the game back to it's default state
 */
function resetForm()
{
    clearErrors();
    document.forms["luckySevens"]["bet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("playButton").innerText = "Play";
    document.forms["luckySevens"]["bet"].focus();
}
