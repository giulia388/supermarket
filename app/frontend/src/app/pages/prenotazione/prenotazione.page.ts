import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.page.html',
  styleUrls: ['./prenotazione.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PrenotazionePage {
  prenotazione = {
    nome: '',
    email: '',
    servizio: '',
    data: ''
  };

  confermaPrenotazione() {
    console.log('Prenotazione inviata:', this.prenotazione);
    alert('Prenotazione effettuata con successo!');
  }
}