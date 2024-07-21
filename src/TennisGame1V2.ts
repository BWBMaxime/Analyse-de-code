import { TennisGame } from './TennisGame';

export class TennisGame1V2 implements TennisGame {
  private firstPlayerScore: number = 0;
  private secondPlayerScore: number = 0;
  private firstPlayerName: string;
  private secondPlayerName: string;
  private firstPlayerSpecials: string[] = [];
  private secondPlayerSpecials: string[] = [];

  constructor(firstPlayerName: string, secondPlayerName: string) {
    this.firstPlayerName = firstPlayerName;
    this.secondPlayerName = secondPlayerName;
  }

  updatePoint(playerName: string): void {
    if (playerName === this.firstPlayerName) {
      this.firstPlayerScore += 1;
    } else if (playerName === this.secondPlayerName) {
      this.secondPlayerScore += 1;
    } else {
      throw new Error('Unknown player');
    }
  }

  performSpecial(playerName: string, special: string): void {
    if (playerName === this.firstPlayerName) {
      this.firstPlayerSpecials.push(special);
      this.updateScoreWithSpecial(this.firstPlayerScore, this.secondPlayerScore, special);
    } else if (playerName === this.secondPlayerName) {
      this.secondPlayerSpecials.push(special);
      this.updateScoreWithSpecial(this.secondPlayerScore, this.firstPlayerScore, special);
    } else {
      throw new Error('Unknown player');
    }
  }

  private updateScoreWithSpecial(playerScore: number, opponentScore: number, special: string): void {
    switch (special) {
      case 'Ace':
        playerScore += 1;
        break;
      case 'Smash':
        playerScore += 1;
        break;
      case 'Drop Shot':
        playerScore += 1;
        break;
      default:
        throw new Error('Unknown special move');
    }
  }

  getScore(): string {
    if (this.firstPlayerScore === this.secondPlayerScore) {
      return this.getTiedScore();
    } else if (this.firstPlayerScore >= 4 || this.secondPlayerScore >= 4) {
      return this.getEndgameScore();
    } else {
      return this.getRegularScore();
    }
  }

  private getTiedScore(): string {
    const tiedScores = ['Love-All', 'Fifteen-All', 'Thirty-All', 'Deuce'];
    return tiedScores[this.firstPlayerScore] || 'Deuce';
  }

  private getEndgameScore(): string {
    const scoreDifference = this.firstPlayerScore - this.secondPlayerScore;
    if (scoreDifference === 1) return 'Advantage ' + this.firstPlayerName;
    else if (scoreDifference === -1) return 'Advantage ' + this.secondPlayerName;
    else if (scoreDifference >= 2) return 'Win for ' + this.firstPlayerName;
    else return 'Win for ' + this.secondPlayerName;
  }

  private getRegularScore(): string {
    const scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    return `${scores[this.firstPlayerScore]}-${scores[this.secondPlayerScore]}`;
  }

  getSpecials(playerName: string): string {
    if (playerName === this.firstPlayerName) {
      return `${this.firstPlayerName} Specials: ${this.firstPlayerSpecials.join(', ')}`;
    } else if (playerName === this.secondPlayerName) {
      return `${this.secondPlayerName} Specials: ${this.secondPlayerSpecials.join(', ')}`;
    } else {
      throw new Error('Unknown player');
    }
  }

  /**
   * 
      const game = new TennisGame1V2('Player 1', 'Player 2');
      game.updatePoint('Player 1');
      game.performSpecial('Player 1', 'Ace');
      game.performSpecial('Player 2', 'Smash');
      console.log(game.getScore()); // Affiche le score actuel du jeu
      console.log(game.getSpecials('Player 1')); // Affiche les coups spéciaux effectués par Player 1
      console.log(game.getSpecials('Player 2')); // Affiche les coups spéciaux effectués par Player 2
   */
}

