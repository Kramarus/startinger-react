import React from "react";

export default function Header() {
  return (
    <nav class="teal">
      <div class="nav-wrapper container">
        <a class="brand-logo" href="#">
          <span class="">Start-</span>
          <span class="">In-</span>
          <span class="">Germany</span>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li class="">
            <a href="">Главная</a>
          </li>
          <li class="">
            <a href=""> Услуги </a>
          </li>
          <li class="">
            <a href=""> О нас </a>
          </li>
          <li class="">
            <a href=""> Контакты </a>
          </li>
          <li>
            <a class="btn waves-effect waves-light pulse orange" href="">
              <span>Подать заявку</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
