**step 3**
Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
There are multiple ways to change the color of the divs, including:
Adding a new class to the div.
Changing the div’s background color using JavaScript.

*my pseudocode*
queryselectall div squares
add an event listener hover for the div squares
when mouse hovers, change style bg color to black


**step 4**
Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

*my pseudocode*
add button in html with label Customize your Sketchpad called btn-customize
create btnCustomize variable
add an event listener that when click, it shows a prompt
in prompt will ask "Set a number of pixels (ONLY 1-100)"
    if prompt answer is more than 100, then return "You've exceeded the limit."
    if prompt answer is less than 1, then return "How will you draw?"
    if prompt answer is between 1-100, then return the answer as an argument in containerMaker