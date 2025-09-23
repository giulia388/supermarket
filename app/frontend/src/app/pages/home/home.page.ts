import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,   // per ion-card, ion-button ecc.
    CommonModule,  // per *ngIf, *ngFor ecc.
    RouterModule   // per routerLink
  ]
})
export class HomePage {}
