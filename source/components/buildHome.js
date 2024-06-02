import { constant } from "../routes.js"
import { body } from "../utils/content/const.js";

export const builtSeccionHome = ()=> {
    constant.main.outerHTML = "";
    constant.body.classList.add("home");

    const header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = `
    <nav class="navigation">
    <h2 class="navigation__title">Bienvenido de nuevo Pedro!</h2>
    <img class="navigation__user-photo" src="./asset/img/perfil.png" alt="">
</nav>
<section class="banner">
    <img class="banner__logo" src="./asset/img/logo.png" alt="">
    <h1 class="banner__num-car">01</h1>
    <h2 class="banner__name-car">Chevrolet</h2>
    <button class="banner__enter-car">
        <i class="bi bi-play"></i>
        <span>INGRESAR</span>
    </button>
</section>
    `;

    const main = document.createElement("main");
    main.classList.add("mis-carros");
    main.innerHTML = `
    <section class="mis-carros__header">
            <i class="bi bi-pencil"></i>
            <h3 class="mis-carros__title">MIS CARROS</h3>
            <i class="bi bi-plus-lg"></i>
        </section>
        <section class="mis-carros__cards">
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">1</figcaption>
                <img class="mis-carros__img" src="./asset/img/car1.svg" alt="">
            </figure>
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">2</figcaption>
                <img class="mis-carros__img" src="./asset/img/car2.svg" alt="">
            </figure>
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">3</figcaption>
                <img class="mis-carros__img" src="./asset/img/car3.svg" alt="">
            </figure>
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">3</figcaption>
                <img class="mis-carros__img" src="./asset/img/car3.svg" alt="">
            </figure>
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">3</figcaption>
                <img class="mis-carros__img" src="./asset/img/car3.svg" alt="">
            </figure>
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">3</figcaption>
                <img class="mis-carros__img" src="./asset/img/car3.svg" alt="">
            </figure>
        </section>
    `;

    const returnDiv = document.createElement("div");
    returnDiv.className = "return";
    returnDiv.innerHTML = `
    <i class="bi bi-arrow-left"></i>
    <p>Cerrar sesion</p>
    `;

    body.insertAdjacentElement('afterbegin', returnDiv);
    body.insertAdjacentElement('afterbegin', main);
    body.insertAdjacentElement('afterbegin', header);
    /* 
        <header class="header">
        <nav class="navigation">
            <h2 class="navigation__title">Bienvenido de nuevo Pedro!</h2>
            <img class="navigation__user-photo" src="./asset/img/perfil.png" alt="">
        </nav>
        <section class="banner">
            <img class="banner__logo" src="./asset/img/logo.png" alt="">
            <h1 class="banner__num-car">01</h1>
            <h2 class="banner__name-car">Chevrolet</h2>
            <button class="banner__enter-car">
                <i class="bi bi-play"></i>
                <span>INGRESAR</span>
            </button>
        </section>
    </header>
    <main class="mis-carros">
        <section class="mis-carros__header">
            <i class="bi bi-pencil"></i>
            <h3 class="mis-carros__title">MIS CARROS</h3>
            <i class="bi bi-plus-lg"></i>
        </section>
        <section class="mis-carros__cards">
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">1</figcaption>
                <img class="mis-carros__img" src="./asset/img/car1.svg" alt="">
            </figure>
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">2</figcaption>
                <img class="mis-carros__img" src="./asset/img/car2.svg" alt="">
            </figure>
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">3</figcaption>
                <img class="mis-carros__img" src="./asset/img/car3.svg" alt="">
            </figure>
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">3</figcaption>
                <img class="mis-carros__img" src="./asset/img/car3.svg" alt="">
            </figure>
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">3</figcaption>
                <img class="mis-carros__img" src="./asset/img/car3.svg" alt="">
            </figure>
            <figure class="mis-carros__card">
                <figcaption class="mis-carros__number">3</figcaption>
                <img class="mis-carros__img" src="./asset/img/car3.svg" alt="">
            </figure>
        </section>
    </main>
    <div class="return">
        <i class="bi bi-arrow-left"></i>
        <p>Cerrar sesion</p>
    </div> */
}