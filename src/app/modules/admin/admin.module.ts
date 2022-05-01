import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { CreatePlayerComponent } from './pages/create-player/create-player.component';
import { UpdatePlayerComponent } from './pages/update-player/update-player.component';

@NgModule({
  declarations: [AdminDashboardComponent, HeaderComponent, FooterComponent, HomeComponent, PlayersListComponent, PlayerCardComponent, PlayerDetailsComponent, PlayerFormComponent, CreatePlayerComponent, UpdatePlayerComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, NgbCollapseModule],
})
export class AdminModule {}
