import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ceretta',
  standalone: true,
  templateUrl: './ceretta.page.html',
  styleUrls: ['./ceretta.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class CerettaPage {
  @ViewChild('hero', { static: true }) hero!: ElementRef<HTMLDivElement>;

  // Velocità differenziata per parallax
  private readonly desktopSpeed = 0.3;
  private readonly mobileSpeed = 0.12;

  onScroll(ev: CustomEvent) {
    const y = (ev as any).detail?.scrollTop ?? 0;
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    const speed = isDesktop ? this.desktopSpeed : this.mobileSpeed;

    // Calcolo offset (limitato per evitare eccesso)
    const offset = Math.max(-180, Math.min(180, -(y * speed)));
    this.hero.nativeElement.style.setProperty('--bg-y', `${offset}px`);
  }
}
