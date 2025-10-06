import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-spa',
  standalone: true,
  templateUrl: './spa.page.html',
  styleUrls: ['./spa.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class SpaPage {
  @ViewChild('hero', { static: true }) hero!: ElementRef<HTMLDivElement>;

  // velocità dell'effetto (più alto = più movimento)
  private readonly speed = 0.30;

  // sposto solo lo sfondo (la scritta resta ferma)
  onScroll(ev: CustomEvent) {
    // solo desktop
    if (!window.matchMedia('(min-width: 769px)').matches) return;

    const y = (ev as any).detail?.scrollTop ?? 0;
    // calcolo offset (limito per non far “saltare” l’immagine)
    const offset = Math.max(-180, Math.min(180, -(y * this.speed)));

    this.hero.nativeElement.style.setProperty('--bg-y', `${offset}px`);
  }
}
