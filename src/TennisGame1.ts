import { TennisGame } from './TennisGame';

// Nom de classe trop identique. Doivent être plus distincts pour éviter la confusion.
export class TennisGame1 implements TennisGame {

  private m_score1: number = 0; // Utilisation de noms de variables peu explicites. Préférer des noms plus descriptifs.
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  updatePoint(playerName: string): void {
    // Utilisation de chaînes littérales pour vérifier le nom du joueur. Risque de faute de frappe et de bug.
    if (playerName === 'player1')
      this.m_score1 += 1; 
    else
      this.m_score2 += 1;
  }
  // Méthode trop longue. Doit être factoriser et devrai respecter le Single Responsibility
  getScore(): string {
    let score: string = '';
    let tempScore: number = 0;
    // Factorisation néscéssaire 
    if (this.m_score1 === this.m_score2) { 
      switch (this.m_score1) {
        case 0:
          score = 'Love-All';
          break;
        case 1:
          score = 'Fifteen-All';
          break;
        case 2:
          score = 'Thirty-All';
          break;
        default:
          score = 'Deuce';
          break;
      }
    }
    else if (this.m_score1 >= 4 || this.m_score2 >= 4) { 
      const minusResult: number = this.m_score1 - this.m_score2;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';
    }
    else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.m_score1; // Répétition de code. Pourrait être simplifié pour une meilleure lisibilité.
        else { score += '-'; tempScore = this.m_score2; }
        switch (tempScore) { // Utilisation de switch avec des valeurs arbitraires. Risque de confusions.
          case 0:
            score += 'Love';
            break;
          case 1:
            score += 'Fifteen';
            break;
          case 2:
            score += 'Thirty';
            break;
          case 3:
            score += 'Forty';
            break;
        }
      }
    }
    return score;
  }
}
