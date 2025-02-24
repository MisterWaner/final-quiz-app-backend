import { ISubject } from '../types';

export class Subject implements ISubject {
    constructor(public id: number, public name: string) {
        this.id = id;
        this.name = name;
    }

    static create(id: number, name: string): Subject {
        return new Subject(id, name);
    }
}
