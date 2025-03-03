import { FastifyRequest, FastifyReply } from 'fastify';
import { GeographyCapitalsQuestionService } from '../../question/geography/geography.capitals.question.service';
import { MultipleChoiceQuestion } from '../../../domain/Question';

export class GeographyCapitalsQuizController {
    constructor(
        private readonly geographyCapitalsQuestionService: GeographyCapitalsQuestionService
    ) {}

    getEuropeanCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            this.geographyCapitalsQuestionService
                .generateEuropeanCountriesQuestion
        );

        reply.status(200).send(questions);
    }

    getAfricanCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            this.geographyCapitalsQuestionService
                .generateAfricanCountriesQuestion
        );

        reply.status(200).send(questions);
    }

    getAsianCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            this.geographyCapitalsQuestionService.generateAsianCountriesQuestion
        );

        reply.status(200).send(questions);
    }

    getAmericanCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            this.geographyCapitalsQuestionService
                .generateAmericanCountriesQuestion
        );

        reply.status(200).send(questions);
    }

    getOceaniaCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            this.geographyCapitalsQuestionService
                .generateOceanicCountriesQuestion
        );

        reply.status(200).send(questions);
    }

    getRandomCapitals(request: FastifyRequest, reply: FastifyReply) {
        const length: number = 10;
        const questions: MultipleChoiceQuestion[] = Array.from(
            { length },
            this.geographyCapitalsQuestionService
                .generateRandomCountriesQuestion
        );

        reply.status(200).send(questions);
    }
}
