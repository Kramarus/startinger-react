import React from "react";
import asylantrag from "../assets/images/asylantrag.jpg"

export default function Learnmore() {
  return (
    <section class="" id="learnmore">
      <div class="container">
        <h3 class="title center-align">
          Получение убежища в Германии для граждан России
        </h3>
        <p class="subtitle center-align">
          Всё, что Вам необходимо знать для принятия решения.
        </p>
        <div class="row valign-wrapper">
          <div class="col l6">
            <img
              id="learnmore-img"
              src={asylantrag}
              alt="Asylantrag"
            />
          </div>
          <div class="col l6">
            <div class="">
              <p class="">
                (Такого-то) сентября правительство Германии приняло решение о
                предоставлении убежища россиянам, бегущим от мобилизации, а
                также всем тем, кто недоволен установившимся в России
                политическим режимом.
              </p>
              <p class="">
                Согласно параграфу ## Gesetzbuch от такого то числа, теперь
                граждане России также могут рассчитывать на получение социальной
                помощи в размере не менее 360 евро на человека, а также
                предоставление бесплатного социального жилья, либо компенсацию
                расходов на аренду самостоятельно найденного жилья
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
