import React from "react";

import greeting from "../assets/images/greeting.svg";
import docs from "../assets/images/docs.svg";
import asylum from "../assets/images/asylum.svg";
import money from "../assets/images/money.svg";
import success from "../assets/images/success.svg";

const context = [
  {
    title: "Шаг 1: Встреча в аэропорту и сопровождение",
    text1: `Представители нашей фирмы помогут Вам с подбором билетов до аэропорта Дюссельдорфа или Кёльна (Федеральная земля Северный Рейн-Вестфалия) 
                        и организуют встречу в день Вашего прилёта. Далее мы доставим Вас в место временного пребывания, где Вы сможете поесть, отдохнуть 
                        и принять душ с дороги.`,
    text2: `Под местом временного пребывания подразумевается отдельная комната у одного из наших волонтёров, 
                        в немецкой семье или обычный хостел.`,
    img: greeting,
  },
  {
    title: "Шаг 2: Подготовка необходимых документов",
    text1: `После Вашего приезда мы поможем Вам собрать полный пакет документов. Пока Вы отдыхаете, мы займёмся переводами на немецкий. 
                        В идеале всё, что должно быть переведено, можно заранее выслать нам по электронной почте.`,
    list: [
      <li>(обязательно) паспорт с действующей шенгенской визой</li>,
      <li>
        (обязательно) заявление на получение убежища на немецком языке с датой и
        подписью заявителя
      </li>,
      <li>
        (обязательно) краткая биография в виде таблицы, содержащая информацию о
        месте проживания, учебе и работе за последние 10 лет
      </li>,
      <li>распечатка банковского счёта</li>,
      <li>свидетельство о браке</li>,
      <li>свидетельство о рождении</li>,
      <li>диплом об образовании</li>,
      <li>военный билет</li>,
    ],
    img: docs,
  },
  {
    title: "Шаг 3: Подача заявления на убежище",
    text1: `Как только все документы будут готовы, наши сотрудники в зависимости от Вашего местоположения пойдут с Вами в ближайшее ведомство 
                        по делам иностранцев (Ausländeramt) или сразу отправятся с Вами в пункт приёма беженцев в городе Bochum (NRW). Там происходит 
                        подача документов и сдача отпечатков пальцев.`,
    text2: "",
    img: asylum,
  },
  {
    title: "Шаг 4: Оформление жилья и соцпомощи",
    text1: `Поскольку скорее всего у Вас не будет своего жилья в Германии, либо знакомых, которые смогут Вас принять, мы оформим Вам бесплатное 
                        социальное жильё, в котором Вы сможете жить, пока идёт рассмотрение заявки на получение убежища. У Вас будет полная свобода перемещения. 
                        Единственные два ограничения: обязательство ночевать в социальном жилье и запрет на пересечение границы Германии, пока идёт процесс оформления убежища.`,
    text2: `Также, до окончания процесса подачи, который может затянуться на несколько недель, у Вас не будет права на работу. Поэтому, мы оформим Вам социальную помощь, 
                        которую Германия предоставляет всем нуждающимся. На август 2022 года размер соцпомощи составляет 360 евро на человека в месяц. Помимо этого, будут бесплатно 
                        предоставлены медицинская страховка и горячее питание.`,
    img: money,
  },
  {
    title: "Шаг 5: Получение статуса беженца",
    text1: `При правильной подаче документов с помощью наших юристов, в среднем процесс получения убежища может занять от 2 до 6 недель. Длительность зависит 
                        от количества заявителей, а также от пакета документов.`,
    text2: `Как только процесс подачи будет завершен, Вы получите разрешение на работу, а также немецкий документ для поездок, с которым Вы сможете 
                        передвигаться по миру наравне с гражданами Германии. Социальная помощь (360 евро в месяц на человека + компенсация арендной платы) будет 
                        Вам сохранена до Вашего трудоустройства. Также Вы получите возможность посещать курсы немецкого языка.`,
    img: success,
  },
];

export default function Steps() {
  const steps = [];

  context.forEach((e) => {
    steps.push(
      <div class="row versetzt valign-wrapper">
        <div class="col l6">
          <article class="message is-info">
            <div class="message-header">
              <h4 class="title">{e.title}</h4>
            </div>
            <div class="message-body">
              <p class="mb-2">{e.text1}</p>
              <p class="mb-2">{e.text2}</p>
              <ul class="ml-4">{e.list}</ul>
            </div>
          </article>
        </div>
        <div class="col l6 process-img">
          <img src={e.img} alt="Alt" />
        </div>
      </div>
    );
  });

  return (
    <section class="teal white-text" id="process">
      <div class="container">
        <h2 class="title center-align">Процесс получения убежища</h2>

        {steps}

        <div class="center-align primary">
          <a class="btn btn-large waves-effect orange" href="">
            Подать заявку
          </a>
        </div>
      </div>
    </section>
  );
}
