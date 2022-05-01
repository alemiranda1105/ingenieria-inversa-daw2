import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [AdminDashboardComponent, HeaderComponent, FooterComponent, HomeComponent, PlayersListComponent, PlayerCardComponent, PlayerDetailsComponent, PlayerFormComponent, CreatePlayerComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
