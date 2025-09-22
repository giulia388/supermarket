import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';   // 👈 per <ion-button>, <ion-toolbar>, ecc.
import { CommonModule } from '@angular/common'; // 👈 per *ngIf, *ngFor ecc.
import { RouterModule } from '@angular/router'; // 👈 se usi routerLink

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,   // componenti Ionic
    CommonModule,  // direttive Angular standard
    RouterModule   // navigazione tra pagine
  ]
})
export class HomePage {}
