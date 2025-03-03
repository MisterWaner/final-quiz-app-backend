import { Question, MultipleChoiceQuestion } from "../domain/Question";

export interface MathQuestionRepository {
    generateAddition(): Question
    generateSubstraction(): Question
    generateMultiplication(): Question
    generateRandomOperation(): Question
}

export interface GeographyQuestionRepository {
    generateEuropeanCountriesQuestion(): MultipleChoiceQuestion
    generateAfricanCountriesQuestion(): MultipleChoiceQuestion
    generateAsianCountriesQuestion(): MultipleChoiceQuestion
    generateAmericanCountriesQuestion(): MultipleChoiceQuestion
    generateOceanicCountriesQuestion(): MultipleChoiceQuestion
    generateRandomCountriesQuestion(): MultipleChoiceQuestion
}