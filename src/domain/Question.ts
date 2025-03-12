import { generateNumberId } from '../lib/id-generator';
import { Theme } from './Theme';

export type QuestionType = 'multiple-choice' | 'true-or-false' | 'direct';

export interface QuestionBase {
    id: number;
    questionType: QuestionType;
    questionText: string;
    themeId: Theme['id'];
}

export class DirectQuestion implements QuestionBase {
    constructor(
        public id: number,
        public questionType: 'direct',
        public questionText: string,
        public correctAnswer: string,
        public themeId: Theme['id']
    ) {
        this.questionType = questionType;
        this.questionText = questionText;
        this.correctAnswer = correctAnswer;
        this.themeId = themeId;
    }
}

export class MultipleChoiceQuestion implements QuestionBase {
    constructor(
        public id: number,
        public questionType: 'multiple-choice',
        public questionText: string,
        public correctAnswer: string,
        public themeId: Theme['id'],
        public choices: string[]
    ) {}
}

export class TrueFalseQuestion implements QuestionBase {
    constructor(
        public id: number,
        public questionType: 'true-or-false',
        public questionText: string,
        public correctAnswer: string | boolean,
        public themeId: Theme['id'],
        public choices: boolean[]
    ) {}
}
