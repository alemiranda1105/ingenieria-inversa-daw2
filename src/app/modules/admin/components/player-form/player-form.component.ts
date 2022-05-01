import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Player } from '../../interfaces/Player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  player?: Player
  newPlayer: boolean = true
  player_id: string = "";

  playerForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router
  ) {
    this.playerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      position: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
      number: new FormControl(1, [Validators.required, Validators.max(99), Validators.min(1)]),
      nacionality: new FormControl('', [Validators.required]),
      international: new FormControl(false, [])
    })
  }

  ngOnInit(): void {
    if(this.router.url.includes('edit')) {
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => {
          this.player_id = id;
          return this.playerService.getPlayerById(id)
        } )
      )
      .subscribe(player => {
        if(!player) {
          this.router.navigate(['/']);
        }
        this.player = player;
        this.newPlayer = false;
        this.playerForm.controls['name'].setValue(player.name);
        this.playerForm.controls['position'].setValue(player.position);
        this.playerForm.controls['number'].setValue(player.number);
        this.playerForm.controls['nacionality'].setValue(player.nacionality);
        this.playerForm.controls['international'].setValue(player.international);
      });
    } else {
      this.newPlayer = true;
    }
  }

  onSubmit(): void {
    var invalid = [];
    const controls = this.playerForm.controls;
    for(let name in controls) {
      if(controls[name].invalid) {
        invalid.push(name);
      }
    }
    if(invalid.length === 0) {
      this.player = {
        ...this.player,
        ...this.playerForm.value
      }
      if(!this.newPlayer) {
        this.playerService.updatePlayer(this.player_id, this.player!)
        .subscribe(res => {
          if(res) {
            this.router.navigate(['admin/home']);
          }
        })
      } else {
        this.playerService.createPlayer(this.player!)
        .subscribe(res => {
          if(res) {
            this.router.navigate(['admin/home']);
          }
        })
      }
    }
  }

}
