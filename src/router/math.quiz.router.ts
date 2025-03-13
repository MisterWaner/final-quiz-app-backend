import { FastifyInstance } from 'fastify';
import { MathQuizController } from '../infrastructure/quiz/math/math.quiz.controller';
import { MathQuestionService } from '../infrastructure/question/math/math.question.service';
import { Quiz } from '../domain/Quiz';

const mathQuestionService = new MathQuestionService();
const mathQuizController = new MathQuizController(mathQuestionService);

export async function mathQuizRouter(fastify: FastifyInstance) {
    fastify.get<{ Reply: Quiz}>(
        '/math/addition',
        {},
        mathQuizController.getAddition
    );
    fastify.get<{ Reply: Quiz}>(
        '/math/soustraction',
        {},
        mathQuizController.getSubstraction
    );
    fastify.get<{ Reply: Quiz}>(
        '/math/multiplication',
        {},
        mathQuizController.getMultiplication
    );
    fastify.get<{ Reply: Quiz}>(
        '/math/random-operations',
        {},
        mathQuizController.getRandomOperation
    );
}