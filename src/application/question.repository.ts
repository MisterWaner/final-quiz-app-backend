import { DirectQuestion, MultipleChoiceQuestion } from "../domain/Question";

export interface MathQuestionRepository {
    generateAddition(): DirectQuestion
    generateSubstraction(): DirectQuestion
    generateMultiplication(): DirectQuestion
    generateRandomOperation(): DirectQuestion
}

export interface GeographyQuestionRepository {
    generateEuropeanCountriesQuestion(): MultipleChoiceQuestion
    generateAfricanCountriesQuestion(): MultipleChoiceQuestion
    generateAsianCountriesQuestion(): MultipleChoiceQuestion
    generateAmericanCountriesQuestion(): MultipleChoiceQuestion
    generateOceanicCountriesQuestion(): MultipleChoiceQuestion
    generateRandomCountriesQuestion(): MultipleChoiceQuestion
}