import { Theme } from './Theme';
import {
    DirectQuestion,
    TrueFalseQuestion,
    MultipleChoiceQuestion,
} from './Question';

export class Quiz {
    constructor(
        public id: number,
        public questionType: "multiple-choice" | "true-or-false" | "direct",
        public questions:
            | DirectQuestion[]
            | MultipleChoiceQuestion[]
            | TrueFalseQuestion[],
        public themeId: Theme['id']
    ) {
        this.id = id;
        this.questionType = questionType;
        this.questions = questions;
        this.themeId = themeId;
    }
    
}
