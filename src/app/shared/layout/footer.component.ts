import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  today: number = Date.now();
}
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // El usuario está desplazándose hacia abajo
    navbar.style.top = "-80px"; // Oculta la barra de navegación
  } else {
    // El usuario está desplazándose hacia arriba
    navbar.style.top = "0"; // Muestra la barra de navegación
  }

  lastScrollTop = scrollTop;
});

