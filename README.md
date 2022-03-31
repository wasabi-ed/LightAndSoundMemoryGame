# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Edward Mendieta

Time spent: 5 hours spent in total

Link to project: (https://glitch.com/edit/#!/plume-beautiful-bill?path=README.md%3A7%3A13)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [x] Program displays Score and Highscore.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Following the pattern and updating score](http://g.recordit.co/Aitn4sQgJg.gif)
![Game changes length and pattern on every iteration](http://g.recordit.co/IO9qr3pOPP.gif)
![Time gets faster on every turn](http://g.recordit.co/l1rjbmuPIc.gif)
![](gif4-link-here)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   *YouTube
   *StackOverflow
   *W3Schools
   *Professor David Freer
   \*David Morales, UX/UI Designer

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   I mostly had two challenges when trying to create this project. The first issue was trying to get the time to speed up properly. The second issue had to do with the random number generator. While trying to set the code to speed the time up, I had initially tried to take the long route by creating a function that would subtract time on each turn. That didn’t seem to work because the time would just be subtracted all at once instead of in smaller increments. I then thought, what if I just hardcoded subtracting “x” number of milliseconds per turn until I found a new problem: the time would not reset. After winning, losing, or stopping the game, the time would continue to subtract to the point that it was too fast to even register. With some help from StackOverflow, I had the idea to “reset” the times by simply adding them to the end of the 3 main functions, stopGame, loseGame, and winGame. The other issue was something I almost didn’t notice. I came up with a simple function to generate a random order for the pattern that also varies in length. So some rounds will last longer than others. The problem I had here was that the pattern would only change if the user wins. This one I felt was a little trickier and had my C++ professor help me out. As luck would have it, I ended up spotting the problem which had to do with how I was calling the function and an empty array.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   After submitting my application there are two questions that come to mind: How often do you upgrade your technology? And how do you keep up with the latest requirements? In the last 15 years there has been a massive technologic boom. Everything is happening and changing so fast that a lot of companies can’t keep up with the new practices. This also ties in to the second question because I’m curious as to how quickly or slowly these changes would be implemented in day to day functions in the office or even the maintenance of projects that are already developed or deployed.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   Given an extended period of time, I think it would have been fun to try and make the game a little more challenging by adding other elements to the puzzle. Much like the game Bop-It, where a user must do at least 2 more things. Maybe getting some use out of the keyboard. I also believe that adding a rhythm element to the game would make it more challenging as well as more fun. Something along the lines of playing back a sequence of patterns but to a beat that would be marked incorrect or would knock off points if missed. I would also try and implement a black and white button for users with colorblindness. Another idea would be expanding on the score counter. Once a user reaches a certain score, the board could spin the colors around for more complexity. Leaderboard could be implemented with some back-end to keep track of all the scores. Which would probably lead to users wanting to share their scores on social media, so adding some kind of “share” button.

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)

## License

    Copyright Edward Mendieta

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
