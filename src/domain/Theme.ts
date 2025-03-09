export class Theme {
    constructor(
        public id: number,
        public name: string,
        public path: string,
        public subjectId: number
    ) {
        this.path = name.toLowerCase().replace(/\s/g, '-');
    }
}
