import { Subject } from '../subject/Subject';
import { IBranch } from '../types';

export class Branch implements IBranch {
    constructor(public id: number, public name: string, public subject: Subject['name']) {
        this.id = id;
        this.name = name;
        this.subject = subject;
    }

    static create(id: number, name: string, subject: string): Branch {
        return new Branch(id, name, subject);
    }
}