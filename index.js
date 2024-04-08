const aigSeconde = document.querySelector("#aiguille-seconde");
const aigHeure = document.querySelector("#aiguille-heure");
const aigMinutes = document.querySelector("#aiguille-minute");
const affichage = document.querySelector("#affichage");
const horloge = document.querySelector("#horloge");

const actualizeH = () => {
  const time = new Date();
  let heure = time.getHours();
  let minutes = time.getMinutes();
  let secondes = time.getSeconds();

  affichage.textContent = formaterHeure(heure, minutes, secondes);

  const degresSec = (secondes / 60) * 360 - 90;
  const degresMin = (minutes / 60) * 360 + (secondes / 60) * 6 - 90;
  const degresHeure = ((heure % 12) / 12) * 360 + (minutes / 60) * 30 - 90;

  aigSeconde.style.transform = `rotate(${degresSec}deg)`;
  aigHeure.style.transform = `rotate(${degresHeure}deg)`;
  aigMinutes.style.transform = `rotate(${degresMin}deg)`;
  horloge.style.transform = `scale(${horloge} + 5)`;
};

setInterval(actualizeH, 1000);

actualizeH();

function formaterHeure(heure, minute, seconde) {
  return `${heure.toString().padStart(2, 0)}:${minute
    .toString()
    .padStart(2, 0)}:${seconde.toString().padStart(2, 0)}`;
}
