import { FastifyInstance } from 'fastify';
import { GeographyCapitalsQuizController } from '../infrastructure/quiz/geography/geography.quiz.capitals.controller';
import { Quiz } from '../domain/Quiz';

const geographyCapitalsController = new GeographyCapitalsQuizController();

export async function geographyQuizRouter(fastify: FastifyInstance) {
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
