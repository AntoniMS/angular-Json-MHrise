import { Component, OnInit } from '@angular/core';
import { Home } from '../home/models/Home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public home: Home;

  constructor() {
    this.home = {
      img: {
        src: '/assets/images/logo.png',
        alt: 'logo MH rise',
      },
      description:
        'Monster Hunter Rise es la última entrega de la Saga Monster Hunter, siendo el título para consolas portátiles de la quinta generación, introducida con Monster Hunter: World. MHRise introduce nuevos monstruos, lugares, mecánicas, y hasta un nuevo tipo de camarada. Su lanzamiento global en la Nintendo Switch fue el 26 de marzo de 2021, mientras que en PC ha sido a principios de 2022.',
    };
  }

  ngOnInit(): void {}
  public mouseOn() {
    this.home.description =
      'Monster Hunter Rise es la última entrega de la Saga Monster Hunter, siendo el título para consolas portátiles de la quinta generación, introducida con Monster Hunter: World. MHRise introduce nuevos monstruos, lugares, mecánicas, y hasta un nuevo tipo de camarada. Su lanzamiento global en la Nintendo Switch fue el 26 de marzo de 2021, mientras que en PC ha sido a principios de 2022. Monster Hunter Rise introduce cambios notables en la jugabilidad y mantiene ciertos aspectos introducidos en Monster Hunter: World. Los mapas siguen siendo abiertos sin zonas de carga, con la diferencia de que ahora la extensión entera del mapa es atravesable gracias a una nueva mecánica: el Cordóptero, que permite tanto atravesar terrenos escarpados y acantilados con facilidad como realizar nuevos ataques con las armas.';
  }

  public mouseOut() {
    this.home.description =
      'Monster Hunter Rise es la última entrega de la Saga Monster Hunter, siendo el título para consolas portátiles de la quinta generación, introducida con Monster Hunter: World. MHRise introduce nuevos monstruos, lugares, mecánicas, y hasta un nuevo tipo de camarada. Su lanzamiento global en la Nintendo Switch fue el 26 de marzo de 2021, mientras que en PC ha sido a principios de 2022. (Toca para seguir leyendo)';
  }
}
