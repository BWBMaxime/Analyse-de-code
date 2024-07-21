import { TennisGame } from '../src/TennisGame';

export class TennisGame5 implements TennisGame {
  // Ordre des déclarations de variables non cohérent.
  private player2Name : string;
  private player1Name : string;
  private player1Score: number;
  private player2Score: number;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.player1Score = 0;
    this.player2Score = 0;
  }

  getScore(): string {
    // Pas explicite comme nom de variable
    let p1 = this.player1Score;
    let p2 = this.player2Score;

    // Logique de boucle peu claire. Pourrait nécessiter des commentaires pour explication.
    while (p1 > 4 || p2 > 4) {
      p1--;
      p2--;
    }

    // Utilisation d'un tableau de tableaux pour stocker les scores. Peut être difficile à comprendre et à maintenir.
    // Peut etre remplacer par une classe ou tableau 
    const lookup = {
      0: {0: "Love-All",
        1: "Love-Fifteen",
        2: "Love-Thirty",
        3: "Love-Forty",
        4: "Win for player2"},

      1: {0: "Fifteen-Love",
        1: "Fifteen-All",
        2: "Fifteen-Thirty",
        3: "Fifteen-Forty",
        4: "Win for player2"},

      2: {0: "Thirty-Love",
        1: "Thirty-Fifteen",
        2: "Thirty-All",
        3: "Thirty-Forty",
        4: "Win for player2"},

      3: {0: "Forty-Love",
        1: "Forty-Fifteen",
        2: "Forty-Thirty",
        3: "Deuce",
        4: "Advantage player2"},

      4: {0: "Win for player1",
        1: "Win for player1",
        2: "Win for player1",
        3: "Advantage player1",
        4: "Deuce"}
    }
    // Utilisation de ts-ignore pour masquer les erreurs potentielles de type. Risque de comportement imprévu.
    // @ts-ignore
    return lookup[p1][p2] // peut être difficile à comprendre sans explication.

  }

  wonPoint(playerName: string): void {
    // Utilisation de chaînes littérales pour vérifier le nom du joueur. Risque de faute de frappe et de bug.
    if (playerName === 'player1')
      this.player1Score += 1;
    else
      this.player2Score += 1;
  }
}
