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
  @ViewChild('hero', { static: true }) hero!: ElementRef<HTMLElement>;

  private readonly desktopSpeed = 0.30;
  private readonly mobileSpeed = 0.12;

  onScroll(ev: CustomEvent) {
    const y = (ev as any).detail?.scrollTop ?? 0;
    const isDesktop = matchMedia('(min-width: 769px)').matches;
    const speed = isDesktop ? this.desktopSpeed : this.mobileSpeed;
    const offset = Math.max(-180, Math.min(180, -(y * speed)));
    this.hero.nativeElement.style.setProperty('--bg-y', `${offset}px`);
  }
}
