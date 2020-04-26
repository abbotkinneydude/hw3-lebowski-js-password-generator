# hw3-lebowski-js-password-generator
The Big Lebowski meets his ultimate nemesis: the js password generator!

Notes:

HTML Document:
- Head Section: 1) CSS Reset, 2) CSS Bootstrap, 3) Trilogy CSS.
- Head Section: The javascript src is specified as DEFER so it doesn't load until the whole page is loaded.
- Body Section: I used bootstrap to embelish the presentation and, more importantly, I inspired myself from the movie THE BIG LEBOWSKI for this homework.
- Body Section: Notice the multiple rows within the container, how the buttons are placed, etc. There's a minimum (6 instances) of custom css.


The JS Basics:

- The 5 buttons call 5 respective prompts: uppercases, lowercases, numbers, symbols, length.
- If you respond yes to any of the first 4: you get a positive quote from The Big Lebowski.
- If you respond no to any of the first 4: you get a negative quote from The Big Lebowski.
- The FIFTH button, length, gets a positive quote if the value entered is between 8 and 128. If outside of that range, you're being very undude.
- Click on the red button to 'degenerate' a password (more on that later).

The JS Inner Works:

- Based on the 5 buttons, there are 5 variables: 1) upper 2) lower 3) numbers 4) symbols 5) length.
- There is a stringToBoolean function to convert the first four strings into true/false statements with a bonus string to lowercase conversion to avoid the need for uppercase characters.
- In addition of yes, y, yeah, you can also type yeah lebowski, team america, south park, beavis, oui, ja [const array within the StringToBoolean function).
- Anything else will trigger a false statement.
- Obviously, the fifth variable (length) is a number from the get so not need for any conversion.
- Please note that, while a value comprised between 8 and 128 chars is recommended by the length prompt, you can actually type values outside of that range.
- Again, for length, anything outside of 8-128 will be considered very undude but tolerated. Hey... This is California!
- the if/else statements are quite obvious: true/false sends you the quote (responseUpper, responseLower, etc.) and the true/false statement is stored in each variable.
- Depending on the amount of true/false statements, the script will triggers four functions.
- Those four functions are: hazardousUpper, hazardousLower, hazardousNumbers, hazardousSymbols.
- Each function is calculated based on (in logical order):

   1) a math.random function which triggers a selection of characters itself extracted from the standard roman character set
   through the use of hexacodes.
   For Upper/Lower, it's 26 chars (alphabet) available from, respectively, hexacodes 65/97.
   For the numbers, it's 10 chars (0-9) available from hexacode 48.
   For the symbols, it's 15 chars available from hexacode 33.

  2) Because the Math.Random function finds a decimal number between (ex:Upper/Lower) 1.xxx and 26.xxx,
  we use a math.floor function to: a) sanitize it to a non floating point number between 1 and 26,
  b) add the necessary integer to place those numbers in the correct hexacodal geography (+65, +97, +48, +33 - see section #1 above).
 
  3) Finally, the String.fromCharCode extracts the necessary strings (characters) from each operation.
  This value is inherited by each hazardous function.
  
- The function finalPassword generates the final password (LOL).
- The if in the <var all> += associates the surviving values (if not all of them) and passes them on to...
- The loop contained in <var password> which uses math.floor and math.random to generate the char selections + the .length circonsizes them based on the previous user input.
- the following substring validates the final selection which is passed via a return password to the write password function below.

Note that the last three bits of code are from Trilogy and were not altered:

- Button Generation
- The WritePassword to screen function.
- The Event Listener to listen to the button.

BTW.. Why Password Degeneration on the red button? Well the passwords created by String.fromCharCode are actually quite repetitive and feel very much sliced together, hence the term "Degeneration".

Hope you'll have some fun with the overall password generator and its Lebowski quotes.

And for now, Good Night and Good Luck.

(Edward R. Murrow)

