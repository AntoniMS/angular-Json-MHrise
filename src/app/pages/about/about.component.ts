import { Component, OnInit } from '@angular/core';
import { Gallery } from '../home/models/Home';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public gallery!: Gallery;
  constructor() {
    this.gallery = {
      title: "Galeria",
      imageGallery: [
       
        {
          src: "../../../assets/images/gallery/3.png",
          alt: "Foto de monsterHunterRise"
        },
        {
          src: "../../../assets/images/gallery/2.jpg",
          alt: "Foto de monsterHunterRise"
        },
        {
          src: "../../../assets/images/gallery/1.jpg",
          alt: "Foto de monsterHunterRise"
        },
        {
          src: "../../../assets/images/gallery/4.jpg",
          alt: "Foto de monsterHunterRise"
        },
        {
          src: "../../../assets/images/gallery/5.jpg",
          alt: "Foto de monsterHunterRise"
        },
        {
          src: "../../../assets/images/gallery/6.jpg",
          alt: "Foto de monsterHunterRise"
        },

      ]
    }
  }

  ngOnInit(): void {
  }

}

