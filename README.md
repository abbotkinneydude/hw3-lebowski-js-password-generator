## #hw3-lebowski-js-password-generator

<h3>Big Lebowski flaired JS password generator optimized for mobile devices (Bootstrap CSS).</h3>
<p>Github Repository Page: https://github.com/palowenstein/hw3-lebowski-js-password-generator</p>
<p>Github Deployment Page: https://palowenstein.github.io/hw3-lebowski-js-password-generator/</p>

![Big Lebowski Password Generator (Screenshot)](./assets/img/ucla-hw3-lebowski-password-generator.jpg?raw=true "Big Lebowski Password Generator (Screenshot)")

## Overview / Instructions:
<ul>
<li>5 types of password elements available to the user via a button / prompt window combination:
<ol>
<li>Uppercases</li>
<li>Lowercases</li>
<li>Numbers</li>
<li>Symbols</li>
<li>Special Characters</li>
</ol>
</li>
<li>For choices #1-#4, a certain type of quote from 'The Big Lebowski' will appear on screen:
<ul>
<li>If you respond yes to any of the first 4: you get a positive quote from The Big Lebowski.</li>
<li>If you respond no to any of the first 4: you get a negative quote from The Big Lebowski.</li>
</ul>
<li>The fifth button, length, gets a positive quote if the value entered is between 8 and 128. If outside of that range, you're being very undude.</li>
<li>Once your selection is complete, click on the red button to 'degenerate' a password.</li>
</ul>

## Technical Notes:

<h5>HTML Document</h5>
<ul>
<li>Head Section: 1) CSS Reset, 2) CSS Bootstrap, 3) Trilogy CSS.</li>
<li>Head Section: The javascript src is specified as DEFER so it doesn't load until the whole page is loaded.</li>
<li>Body Section: I used bootstrap to embelish the presentation and, more importantly, I inspired myself from the movie THE BIG LEBOWSKI for this homework.</li>
<li>Body Section: Notice the multiple rows within the container, how the buttons are placed, etc. There's a minimum (6 instances) of custom css.</li>
</ul>

<h5>JavaScript Inner Works</h5>

<ul>
<li>Based on the 5 buttons, there are 5 variables: 1) upper 2) lower 3) numbers 4) symbols 5) length.</li>
<li>There is a stringToBoolean function to convert the first four strings into true/false statements with a bonus string to lowercase conversion to avoid the need for uppercase characters.</li>
<li>In addition of yes, y, yeah, you can also type yeah lebowski, team america, south park, beavis, oui, ja [const array within the StringToBoolean function).</li>
<li>Anything else will trigger a false statement.</li>
<li>Obviously, the fifth variable (length) is a number from the get so not need for any conversion.</li>
<li>The if/else statements are quite obvious: true/false sends you the quote (responseUpper, responseLower, etc.) and the true/false statement is stored in each variable.</li>
<li>Depending on the amount of true/false statements, the script will triggers four functions.</li>
<li>Those four functions are: hazardousUpper, hazardousLower, hazardousNumbers, hazardousSymbols.</li>
<li>Each function is calculated based on (in logical order):

<ol>
<li>a math.random function which triggers a selection of characters itself extracted from the standard roman character set
   through the use of hexacodes.
   <ul>
   <li>For Upper/Lower, it's 26 chars (alphabet) available from, respectively, hexacodes 65/97.</li>
   <li>For the numbers, it's 10 chars (0-9) available from hexacode 48.</li>
   <li>For the symbols, it's 15 chars available from hexacode 33.</li>
   </ul>
</li>

<li>Because the Math.Random function finds a decimal number between (ex:Upper/Lower) 1.xxx and 26.xxx,
  we use a math.floor function to:<br/>
  a) sanitize it to a non floating point number between 1 and 26,<br />
  b) add the necessary integer to place those numbers in the correct hexacodal geography (+65, +97, +48, +33 - see section #1 above).
</li>
 
<li>Finally, the String.fromCharCode extracts the necessary strings (characters) from each operation.<br />
<ul>his value is inherited by each hazardous function
  <li>The function finalPassword generates the final password.</li>
  <li>The if in the "var all +=" associates the surviving values (if not all of them) and passes them on to...</li>
  <li>The loop contained in "var password" which uses math.floor and math.random to generate the char selections + the .length circonsizes them based on the previous user input.</li>
  <li>the following substring validates the final selection which is passed via a return password to the write password function below.</li>
</ul>
</li>
</ol>

## References:
<ul>
<li>Vanilla Javascript [http://www.ecmascript.org/]</li>
<li>Bootstrap CSS Library [https://getbootstrap.com/]</li>
</ul>

 ## License
<p>
<a href="./MITlicense.txt">MIT License</a> | Copyright © [2020] Pierre André Lowenstein
</p>

 ## Contact
<p>
<a href="http://pierreandrelowenstein.com" title="[www] Pierre Andr&eacute; Lowenstein" target="_blank">[www] pierreandrelowenstein.com</a>
&nbsp;|&nbsp;
<a href="mailto:soundtrackspecialist@gmail.com" title="Courriel">Send me a 'courriel'</a>
</p>