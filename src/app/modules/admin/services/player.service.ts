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
      international: true
    },
    {
      id: "2",
      name: "El vaquilla",
      position: "DFC",
      number: 21,
      nacionality: "españa",
      international: true,
    },
  ]

  constructor() { }

  getAllPlayers(): Observable<Player[]> {
    const player = of(this.playersList);
    return player;
  }

  getPlayerById(player_id: string): Observable<Player> {
    let player = this.playersList.filter(p => p.id === player_id)[0];
    return of(player);
  }

  createPlayer(player: Player): Observable<Player> {
    this.playersList.push(player);
    return of(player);
  }

}
