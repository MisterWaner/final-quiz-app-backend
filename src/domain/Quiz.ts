import {
    Question,
    TrueFalseQuestion,
    MultipleChoiceQuestion,
} from './Question';

export class Quiz {
    constructor(
        public id: number,
        public length: number,
        public questions:
            | Question[]
            | MultipleChoiceQuestion[]
            | TrueFalseQuestion[],
        public themeId: number
    ) {}
}
