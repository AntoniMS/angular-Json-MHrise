import { NavigatorInterface, FooterInterface } from './core/models/Core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Monster Hunter Rise App - Json Server"
  public navigator: NavigatorInterface[] = [
    {
      name: "principal",
      link: "/home"
    },
    {
      name: "lugares",
      link: "/locations"
    },
    {
      name: "monstruos",
      link: "/monsters"
    },
    {
      name: "extras",
      link: "/extras"
    }
  ];
  public footer: FooterInterface = {
    creator: "Antonio Martínez Sanjuán",
    from: "2022 UpgradeHub"
  }
}

  

