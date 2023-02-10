import { useEffect } from "react";
import { useState } from "react";
import Home from "./Home";
import Sparkle from "./Sparkle";

const HomeContainer = () => {
  const [status, setStatus] = useState(0);

  const slides = document.getElementsByClassName("main__img");

  useEffect(() => {
    let main = document.querySelector(`[data-status="active"]`);
    let text = main.querySelector(".main__text");
    let letters = text.innerText.split("");

    text.innerText = "";

    letters.forEach((letter) => {
      let span = document.createElement("span");
      span.innerText = letter;
      span.className = "main__text--letter";

      text.appendChild(span);
    });
  });

  const slideUp = () => {
    setTimeout(() => {
      status != slides.length - 1 ? setStatus(status + 1) : setStatus(0);
      const next = status == slides.length - 1 ? 0 : status + 1;

      const currentSlide = document.querySelector(`[data-index="${status}"]`);
      const nextSlide = document.querySelector(`[data-index="${next}"]`);

      currentSlide.dataset.status = "inactive";
      nextSlide.dataset.status = "active";

      setTimeout(() => {
        currentSlide.dataset.status = "previous";
      }, 800);
    }, 800);
  };

  return (
    <div id="container">
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <Sparkle />

      <div className="main__buttons">
        <button className="main__buttons--up" onClick={slideUp}>
          <span className="material-icons">&#xe5cf;</span>
        </button>
      </div>

      <div className="main__img" data-index="0" data-status="active">
        <Home
          title="temptation"
          desc="Ya tenemos disponible el muy esperado regreso de TXT con su álbum Temptation."
          img="./img/mainimg02.png"
          id="0"
          link="16QgYumDBfDgraH6ABXi"
        />
      </div>

      <div className="main__img" data-index="1" data-status="previous">
        <Home
          title="star"
          desc="XG nos trae su segundo single album y un concepto diferente al de su debut."
          img="./img/mainimg.png"
          id="1"
          link="axoObgwTbYzb2A1ziP0N"
        />
      </div>

      <div className="main__img" data-index="2" data-status="previous">
        <Home
          title="hyyh"
          desc="Restockeamos The Most Beautiful Moment In Life de BTS para que lo sumes a tu colección."
          img="./img/mainimg03.png"
          id="2"
          link="pbFoUXuDSBKKZ97TaXnD"
        />
      </div>
    </div>
  );
};

export default HomeContainer;
