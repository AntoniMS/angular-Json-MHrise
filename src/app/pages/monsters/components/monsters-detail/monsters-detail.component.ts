import { MonsterInterface } from './../../models/Monster';
import { MonstersService } from './../../services/monsters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monsters-detail',
  templateUrl: './monsters-detail.component.html',
  styleUrls: ['./monsters-detail.component.scss'],
})
export class MonstersDetailComponent implements OnInit {
  public monster!: MonsterInterface;
  constructor(
    private activatedRoute: ActivatedRoute,
    private monstersService: MonstersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idMonster = params.get('idMonster');

      this.monstersService.getMonster(idMonster).subscribe((data: any) => {
        const apiResult: MonsterInterface = data;
        this.monster = apiResult;
      });
    });
  }
}
