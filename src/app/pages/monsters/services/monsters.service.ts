import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonstersService {
  public monstersURL: string =
    'https://my-json-server.typicode.com/antoniMS/mhrapi/monsters';

  constructor(private httpClient: HttpClient) {}

  public getAllMonsters() {
    return this.httpClient.get(this.monstersURL);
  }

  public getMonster(idMonster: any) {
    return this.httpClient.get(`${this.monstersURL}/${idMonster}`);
  }
}
