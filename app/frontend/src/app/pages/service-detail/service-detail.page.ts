import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ServiceDetailPage {
  serviceId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.serviceId = this.route.snapshot.paramMap.get('serviceId');
  }
}
