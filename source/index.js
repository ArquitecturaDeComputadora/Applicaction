import { builtSeccionHome, constant } from "./routes.js";

constant.linkRegister.addEventListener(constant.EVENT_CLICK, () => {
    constant.logHeader.classList.add('login-header--translateX');
    constant.logMain.classList.add('login-main--translateX');
});

constant.linkLogIn.addEventListener(constant.EVENT_CLICK, () => {
    constant.logHeader.classList.remove('login-header--translateX');
    constant.logMain.classList.remove('login-main--translateX');
});

constant.buttonLogIn.addEventListener(constant.EVENT_CLICK, builtSeccionHome);
