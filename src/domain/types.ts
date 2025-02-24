export interface IUser {
    id: string;
    username: string;
    password: string;
}

export interface IScore {
    id: number;
    value: number;
    date: Date;
    user: IUser;
    type: IBranch;
}

export interface ISubject {
    id: number;
    name: string;
}

export interface IBranch {
    id: number;
    name: string;
    subject: ISubject;
}

export type DirectQuestion = {
    id: number;
    question: string;
    answer: string;
    type: IBranch;
};

export type MultipleChoiceQuestion = {
    id: number;
    question: string;
    answer: string;
    type: IBranch;
    choices: string[];
};

export type TrueFalseQuestion = {
    id: number;
    question: string;
    answer: string;
    choices: boolean[];
    type: IBranch;
};

export interface IQuiz {
    id: number;
    length: number;
    questions: Question[];
    subject: ISubject;
}

export type Question =
    | DirectQuestion
    | MultipleChoiceQuestion
    | TrueFalseQuestion;
