import { Score, User } from "../domain/types";

export interface ScoreRepository {
    createScore(score: Score): Promise<void>
    getScores(): Promise<Score[]>
    getScore(id: string): Promise<Score | null>
    deleteScore(id: string): Promise<void>
    updateScore(id: string): Promise<void>

    getUserScores(id: string): Promise<Score[]>
    getUserScore(id: string): Promise<Score | null>
    getUserScoreByType(): Promise<Score | null>
    getUserScoreBySubject(): Promise<Score | null>
    getMonthlyScore(user: User): Promise<Score | null>
    getUserGlobalScore(user: User): Promise<Score | null>
}