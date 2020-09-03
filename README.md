# Memory game

This is a memory game written in HTML, CSS and JavaScript for everyone that feels a memory game is the game to play.

 
## User Experience (UX)

---

I wanted to create a memory game that everyone can play, but of course now it is about horses so you might be more interested in that too. 
Therefore it would be my next thing to create different pack of cards to choose from.
In the game, I desided to put the "new game"-button and "new game" button right after the header (not beneath the game-board), and before the score-counter, just 
to focuse everything to one place so that the gamer notice the "new game"-button and "game rules" button. The score-counter is placed right above 
the game-board so that the score-counter and the game-board are like one unit. The game-board is 5x4 rows, and I decided to have 5 cards in 
every row since that centered the game nicely on the screen. 

- ### User stories

    - **First Time Gamer Goals**   
        1. As a First Time Gamer, I want to be able to play the game so that my abstinence will be gone  
        2. As a First Time Gamer, I want to get some feedback while I play the game  
        3. As a First Time Gamer, I want to be able to start a new game if i perform terribly bad or have memory enough to win the game
        4. As a First Time Gamer, I want to play the game on my mobile while on the go

    - **Returning Gamer Goals**   
        1. As a Returning Gamer, I want to see new pictures once in a while   
        2. As a Returning Gamer, I want to learn the name of the horses

    - **Frequent Gamer Goals**    
        1. As a Frequent Gamer, I want to have different pack of cards to choose from.   
        2. As a Frequent Gamer, I want to be able to change color scheme

- ### Design 
    - **Color Scheme**   
    Decision was made to have the body's background set to darkblue and a small darkblue border around the cards to separate them. 
    The color scheme blue suits the nature in which horses lives and is also a color that will stimulate clear thought and will calm the mind 
    and aid concentration, ([see colour affects here](http://www.colour-affects.co.uk/psychological-properties-of-colours)), which I
    hope will help in the game. 
    The cards has a lighter blue background to stand out from the body background. The blue color is nice to the goldish horseshoe on 
    the back of the cards. 
    The "new game" button and "game rules" button has black text instead of white (as the rest of the page) and a lightblue background to stand out from the body 
    color. The "new game"-button, the "game rules"-button and the main game has the same light blue color because they are all involved in the game. 
    First I wanted to use the same color scheme (green) as in my first milestone project, as you can see in my wireframe, but I obviously 
    changed my mind. The darkgreen background would have been nice to the horseshoes's green holes - would have looked like the horseshoe 
    is perforated. 

    - **Typography**    
    The Ranchers font is the main font used with the Roboto font as the fallback if the font isn't being imported into the 
    site correctly. I thought the Ranchers font suits the horse-theme since a rancher is a person who owns or operates a ranch. Also 
    the font looks kinda playful to me, which the game should be.

    - **Imagery**   
    This is a memory game with 20 horse images (10 breeds).
    
    - **Interactivity**   
    A sound of horse neigh is played when each card is flipped, a sound of applause is played when two cards match,
    and a sound of fanfare is played when the game is completed.

- ### Wireframe
    The wireframe is included as a pdf file in the project itself (in a separate directory called wireframe).

## Features
 
 --- 

- ### Existing Features
    - Game-board: consists of 20 cards with 10 different horse breeds

    - Score-counter: The player gain 10 points when two cards match but loses 5 points if it's a wrong match.

    - "New game" button: Creates a new game

- ### Features Left to Implement
    - Add breed names on each card to learn the breeds
    - Add different pack of cards to choose from for variation

## Technologies Used

---

- HTML
- CSS
- JavaScript - The project uses JavaScript for interactivity and for the gameboard to flip the cards
- [Jasmine](https://jasmine.github.io/) - For testing the score counter of the Javascript code
- [Google fonts](https://fonts.google.com/) - to use the Ranchers font 
- [Figma](https://www.figma.com/) - to create the wireframe
- [Bootstrap](https://getbootstrap.com/) - only to reset default properties of elements.
- [Git](https://git-scm.com/) - was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub](https://github.com/) - is used to store the projects code after being pushed from Git.

## Testing

---

### Testing User Stories from User Experience (UX) Section
**First Time Gamer Goals**    
1. As a First Time Gamer, I want to be able to play the game so that my abstinence will be gone    
    i. The cards do flip when clicked    
    ii. when two cards match the cards stay flipped and the gamer gain scores (+10).    
    iii. When two cards don't match the cards flips back and the gamer loses scores (-5).

2. As a First Time Gamer, I want to get some feedback while I play the game   
    i. When the a card is flipped a sound of horse neigh is played.    
    ii. When two cards match a sound of applause is played.    
    iii. When the game is completed a sound of fanfare is played.    
    iiii. The gamer will gain 10 scores or lose 5 scores depending on a match or no match of the cards.

3. As a First Time Gamer, I want to be able to start a new game if i perform terribly bad or have memory enough to win the game    
    i. Sure, the "New Game" button, when clicked, reload the webpage and creates a new game (no cards flipped) whenever the gamer wants to. 

4. As a First Time Gamer, I want to play the game on my mobile while on the go   
    i. The memory game can be played on mobile phone since the webpage is resizable. 

The Returning Gamer Goals and Frequent Gamer Goals are unfortunately not happening. This is something I would like to work on
 if I had more time.

**(Returning Gamer Goals**   
1. As a Returning Gamer, I want to see new pictures once in a while   
2. As a Returning Gamer, I want to learn the name of the horses

**Frequent Gamer Goals**    
1. As a Frequent Gamer, I want to have different pack of cards to choose from.   
2. As a Frequent Gamer, I want to be able to change color scheme)

### Further testing
* Most testing was done throughout development, most of which was manual tests. Jasmine was used to automatically test the score counter. 

* Different web-browsers (Opera, Firefox, Microsoft Edge, Chrome) and Samsung galaxy 9 have been used to check the website's layout and that 
    the site works well on different devices and screensizes. Where needed I used media query to fix any responsiveness issues.
* My friends have played the game on mobile phones with Android (Huawei p smart pro and LG g7 thinQ). 

### Validation 

* The code have been validated in a [HTML validator](https://validator.w3.org/#validate_by_input), [CSS validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 
    and [JavaScript validator](https://jshint.com/) respectively.
    
### Known bugs
* The cards flip a little bit to fast sometimes on mobile. The neight-sound doesn't
    sound sometimes on the second card depending on how fast you click. 

## Deployment

---

### <ins>The project was deployed to GitHub Pages using the following steps:</ins>

1. Log in to GitHub and locate your [GitHub Repository](https://github.com/cirruselli/Interactive-Frontend-Development).

2. At the top of the repository, locate the "Settings" button on the menu.

3. Scroll down the Settings page until you locate the "GitHub Pages" section.

4. Under "Source", click the dropdown called "None" or "Branch" and select "Master Branch".

5. Press save. 

## Configuring a publishing source for GitHub Pages

---

### <ins>Default source settings for repositories without the username naming scheme</ins>

The default settings for publishing your site's source files depend on your site type and the branches you have in your site repository. 
If your site repository doesn't have a master or gh-pages branch, your GitHub Pages publishing source is set to None and your site is not published. 
After you've created either a master or gh-pages branch, you can set one as your publishing source so that your site will be published. 
If you fork or upload your site repository with only a master or gh-pages branch, your site's source setting will automatically be enabled for that branch.

### <ins>Enabling GitHub Pages to publish your site from master or gh-pages</ins>

To select master or gh-pages as your publishing source, you must have the branch present in your repository. If you don't have a master or gh-pages branch, you can create them and then return to source settings to change your publishing source.

1. On GitHub Enterprise, navigate to your GitHub Pages site's repository.

2. Under your repository name, click "Settings". 

3. Use the Select source drop-down menu to select master or gh-pages as your GitHub Pages publishing source.

4. Click "Save".

### <ins>Publishing your GitHub Pages site from a /docs folder on your master branch</ins>

To publish your site's source files from a /docs folder on your master branch, you must have a master branch and your repository must:

- have a /docs folder in the root of the repository

- not follow the repository naming scheme \<username>\.[hostname] or \<orgname>\.[hostname]

1. On GitHub Enterprise, navigate to your GitHub Pages site's repository.

2. Create a folder in the root of your repository on the master branch called /docs.

3. Under your repository name, click "Settings".

4. Use the Select source drop-down menu to select master branch /docs folder as your GitHub Pages publishing source.

5. Click "Save". 

## Cloning a repository

### <ins>Cloning the Repository using the command line:</ins>

1. Log in to GitHub and navigate to the main page of the repository.

2. Above the list of files, click the button "Code".

3. To clone the repository using HTTPS, under "Clone with HTTPS", click the symbol after the link address. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the symbol after the link address.

4. Open Git Bash.

5. Change the current working directory to the location where you want the cloned directory.

6. Type "git clone", and then paste the URL you copied earlier.

7. Press "Enter" to create your local clone. 

### <ins>Cloning the Repository to GitHub Desktop:</ins>

1. Log in to GitHub and naviate to the main page of the repository.

2. Above the list of files, click the button "Code".

3. Click "Open with GitHub Desktop" to clone the repository with GitHub Desktop.

4. Follow the prompts in GitHub Desktop to complete the clone.

### <ins>Cloning an empty Repository:</ins>

1. On GitHub, navigate to the main page of the repository.

2. To clone your repository using the command line using HTTPS, under "Quick setup", click the symbol after the link address. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click the symbol after the link address.

    Alternatively, to clone your repository in Desktop, click the dowload symbol. Set up in Desktop and follow the prompts to complete the clone.

3. Open Git Bash.

4. Change the current working directory to the location where you want the cloned directory.

5. Type "git clone", and then paste the URL you copied earlier. 

6. Press "Enter" to create your local clone. 

## Expanding on my project

---

Is not allowed until I've finished the course at Code Institute. I'll let you know when.

## Credits

---

### Content
- The sound for interactivity was copied from:   
    [Horse neigh when turning the cards](https://freesound.org/people/GoodListener/sounds/322450/)

    [Applause when 2 cards match](https://freesound.org/people/xtrgamr/sounds/241132/)

    [Fanfare when completing the game](https://freesound.org/people/joepayne/sounds/413203/)

- I found inspiration from/to:

    [Javascript code for soundeffects](https://javascript-tutor.net/index.php/playing-music-using-javascript/)

    [Javascript tutorial for gamelogic](https://www.youtube.com/watch?v=ZniVgo8U7ek)

    [How to create a "new game" button that reset the gameboard](https://www.youtube.com/watch?v=Azl6WzYuvgM)

### Media
The photos used in this site were obtained from:
- [Appaloosa](https://horseislove.com/wp-content/uploads/2020/03/appaloosa-horse-lifespan.jpg)
- [Arab horse](https://i.pinimg.com/originals/de/e6/da/dee6da6e062a91372600d03d2f78cfdd.jpg)
- [Ardennes horse](http://www.djupedalen.se/3/245/grevagarden-190502-03-ardenner/files/19hpkall_attack.jpg)
- [Clydesdale](https://img.point.pet/images/clydesdale-horses-in-full-tack-157293408-582dbf7b5f9b58d5b14b3ed1.jpg)
- [English thoroughbred](https://www.hippson.se/cldocpart/246637.jpg)
- [Fjord horse](https://cdn2.cdnme.se/4568077/9-3/askaspanar_5a43ee829606ee12929154ea.jpg)
- [Friesian](https://i.pinimg.com/originals/48/fa/cf/48facf8760a56e2684bedd902be370f9.jpg)
- [Haflinger horse](https://i.pinimg.com/474x/b1/24/48/b1244878223690805255df4187b35f5d.jpg)
- [Paint](https://i.pinimg.com/originals/24/51/a7/2451a7dd911a28c7bb786014c04e4eda.jpg)
- [Shetlands pony](https://www.vildangen.se/wp-content/uploads/2015/07/robbie_uppstalld_2018.jpg)
- [Horseshoe](https://cdn.pixabay.com/photo/2019/03/14/04/38/graphic-4054233_960_720.png)

### Acknowledgements

- Tutors at Code Institute for their support.

- My mentor for his support and ideas. 

- My long-distance boyfriend for his support.

- I received inspiration for this project from my mentor and my own interest horses.