import { Component } from '@angular/core';

interface Card {
  value: string;
  flipped: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: Card[] = [
    { value: 'assets/escudo1.jpg', flipped: false },
    { value: 'assets/escudo2.png', flipped: false },
    { value: 'assets/escudo3.jpeg', flipped: false },
    { value: 'assets/escudo1.jpg', flipped: false },
    { value: 'assets/escudo2.png', flipped: false },
    { value: 'assets/escudo3.jpeg', flipped: false }
  ];

  flippedCards: Card[] = [];
  attempts: number = 0;
  gameOver: boolean = false;
  gameStarted: boolean = false;

  flipCard(card: Card) {
    if (card.flipped || this.flippedCards.length === 2) {
      return;
    }

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.attempts++;

      if (this.flippedCards[0].value === this.flippedCards[1].value) {
        this.flippedCards = [];

        if (this.cards.every(card => card.flipped)) {
          this.gameOver = true;
        }
      } else {
        setTimeout(() => {
          this.flippedCards.forEach(card => card.flipped = false);
          this.flippedCards = [];
        }, 1000);
      }
    }
  }

  startGame() {
    this.gameStarted = true;
  }
}
