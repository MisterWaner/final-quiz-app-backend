import { FastifyInstance } from 'fastify';
import { GeographyCapitalsQuizController } from '../infrastructure/quiz/geography/geography.quiz.capitals.controller';
import { GeographyCapitalsQuestionService } from '../infrastructure/question/geography/geography.capitals.question.service';
import { MultipleChoiceQuestion } from '../domain/Question';

const geographyCapitalsService = new GeographyCapitalsQuestionService();
const geographyCapitalsController = new GeographyCapitalsQuizController(
    geographyCapitalsService
);

export async function geographyQuizRouter(fastify: FastifyInstance) {
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
