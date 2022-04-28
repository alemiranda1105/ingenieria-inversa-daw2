import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';

@NgModule({
  declarations: [AdminDashboardComponent, HeaderComponent, FooterComponent, HomeComponent, PlayersListComponent, PlayerCardComponent, PlayerDetailsComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
