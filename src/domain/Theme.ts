export class Theme {
    constructor(
        public id: number,
        public name: string,
        public themePath: string,
        public subjectId: number
    ) {
        this.themePath = name.toLowerCase().replace(/\s/g, '-');
    }
}
