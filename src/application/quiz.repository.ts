import { Quiz } from "../domain/types";

export interface QuizRepository {
    createQuiz(): Promise<Quiz>
}