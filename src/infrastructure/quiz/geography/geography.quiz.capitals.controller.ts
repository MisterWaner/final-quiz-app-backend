import { FastifyRequest, FastifyReply } from 'fastify';
import {
    generateAfricanCountriesQuestion,
    generateAmericanCountriesQuestion,
    generateAsianCountriesQuestion,
    generateEuropeanCountriesQuestion,
    generateOceanicCountriesQuestion,
    generateRandomCountriesQuestion,
} from '../../question/geography/geography.capitals.question.service';

import { MultipleChoiceQuestion } from '../../../domain/Question';

export class GeographyCapitalsQuizController {
    constructor() {}

    getEuropeanCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateEuropeanCountriesQuestion
        );

        reply.status(200).send(questions);
    }

    getAfricanCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateAfricanCountriesQuestion
        );

        reply.status(200).send(questions);
    }

    getAsianCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateAsianCountriesQuestion
        );

        reply.status(200).send(questions);
    }

    getAmericanCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateAmericanCountriesQuestion
        );

        reply.status(200).send(questions);
    }

    getOceaniaCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateOceanicCountriesQuestion
        );

        reply.status(200).send(questions);
    }

    getRandomCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateRandomCountriesQuestion
        );

        reply.status(200).send(questions);
    }
}
