export interface IUser {
    id: string;
    username: string;
    password: string;
}

export interface IScore {
    id: number;
    value: number;
    date: Date;
    user: IUser['username'];
    type: IBranch['name'];
}

export interface ISubject {
    id: number;
    name: string;
}

export interface IBranch {
    id: number;
    name: string;
    subject: ISubject['name'];
}

export type DirectQuestion = {
    id: number;
    question: string;
    answer: string;
    themeId: number;
};

export type MultipleChoiceQuestion = {
    id: number;
    question: string;
    answer: string;
    themeId: number;
    choices: string[];
};

export type TrueFalseQuestion = {
    id: number;
    question: string;
    answer: string;
    choices: boolean[];
    themeId: number;
};

export type Quiz = {
    id: number;
    length: number;
    questions: Question[];
    subjectId: number;
    themeId: number;
};

export type Question =
    | DirectQuestion
    | MultipleChoiceQuestion
    | TrueFalseQuestion;
