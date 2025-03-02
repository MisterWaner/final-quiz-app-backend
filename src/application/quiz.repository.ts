import { Quiz } from "../domain/Quiz";

export interface QuizRepository {
    createQuiz(): Promise<Quiz>
}