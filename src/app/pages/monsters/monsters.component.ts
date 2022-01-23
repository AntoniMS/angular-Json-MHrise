import { MonstersService } from './services/monsters.service';
import { MonsterInterface } from './models/Monster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
  public monsters: MonsterInterface[] = [];
  constructor(private monstersService: MonstersService) { }

  ngOnInit(): void {
    this.monstersService.getAllMonsters().subscribe((data: any) => {
      const apiResults: MonsterInterface[] = data;

      const formattedMonsters = apiResults.map(({ id, name, description, image, element, weak, smash }) => ({
        id, name, description, image, element, weak, smash}));
 
      this.monsters = formattedMonsters
    })
  }

}
