import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewPlayer, Player } from '../interfaces/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playersList: Player[] = [
    {
      id: "1",
      name: "player 1",
      position: "DC",
      number: 7,
      nacionality: "portugal",
      international: true
    },
    {
      id: "2",
      name: "player 2",
      position: "DFC",
      number: 21,
      nacionality: "españa",
      international: true,
    },
    {
      id: "3",
      name: "player 3",
      position: "MC",
      number: 12,
      nacionality: "españa",
      international: false,
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

  createPlayer(player: NewPlayer): Observable<Player> {
    let newPlayer = {
      id: (this.playersList.length + 1).toString(),
      ...player
    }
    this.playersList.push(newPlayer);
    return of(newPlayer);
  }

  updatePlayer(player_id: string, player: Player): Observable<Player> {
    this.playersList = this.playersList.filter(p => p.id !== player_id);
    this.playersList.push(player);
    return of(player);
  }

  deletePlayer(id: string): Observable<boolean> {
    this.playersList = this.playersList.filter(p => p.id !== id);
    return of(true);
  }

}
