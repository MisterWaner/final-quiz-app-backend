import { FastifyInstance } from 'fastify';
import { MathQuizController } from '../infrastructure/quiz/math/math.quiz.controller';
import { MathQuestionService } from '../infrastructure/question/math/math.question.service';
import { Question } from '../domain/Question';

const mathQuestionService = new MathQuestionService();
const mathQuizController = new MathQuizController(mathQuestionService);

export async function mathQuizRouter(fastify: FastifyInstance) {
    fastify.get<{ Reply: Question[] }>(
        '/math/addition',
        {},
        mathQuizController.getAddition
    );
    fastify.get<{ Reply: Question[] }>(
        '/math/soustraction',
        {},
        mathQuizController.getSubstraction
    );
    fastify.get<{ Reply: Question[] }>(
        '/math/multiplication',
        {},
        mathQuizController.getMultiplication
    );
    fastify.get<{ Reply: Question[] }>(
        '/math/random-operation',
        {},
        mathQuizController.getRandomOperation
    );
}