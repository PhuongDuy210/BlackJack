import { Participant } from './Participant';

export class Dealer extends Participant {
    shouldHit(): boolean {
        return this.getHandValue() < 17;
    }
}