export class Score {
    constructor(
        public id: number,
        public value: number,
        public date: Date,
        public userId: string,
        public branchId: number,
        public subjectId: number
    ) {}
}