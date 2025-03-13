export type QuestionType = 'multiple-choice' | 'true-or-false' | 'direct';

export interface QuestionBase {
    id: number;
    questionText: string;
}

export class DirectQuestion implements QuestionBase {
    constructor(
        public id: number,
        public questionText: string,
        public correctAnswer: string
    ) {
        this.questionText = questionText;
        this.correctAnswer = correctAnswer;
    }
}

export class MultipleChoiceQuestion implements QuestionBase {
    constructor(
        public id: number,
        public questionText: string,
        public correctAnswer: string,
        public choices: string[]
    ) {
        this.id = id;
        this.questionText = questionText;
        this.correctAnswer = correctAnswer;
        this.choices = choices;
    }
}

export class TrueFalseQuestion implements QuestionBase {
    constructor(
        public id: number,
        public questionText: string,
        public correctAnswer: string | boolean,
        public choices: boolean[]
    ) {
        this.id = id;
        this.questionText = questionText;
        this.correctAnswer = correctAnswer;
        this.choices = choices;
    }
}
