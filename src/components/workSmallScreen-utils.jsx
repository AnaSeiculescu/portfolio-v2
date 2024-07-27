import powerOrganizerImg from "../../images/power-organizer1.jpg";
import dizzyNotesImg from "../../images/dizzy-notes2.jpg";
import callACatImg from "../../images/catAPI.jpg";
import collectionMapImg from "../../images/collection-map1.jpg";
import previousPortfolioImg from "../../images/previous-portfolio.jpg";
import rockPaperScissorsGameImg from "../../images/rock-paper-scissors-lizard-spock.jpg";
import breakfastRecipesImg from "../../images/breakfast-recipes.jpg";
import colorPickerImg from "../../images/color-picker.jpg";

export const latestProjectsProps = [
    {
        id: 1.1,
        title: "power organizer",
        alt: "power-organizer",
        imgSrc: powerOrganizerImg,
        // linkHref: "http://3.76.123.244",
        linkHref: "https://www.power-organizer.com",
        technologies: ["React.js", "JavaScript", "Material UI"],
        // description: "helps you keep track of your todos depending on the calendar",
        description: "helps you keep track of your todos, in your account",
        codeLinkHref: "https://github.com/AnaSeiculescu/to-do-list-react",
    },
    {
        id: 1.2,
        title: "dizzy notes",
        alt: "dizzy-notes",
        imgSrc: dizzyNotesImg,
        linkHref: "https://anaseiculescu.github.io/keep-notes/",
        technologies: ["JavaScript", "Masonry", "CSS", "Web Storage API"],
        description: "your can add and delete coloured notes, storaged with localStorage, or with JSON server",
        codeLinkHref: "https://github.com/AnaSeiculescu/keep-notes",
    },
    {
        id: 1.3,
        title: "call a cat with the CatAPI",
        alt: "call-a-cat",
        imgSrc: callACatImg,
        linkHref: "https://cat-caller.netlify.app/#",
        technologies: ["React.js", "The Cat API", "Bootstrap", "Netlify"],
        description: "call how many cat you want to collect, from The Cat API",
        codeLinkHref: "https://github.com/AnaSeiculescu/Call-a-Cat-API",
    },
    {
        id: 1.4,
        title: "collection map",
        alt: "collection-map",
        imgSrc: collectionMapImg,
        linkHref: "https://anaseiculescu.github.io/collection-map/",
        technologies: ["JavaScript", "jQuery", "GoogleMapsAPI", "CSS"],
        description: "search for locations and you can collect them on your map and in your list",
        codeLinkHref: "https://github.com/AnaSeiculescu/collection-map",
    },
];

export const oldestProjectsProps = [
    {
        id: 2.1,
        title: "my previous portfolio",
        alt: "previous-portfolio",
        imgSrc: previousPortfolioImg,
        linkHref: "https://anaseiculescu.github.io/Portfolio/",
        technologies: ["JavaScript", "jQuery", "CSS"],
        description: "a development of my imagination through my beginner skills",
        codeLinkHref: "https://github.com/AnaSeiculescu/Portfolio",
    },
    {
        id: 2.2,
        title: "rock paper scissors lizard spock",
        alt: "rock-paper-scissors-lizard-spock",
        imgSrc: rockPaperScissorsGameImg,
        linkHref: "https://anaseiculescu.github.io/rock-paper-scissors-lizard-spock/",
        technologies: ["JavaScript", "CSS", "HTML"],
        description: "try your luck! play the game!",
        codeLinkHref: "https://github.com/AnaSeiculescu/rock-paper-scissors-lizard-spock",
    },
    {
        id: 2.3,
        title: "breakfast recipes",
        alt: "breakfast-recipes",
        imgSrc: breakfastRecipesImg,
        linkHref: "https://anaseiculescu.github.io/breakfast-recipes/",
        technologies: ["CSS", "HTML", "Photoshop"],
        description: "a responsive site, with the cuttest responsive logo :)",
        codeLinkHref: "https://github.com/AnaSeiculescu/breakfast-recipes",
    },
    {
        id: 2.4,
        title: "color picker",
        alt: "color-picker",
        imgSrc: colorPickerImg,
        linkHref: "https://anaseiculescu.github.io/ana_s_color_picker/",
        technologies: ["JavaScript", "CSS", "jQuery"],
        description: "select the hue you prefer to change the panel, you also can save a list of preferred colors",
        codeLinkHref: "https://github.com/AnaSeiculescu/ana_s_color_picker",
    },
];
