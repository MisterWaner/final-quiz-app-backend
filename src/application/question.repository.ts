import { Question } from "../domain/Question";

export interface MathQuestionRepository {
    generateAddition(): Question
    generateSubstraction(): Question
    generateMultiplication(): Question
    generateRandomOperation(): Question
}