import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.playWelcomeMessage();
  }

  playWelcomeMessage(): void {
    if ('speechSynthesis' in window) {
      const message = new SpeechSynthesisUtterance(
        'Le père Gerard'
      );

      message.lang = 'fr-FR';
      message.rate = 1.2;
      message.pitch = 2;
      window.speechSynthesis.cancel;
    } else {
      console.log('Synthese vocal nons supportée par ce navigateur');
    }
  }
}
