import profile from "../img/profile-photo.png";
import doodle from "../img/doodly-example-polaroid.png";
import bbs from "../img/bands&brewskis.png";
import budget from '../img/budget-tracker.png';
import pwGen from "../img/password-generator-polaroid.png";
import runner from '../img/run-buddy-polaroid.png';
import sphere from '../img/sorcerers_sphere.png';

export let colors = ["rgb(91,206,62)", "rgb(249,73,9)"];

export const data = {
    firstName: "Andrea",
    lastName: "Fang",
    position: "a FullStack Developer",
    selfPortrait: profile, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    bio: "Hi! From sunny San Diego, I'm coding with a vengeance. With an interest in biotechnology, I took up programming, building my full-stack skills at UC Berkeley Extension. Since then, I've been working hard to be up-to-date on the latest technologies and I'm ready to make something incredible.",
    skills:
        {
            proficientWith: ['html5', 'css3', 'javascript', 'python', 'django', 'react'],
            exposedTo: ['jQuery', ]
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
            title: "Budget Tracker",
            live: "https://github.com/ah-fang/budget-tracker",
            source: "https://github.com/ah-fang/budget-tracker",
            image: budget
        },
        {
            title: "Sorcerer's Sphere",
            live: "http://sorcerers-sphere.herokuapp.com/",
            source: "https://github.com/Lemming97/Project_3",
            image: sphere
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