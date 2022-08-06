import profile from "../img/profile-photo.png";
import doodle from "../img/doodly-example-polaroid.png";
import robots from "../img/robot-gladiators-polaroid.png";
import bbs from "../img/bands&brewskis.png";
import budget from '../img/budget-tracker.png';
import pwGen from "../img/password-generator-polaroid.png";
import runner from '../img/run-buddy-polaroid.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(91,206,62)", "rgb(249,73,9)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


export const data = {
    firstName: "Andrea",
    lastName: "Fang",
    initials: "af", // the example uses first and last, but feel free to use three or more if you like.
    position: "a FullStack Developer",
    selfPortrait: profile, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    bio: "Hi! From sunny San Diego, I'm coding with a vengeance. Fresh off UC Berkeley boot camp, I'm up to date on the latest technologies and ready to make something incredible.",
    skills:
        {
            proficientWith: ['html5', 'ccs3', 'javascript', 'react', 'git', 'github', 'react'],
            exposedTo: ['jQuery', 'python']
        }
    ,
    projects: [ 
        {
            title: "Doodly",
            live: "https://doodly-the-app.herokuapp.com/",
            source: "https://github.com/ah-fang/doodly", 
            image: doodle
        },
        {
            title: "Bands & Brewskis",
            live: "https://ah-fang.github.io/projectfun/",
            source: "https://github.com/ah-fang/projectfun",
            image: bbs
        },
        {
            // TODO fix live version - gh-pages issue
            title: "Budget Tracker",
            live: "https://github.com/ah-fang/budget-tracker",
            source: "https://github.com/ah-fang/budget-tracker",
            image: budget
        },
        {
            title: "Robot Gladiators",
            live: "https://ah-fang.github.io/robot-gladiators/",
            source: "https://github.com/ah-fang/robot-gladiators",
            image: robots
        },
        {
            title: "Password Generator",
            live: "https://ah-fang.github.io/password-generator/",
            source: "https://github.com/ah-fang/password-generator",
            image: pwGen
        },
        {
            title: "Run Buddy",
            live: "https://ah-fang.github.io/run-buddy/",
            source: "https://github.com/ah-fang/run-buddy",
            image: runner
        }
    ]
}