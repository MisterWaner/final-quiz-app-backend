// Mixes the different options of a multiple choice question
export function shuffleOptionsArray<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
}