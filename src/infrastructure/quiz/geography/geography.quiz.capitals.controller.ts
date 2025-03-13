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
import { generateNumberId } from '../../../lib/id-generator';
import { Quiz } from '../../../domain/Quiz';

export class GeographyCapitalsQuizController {
    constructor() {}

    getEuropeanCapitals(request: FastifyRequest, reply: FastifyReply) {
        const id: number = generateNumberId();
        const questionType = "multiple-choice";
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateEuropeanCountriesQuestion
        );

        const quiz = new Quiz(id, questionType, questions, 5);

        reply.status(200).send(quiz);
    }

    getAfricanCapitals(request: FastifyRequest, reply: FastifyReply) {
        const id: number = generateNumberId();
        const questionType = "multiple-choice";
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateAfricanCountriesQuestion
        );

        const quiz = new Quiz(id, questionType, questions, 8);

        reply.status(200).send(quiz);
    }

    getAsianCapitals(request: FastifyRequest, reply: FastifyReply) {
        const id: number = generateNumberId();
        const questionType = "multiple-choice";
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateAsianCountriesQuestion
        );

        const quiz = new Quiz(id, questionType, questions, 7);

        reply.status(200).send(quiz);
    }

    getAmericanCapitals(request: FastifyRequest, reply: FastifyReply) {
        const id: number = generateNumberId();
        const questionType = "multiple-choice";
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateAmericanCountriesQuestion
        );

        const quiz = new Quiz(id, questionType, questions, 6);

        reply.status(200).send(quiz);
    }

    getOceaniaCapitals(request: FastifyRequest, reply: FastifyReply) {
        const id: number = generateNumberId();
        const questionType = "multiple-choice";
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateOceanicCountriesQuestion
        );

        const quiz = new Quiz(id, questionType, questions, 9);

        reply.status(200).send(quiz);
    }

    getRandomCapitals(request: FastifyRequest, reply: FastifyReply) {
        const id: number = generateNumberId();
        const questionType = "multiple-choice";
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            generateRandomCountriesQuestion
        );

        const quiz = new Quiz(id, questionType, questions, 10);

        reply.status(200).send(quiz);
    }
}
