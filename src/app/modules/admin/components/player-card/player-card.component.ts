import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../../interfaces/Player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() player?: Player;
  @Output() deletePlayerEvent = new EventEmitter<string>();

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
  }

  deletePlayer(): void {
    if(this.player) {
      this.deletePlayerEvent.emit(this.player.id);
    }
  }

}
