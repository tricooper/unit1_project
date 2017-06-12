# hal

Meet Hal

Here's some of what he does: 

1. Type 'Hello!' and Hal will respond with either Good Evening if the time is between the hours of 5PM-Midnight, Good Afternoon if the time is between noon - 5PM and Good Morning if the time is between 12AM-noon. 

2. Type the string 'time' and Hal will give you the current time. This is utilizing the Javascript Date Object

3. Type any string containing the string 'year' (regular expression: .* year .*) and Hal will return the year

4. Type any string containing the string 'day' and Hal will return the Day with an Emoji. This is done using a Switch statement where the day is returning as a number between 0-6. 

5. Ask Hal in a string containing 'can i go home' and if its the weekend, Hal will tell you 'Its the weekend...go home, nerd.', if its during the workday, Hal will say "You can go home in ' + hoursLeft + ' hours and' + minutesLeft + ' minutes'", and if you aren't even at work he will say 'Dude, you're not even at work yet'. This is done using the Date object and conditionals.


6. If you type in a string to Hal with 'Zoom link', Hal will return you the class Zoom link.

7. If you type in the string "NBA Champion + 'Team Name'" (ex: NBA Champion Celtics) where Team Name is a name of a current NBA team, Hal will tell you which year that team won the NBA championship. This is done by creating an object called 'nbaChampions' that contains the year: team and looping through the inputted team to see if they won that year. If they have won, Hal adds their name to the 'text' variable and returns this variable at the end. 


Roadblocks: 
- Was not able to message another room. However many variations of the messageRoom function I used, I couldn't get it to work.
- I figured out how to test a RegEx by creating a constructor in my NBA Championship function, however, I'm not sure how to further edit the expression. At the moment, I have 'var championTest = new RegExp(champion, 'i');', where the regular expression is the varible 'Champion', but I'd like to have the RegEx be the String in champion but also have (.*) around the expression so users can put in any string. 
- I wanted to create a ToDo list, but couldn't figure it out. The logic was to create an empty array and everytime I told hal to 'add x to Todo' this would be pushed to the empty array. I then wanted to loop through the array and on a certain command (like 'what's my ToDo list?') Hal would print out the list. 
- I couldn't get the time zone to work. I'm not sure how to offset it from UTC to UTC -5