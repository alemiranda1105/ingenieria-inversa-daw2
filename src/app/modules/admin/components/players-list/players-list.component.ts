import { Component, OnInit } from '@angular/core';
import { Player } from '../../interfaces/Player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getAllPlayers()
    .subscribe(players => this.players = players);
  }

  deletePlayer(id: string):void {
    this.playerService.deletePlayer(id)
    .subscribe(res => {
      if(res) {
        this.getPlayers();
      }
    })
  }

}
