# Mr. Roboger's Neighborhood

#### This is a webpage that talks to you when you enter a number

#### By Mary Marks

## Technologies Used

*HTML
*CSS
*JQuery
*JavaScript
*GIT

## Description

This webpage talks to you by using looping and arrays in javascript to determine the correct response based on the user's input.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to your devices desktop files and click the webpage link
* View the webpage on your browser
* Type any number into the box
* Click the "submit" button
* View the results

## Known Bugs

* None

## License

MIT

## Specs

Describe: beepBoop()

Test: It should return 0 if the number 0 is inputted
Code: beepBoop(0)
Expected Output: [0]

Test: It should return "Beep!" for numbers that contain 1
Code: beepBoop(1)
Expected Output: [0, Beep!]

Test: It should return "Boop!" for numbers that contain 2
Code: beepBoop(2)
Expected Output: [0, Beep!, Boop!]

Test: It should return "Won't you be my neighbor?" for numbers that contain 3
Code: beepBoop(3)
Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?]

Test: It should return the number for any numbers not containing 1, 2, or 3
Code beepBoop (4)
Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4]