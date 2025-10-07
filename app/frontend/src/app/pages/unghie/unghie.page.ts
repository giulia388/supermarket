import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-unghie',
  standalone: true,
  templateUrl: './unghie.page.html',
  styleUrls: ['./unghie.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class UnghiePage {
  @ViewChild('hero', { static: true }) hero!: ElementRef<HTMLDivElement>;

  private readonly desktopSpeed = 0.30;
  private readonly mobileSpeed = 0.12;

  onScroll(ev: CustomEvent) {
    const y = (ev as any).detail?.scrollTop ?? 0;
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    const speed = isDesktop ? this.desktopSpeed : this.mobileSpeed;

    const offset = Math.max(-180, Math.min(180, -(y * speed)));
    this.hero.nativeElement.style.setProperty('--bg-y', `${offset}px`);
  }
}
