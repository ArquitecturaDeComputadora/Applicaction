import { constant } from "../routes.js"

export const builtSeccionHome = ()=> {
    const seccionMain = document.createElement('main');
    seccionMain.classList.add('main');
    constant.main.outerHTML = "";
}