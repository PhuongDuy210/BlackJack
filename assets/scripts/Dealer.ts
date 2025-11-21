import { Participant } from './Participant';

export class Dealer extends Participant {
    public shouldHit(): boolean {
        return this.getHandValue() < 17;
    }

    public hasAceFaceUp(): boolean {
        // return false;
        return this.hand[1].rank === 'A';
    }
}