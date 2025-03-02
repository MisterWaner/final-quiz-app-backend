export class Question {
    constructor(
        public id: number,
        public questionText: string,
        public correctAnswer: string,
        public themeId: number
    ) {}
}

export class MultipleChoiceQuestion extends Question {
    constructor(
        public id: number,
        public questionText: string,
        public correctAnswer: string,
        public themeId: number,
        public choices: string[]
    ) {
        super(id, questionText, correctAnswer, themeId);
        this.choices = choices;
    }
}

export class TrueFalseQuestion extends Question {
    constructor(
        public id: number,
        public questionText: string,
        public correctAnswer: string,
        public themeId: number,
        public choices: boolean[]
    ) {
        super(id, questionText, correctAnswer, themeId);
        this.choices = choices;
    }
}
