import React from "react";

import germany from "../assets/images/germany.svg"

export default function Hero() {
  return (
    <section class="teal">
      <div id="hero-body">
        <div class="container row white-text" id="hero-content">
          <div class="col l8">
            <h2 class="title">
              <span>Помощь</span> <span>с получением</span> <span>убежища</span>
              <span>в Германии</span> <span>для граждан России</span>
            </h2>
            <h5 class="subtitle">
              Полный комплект услуг: от встречи в аэропорту и до получения
              бесплатного жилья и ежемесячного денежного пособия
            </h5>
            <div id="hero-buttons">
              <a class="btn btn-large waves-effect orange" href="">
                Подать заявку
              </a>
              <a class="btn btn-large white black-text" href="#learnmore">
                Узнать больше
              </a>
            </div>
          </div>
          <div class="col l4" id="hero-image">
            <img
              class=""
              width="100%"
              src={germany}
              alt="Germany"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
