import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { SubjectController } from '../infrastructure/subject/subject.controller';
import { SubjectService } from '../infrastructure/subject/subject';

const subjectService = new SubjectService();
const subjectController = new SubjectController(subjectService);

export async function subjectRouter(fastify: FastifyInstance) {
    fastify.post<{ Body: { name: string } }>('/subjects', {}, subjectController.createSubject);
}