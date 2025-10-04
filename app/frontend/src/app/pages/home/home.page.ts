import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👈 per <swiper-container>/<swiper-slide>
})
export class HomePage {
  // Metti qui le immagini del BANNER (di sfondo) in slideshow.
  // Se per ora hai solo "spa-banner.jpg", duplicala 3 volte nella lista:
  heroImages = [
    'assets/images/spa-banner.jpg',
    'assets/images/spa-banner.jpg',
    'assets/images/spa-banner.jpg',
  ];
}
