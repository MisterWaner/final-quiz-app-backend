import { FastifyRequest, FastifyReply } from 'fastify';
import { MathQuestionService } from '../../question/math/math.question.service';
import { Question } from '../../../domain/Question';

export class MathQuizController {
    constructor(private readonly mathQuestionService: MathQuestionService) {}

    getAddition = (request: FastifyRequest, reply: FastifyReply) => {
        const length = 10;
        const questions: Question[] = Array.from(
            { length },
            this.mathQuestionService.generateAddition
        );

        reply.status(200).send(questions);
    };

    getSubstraction = (request: FastifyRequest, reply: FastifyReply) => {
        const length = 10;
        const questions: Question[] = Array.from(
            { length },
            this.mathQuestionService.generateSubstraction
        );

        reply.status(200).send(questions);
    };

    getMultiplication = (request: FastifyRequest, reply: FastifyReply) => {
        const length = 10;
        const questions: Question[] = Array.from(
            { length },
            this.mathQuestionService.generateMultiplication
        );

        reply.status(200).send(questions);
    };

    getRandomOperation = (request: FastifyRequest, reply: FastifyReply) => {
        const length = 10;
        const questions: Question[] = Array.from({ length }, () =>
            this.mathQuestionService.generateRandomOperation()
        );

        reply.status(200).send(questions);
    };
}
