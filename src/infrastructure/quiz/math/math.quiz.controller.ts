import { FastifyRequest, FastifyReply } from 'fastify';
import { MathQuestionService } from '../../question/math/math.question.service';
import { DirectQuestion } from '../../../domain/Question';
import { generateNumberId } from '../../../lib/id-generator';
import { Quiz } from '../../../domain/Quiz';

export class MathQuizController {
    constructor(private readonly mathQuestionService: MathQuestionService) {}

    getAddition = (request: FastifyRequest, reply: FastifyReply) => {
        const id = generateNumberId();
        const questionType = "direct";
        const length = 10;
        const questions: DirectQuestion[] = Array.from(
            { length },
            this.mathQuestionService.generateAddition
        );

        const quiz = new Quiz(id, questionType, questions, 1);

        reply.status(200).send(quiz);
    };

    getSubstraction = (request: FastifyRequest, reply: FastifyReply) => {
        const id = generateNumberId();
        const questionType = "direct";
        const length = 10;
        const questions: DirectQuestion[] = Array.from(
            { length },
            this.mathQuestionService.generateSubstraction
        );

        const quiz = new Quiz(id, questionType, questions, 2);

        reply.status(200).send(quiz);
    };

    getMultiplication = (request: FastifyRequest, reply: FastifyReply) => {
        const id = generateNumberId();
        const questionType = "direct";
        const length = 10;
        const questions: DirectQuestion[] = Array.from(
            { length },
            this.mathQuestionService.generateMultiplication
        );

        const quiz = new Quiz(id, questionType, questions, 3);

        reply.status(200).send(quiz);
    };

    getRandomOperation = (request: FastifyRequest, reply: FastifyReply) => {
        const id = generateNumberId();
        const questionType = "direct";
        const length = 10;
        const questions: DirectQuestion[] = Array.from({ length }, () =>
            this.mathQuestionService.generateRandomOperation()
        );

        const quiz = new Quiz(id, questionType, questions, 4);

        reply.status(200).send(quiz);
    };
}
