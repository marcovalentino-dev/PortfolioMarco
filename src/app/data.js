/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 225 225 225; #000000
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Scrabble Grid",
    description: "Scrabble is a very simple and fun word game. If you are looking for a relaxing game but at the same time full of puzzles to solve then Scrabble will test you by offering you unique words to find and gradually more and more difficult. There are over 328 levels to complete.",
    date: "2022-07-14",
    demoLink: "",
    images: ["/images/Scrabble_1.jpg", "/images/Scrabble_2.jpg", "/images/Scrabble_3.jpg", "/images/Scrabble_4.jpg"],
  },
  {
    id: 2,
    name: "Anagrams",
    description: "Anagrams is a next-generation mobile word game. Anagrams will test you by challenging you repeatedly and offering you increasingly difficult anagrams of Italian and English words each time. In total there are over 2153 anagrams to be found.",
    date: "2022-04-06",
    demoLink: "",
    images: ["/images/Anagrams_1.jpg", "/images/Anagrams_2.jpg","/images/Anagrams_3.jpg","/images/Anagrams_4.jpg","/images/Anagrams_5.jpg","/images/Anagrams_6.jpg"],
  },
  {
    id: 3,
    name: "Immersive E-Commerce",
    description: "This demo project was created for the distribution sector. The concept of this project was to create a 3D shopping center that can be explored by the user. The user has the possibility to buy or view the products on the shelf. The user can also complete a series of daily missions and a series of minigames to get special points. With the special points you can get personalized discounts to spend in the real shop. The configuration of missions and rewards is done through an external CMS. The application provides for automatic loading of the layout of the shelves, 3D models, textures and missions, all made possible with a Web Service in REST / JSON.",
    date: "2022-02-15",
    demoLink: "",
    images: ["/images/market_1.png", "/images/market_2.png","/images/market_3.png","/images/market_4.png","/images/market_5.png","/images/market_6.png","/images/market_7.png"],
  },
  {
    id: 4,
    name: "About Words",
    description: "Playing About Words for 10 minutes a day improves your mind and prepares you for the challenges of the day! Are you tired of the usual crossword puzzles or finding the hidden words and are you looking for an immersive, fun and engaging experience? Then enjoy About Words, the addictive, modern puzzle, very easy to play and completely in Italian.",
    date: "2021-11-22",
    demoLink: "",
    images: ["/images/aboutwords_1.jpg", "/images/aboutwords_2.jpg","/images/aboutwords_3.jpg","/images/aboutwords_4.jpg"],
  },
  {
    id: 5,
    name: "Smart Boxer",
    description: "Smart Boxer is a project created for the final exam of my course of study. The game is about a Boxer who has to prove that he is not all brawn and has no brains and to do so he has to solve some environmental puzzles. For this project, I created a localization system that allows localizers to translate the game without having to go through the game engine. I also used Unity physics to move the character and interact with in-game objects. I used Unity's Animator to animate the character and to animate the game interfaces.",
    date: "2020-07-15",
    demoLink: "https://www.youtube.com/watch?v=ktTZDhpezQg",
  },
];

export const BtnList = [
  // { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  //{ label: "Contact", link: "/contact", icon: "contact", newTab: false },
  // {
  //   label: "Github",
  //   link: "https://www.github.com/codebucks27",
  //   icon: "github",
  //   newTab: true,
  // },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/marco-valentino-05ba25155/",
    icon: "linkedin",
    newTab: true,
  },
  // {
  //   label: "X",
  //   link: "https://www.x.com/code_bucks",
  //   icon: "twitter",
  //   newTab: true,
  // },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


