import analyseImg from "@/public/assets/images/portfolio/analyserapport.png";

const projectData = {
  projects: [
    {
      id: "projectModal1",
      title: "Analyserapport",
      subtitle: "Eisenanalyse",
      image: analyseImg,
      modal: {
        title: "Eisenanalyse",
        image: analyseImg,
        projectDetails: {
          title: "Project: Analyserapport",
          background:
            "Een analyserapport maken voor een turnclub die een applicatie wil voor het beheren van de gegevens van zijn leden en financiële zaken.",
          objectives:
            "Hierbij heb ik rekening gehouden met de verwachtingen van de klant, de doelgroep en waarvoor de applicatie dient.",
          useCase: {
            description: "Het systeem werd bediend door:",
            actors: [
              "4 actoren (alle soorten gebruikers)",
              "1 passieve actor (Betaalmethode)",
            ],
            note: "Aan de hand van de actoren en alle gegevens was er een usecasediagram gemaakt.",
          },
          prototype:
            "Naar aanleiding van de usecasebeschrijving, waren er schetsen van schermen van de applicatie voorzien.",
        },
        closeButton: {
          text: "Afsluiten",
          icon: "fas fa-xmark",
        },
      },
    },
  ],
};

// If you need to export it for use in other files:
export default projectData;
