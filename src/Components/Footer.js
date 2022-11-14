import React from 'react'

export default function Footer() {
  return (
    <footer class="teal">
      <div class="container">
        <div class="row white-text">
          <div class="col l4">
            <h4 class="brand-logo white-text" href="#">Start-In-Germany</h4>
            <p>Юридическая помощь в Германии</p>
            <ul id="social">
              <li><i class="fa-sharp fa-solid fa-phone"></i></li>
              <li><i class="fa-regular fa-envelope"></i></li>
              <li><i class="fa-brands fa-telegram"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
            </ul>
            <a class="btn waves-effect pulse orange" href="">
              <span>Подать заявку</span>
            </a>
          </div>
          <div class="col l4">
            <h4 class="">Ссылки</h4>
            <ul class="is-light">
              <li>
                <a
                  class="white-text is-size-5 center-align"
                  href=""
                  >Главная</a
                >
              </li>
              <li>
                <a
                  class="white-text is-size-5"
                  href=""
                  >Услуги</a
                >
              </li>
              <li>
                <a
                  class="white-text is-size-5"
                  href=""
                  >О нас</a
                >
              </li>
              <li>
                <a
                  class="white-text is-size-5"
                  href=""
                  >Контакт</a
                >
              </li>
            </ul>
          </div>
          <div class="col l4">
            <h4 class="">Newsletter</h4>
          </div>
        </div>
        <div class="center-align white-text" id="copyright">
          © 2017-2022 | Все права защищены
        </div>
      </div>
    </footer>
  )
}
