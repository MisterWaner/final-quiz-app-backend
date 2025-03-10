import { FastifyInstance } from 'fastify';
import { MathQuestionService } from '../infrastructure/question/math/math.question.service';   
import { GeographyCapitalsQuizController } from '../infrastructure/quiz/geography/geography.quiz.capitals.controller';
import { MathQuizController } from '../infrastructure/quiz/math/math.quiz.controller';
import { Question, MultipleChoiceQuestion, TrueFalseQuestion } from '../domain/Question';

const mathQuestionService = new MathQuestionService();
const mathQuizController = new MathQuizController(mathQuestionService);
const geographyCapitalsController = new GeographyCapitalsQuizController();

export async function questionsRouter(fastify: FastifyInstance) {
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
        '/math/random-operations',
        {},
        mathQuizController.getRandomOperation
    );

    fastify.get<{ Reply: MultipleChoiceQuestion[] }>(
        '/geography/european-capitals',
        {},
        geographyCapitalsController.getEuropeanCapitals
    );
    fastify.get<{ Reply: MultipleChoiceQuestion[] }>(
        '/geography/african-capitals',
        {},
        geographyCapitalsController.getAfricanCapitals
    );
    fastify.get<{ Reply: MultipleChoiceQuestion[] }>(
        '/geography/asian-capitals',
        {},
        geographyCapitalsController.getAsianCapitals
    );
    fastify.get<{ Reply: MultipleChoiceQuestion[] }>(
        '/geography/american-capitals',
        {},
        geographyCapitalsController.getAmericanCapitals
    );
    fastify.get<{ Reply: MultipleChoiceQuestion[] }>(
        '/geography/oceanic-capitals',
        {},
        geographyCapitalsController.getOceaniaCapitals
    );
    fastify.get<{ Reply: MultipleChoiceQuestion[] }>(
        '/geography/random-capitals',
        {},
        geographyCapitalsController.getRandomCapitals
    );
}

