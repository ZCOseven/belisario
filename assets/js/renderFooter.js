import { footerComponent } from "./components/footer.js";

function renderFooter(){
    let $body = document.querySelector("body");
    $body.insertAdjacentElement('beforeend', footerComponent());
}

window.addEventListener("load", () =>{
    renderFooter();
});
