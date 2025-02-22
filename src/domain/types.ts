export type User = {
    id: string;
    username: string;
    password: string;
};

export type Score = {
    id: number;
    value: number;
    date: Date;
    user: User;
    type: Branch;
};

export type Subject = {
    id: number;
    name: string;
};

export type Branch = {
    id: number;
    name: string;
    subject: Subject;
};

export type DirectQuestion = {
    id: number;
    question: string;
    answer: string;
    type: Branch;
};

export type MultipleChoiceQuestion = {
    id: number;
    question: string;
    answer: string;
    type: Branch;
    choices: string[];
};

export type TrueFalseQuestion = {
    id: number;
    question: string;
    answer: string;
    choices: boolean[];
    type: Branch;
};

export type Quiz = {
    id: number;
    length: number;
    questions: Question[];
    subject: Subject;
};

export type Question =
    | DirectQuestion
    | MultipleChoiceQuestion
    | TrueFalseQuestion;
