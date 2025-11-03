import { Participant } from './Participant';

export class Player extends Participant {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    // Add player-specific logic here (e.g., betting, UI interaction)
}