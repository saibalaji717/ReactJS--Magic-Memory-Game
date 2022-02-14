import { useState, useEffect } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
const imgSrc = [
  {
    matched: false,
    src: "./img/sword-1.png",
  },
  {
    matched: false,
    src: "./img/helmet-1.png",
  },
  {
    matched: false,
    src: "./img/potion-1.png",
  },
  {
    matched: false,
    src: "./img/ring-1.png",
  },
  {
    matched: false,
    src: "./img/scroll-1.png",
  },
  {
    matched: false,
    src: "./img/shield-1.png",
  },
];
function App() {
  const [cards, setCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const choiseUpdaton = (card) => {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  };
  useEffect(() => {
    if (choiseOne && choiseTwo) {
      setDisabled(true);
      if (choiseOne.src === choiseTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((val) => {
            if (val.src === choiseOne.src) {
              return { ...val, matched: true };
            }
            return val;
          });
        });
        resetValues();
      } else {
        setTimeout(() => {
          resetValues();
        }, 2000);
      }
    }
  }, [choiseOne, choiseTwo]);
  const resetValues = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setAttempts((prevCount) => prevCount + 1);
    setDisabled(false);
  };
  const shuffleCards = () => {
    const shuffledcards = [...imgSrc, ...imgSrc]
      .sort(() => Math.random() - 0.5)
      .map((val) => ({ ...val, id: Math.random() }));
    setChoiseOne(null);
    setChoiseTwo(null);
    setCards(shuffledcards);
    setAttempts(0);
  };
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <p className="turns">Turns - {attempts}</p>
      <button onClick={shuffleCards}>New Game</button>
      <div className="cards">
        {cards.map((val) => (
          <SingleCard
            card={val}
            key={val.id}
            userSelection={choiseUpdaton}
            flipped={val.matched || val === choiseOne || val === choiseTwo}
            disabled={disabled}
          />
        ))}
      </div>

      <p className="copyright">Copyright © 2022 Balaji. All rights reserved</p>
    </div>
  );
}

export default App;
