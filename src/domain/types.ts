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
    type: IBranch['name'];
};

export type MultipleChoiceQuestion = {
    id: number;
    question: string;
    answer: string;
    type: IBranch['name'];
    choices: string[];
};

export type TrueFalseQuestion = {
    id: number;
    question: string;
    answer: string;
    choices: boolean[];
    type: IBranch['name'];
};

export interface IQuiz {
    id: number;
    length: number;
    questions: Question[];
    subject: ISubject['name'];
    type: IBranch['name'];
}

export type Question =
    | DirectQuestion
    | MultipleChoiceQuestion
    | TrueFalseQuestion;
