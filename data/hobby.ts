import SoccerImg from "@/public/assets/images/hobbies/afb_mj.jpeg";
import BoardGame from "@/public/assets/images/hobbies/kathan.jpg";
import CookingImg from "@/public/assets/images/hobbies/koken.jpeg";
import HollyDayImg from "@/public/assets/images/hobbies/vakantie.jpg";

export const hobbies = [
  {
    img: SoccerImg,
    title: "Voetbal",
    text: "Als grote voetbalfan kan het niet anders dan dat ik zelf ook voetbal en me wil meten met de grote spelers. Ik analyseer meestal de acties tijdens een wedstrijd van mijn favoriete voetbalspelers.",
    button: {
      text: "Learn More",
      onClick: () => alert("Voetbal"),
    },
  },
  {
    img: BoardGame,
    title: "Gezelschapsspelletjes",
    text: "Ik houd van gezelschapsspellen, vooral voor het competitieve karakter. Ook de spellen waar strategie aan bod komt, zijn een uitdaging voor mij en extra stimulans om te winnen.",
    button: {
      text: "Learn More",
      onClick: () => alert("Kathan"),
    },
  },
  {
    img: CookingImg,
    title: "Koken",
    text: "Wanneer ik iets lekkers heb bereid geeft me dit veel voldoening, zeker wanneer ik mijn disgenoten ook zie genieten van wat ik hen serveer.",
    button: {
      text: "Learn More",
      onClick: () => alert("Koken"),
    },
  },
  {
    img: HollyDayImg,
    title: "Vakantie",
    text: "Reizen is voor mij eerder ontspanning; even mijn zinnen verzetten en relaxen. Ook het ontdekken van andere culturen spreekt mij wel aan, maar helaas heb ik hiertoe nog niet veel de gelegenheid gekregen.",
    button: {
      text: "Learn More",
      onClick: () => alert("Vakantie"),
    },
  },
];
