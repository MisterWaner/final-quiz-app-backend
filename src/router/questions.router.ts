import { FastifyInstance } from 'fastify';
import { MathQuestionService } from '../infrastructure/question/math/math.question.service';   
import { GeographyCapitalsQuizController } from '../infrastructure/quiz/geography/geography.quiz.capitals.controller';
import { MathQuizController } from '../infrastructure/quiz/math/math.quiz.controller';
import { Quiz } from '../domain/Quiz';

const mathQuestionService = new MathQuestionService();
const mathQuizController = new MathQuizController(mathQuestionService);
const geographyCapitalsController = new GeographyCapitalsQuizController();

export async function questionsRouter(fastify: FastifyInstance) {
    fastify.get<{ Reply: Quiz }>(
        '/math/addition',
        {},
        mathQuizController.getAddition
    );
    fastify.get<{ Reply: Quiz }>(
        '/math/soustraction',
        {},
        mathQuizController.getSubstraction
    );
    fastify.get<{ Reply: Quiz }>(
        '/math/multiplication',
        {},
        mathQuizController.getMultiplication
    );
    fastify.get<{ Reply: Quiz }>(
        '/math/random-operations',
        {},
        mathQuizController.getRandomOperation
    );

    fastify.get<{ Reply: Quiz }>(
        '/geography/european-capitals',
        {},
        geographyCapitalsController.getEuropeanCapitals
    );
    fastify.get<{ Reply: Quiz }>(
        '/geography/african-capitals',
        {},
        geographyCapitalsController.getAfricanCapitals
    );
    fastify.get<{ Reply: Quiz }>(
        '/geography/asian-capitals',
        {},
        geographyCapitalsController.getAsianCapitals
    );
    fastify.get<{ Reply: Quiz }>(
        '/geography/american-capitals',
        {},
        geographyCapitalsController.getAmericanCapitals
    );
    fastify.get<{ Reply: Quiz }>(
        '/geography/oceanic-capitals',
        {},
        geographyCapitalsController.getOceaniaCapitals
    );
    fastify.get<{ Reply: Quiz }>(
        '/geography/random-capitals',
        {},
        geographyCapitalsController.getRandomCapitals
    );
}

