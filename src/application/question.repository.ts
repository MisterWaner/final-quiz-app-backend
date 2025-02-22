import { Question } from "../domain/types";

export interface QuestionRepository {
    generateQuestion(): Promise<Question>
}