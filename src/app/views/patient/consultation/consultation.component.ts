import { Component } from '@angular/core';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css',
})
export class ConsultationComponent {
  title = 'Consultation';
  annonces = 'Bienvenue chez Clinivia , nous sommes a votre service';

  constructor() {}
  
  ngOnInit(): void {
    this.playWelcomeMessage();
  }

  playWelcomeMessage(): void {
    if ('speechSynthesis' in window) {
      const message = new SpeechSynthesisUtterance(
        '(...) Bienvenue dans option de la consultation. Veuillez nous dire de quoi souffrez vous ?'
      );
      message.lang = 'fr-FR';
      message.rate = 1.2;
      message.pitch = 4;
      setTimeout(() => {
        window.speechSynthesis.speak(message);
      }, 2000)
    } else {
      console.log('Synthese vocal nons supportée par ce navigateur');
    }
  }
}
