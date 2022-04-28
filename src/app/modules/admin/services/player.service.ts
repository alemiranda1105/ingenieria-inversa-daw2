import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../interfaces/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playersList: Player[] = [
    {
      id: "1",
      name: "El bicho",
      position: "DC",
      number: 7,
      nacionality: "portugal",
      international: true,
      stats: {
        pace: 99,
        speed: 99,
        pass: 99,
        defense: 99,
        physic: 99,
        shoot: 99
      },
    },
    {
      id: "1",
      name: "El vaquilla",
      position: "DFC",
      number: 21,
      nacionality: "españa",
      international: true,
      stats: {
        pace: 1,
        speed: 1,
        pass: 1,
        defense: 99,
        physic: 1,
        shoot: 1
      },
    },
  ]

  constructor() { }

  getAllPlayers(): Observable<Player[]> {
    const player = of(this.playersList);
    return player;
  }

}
