import { FastifyInstance } from 'fastify';
import { SubjectController } from '../infrastructure/subject/subject.controller';
import { SubjectService } from '../infrastructure/subject/subject.service';
import { ISubject } from '../domain/types';

const subjectService = new SubjectService();
const subjectController = new SubjectController(subjectService);

export async function subjectRouter(fastify: FastifyInstance) {
    fastify.post<{ Body: { name: string } }>(
        '/subjects',
        {},
        subjectController.createSubject
    );
    fastify.get<{ Params: { id: number }; Reply: ISubject }>(
        '/subjects/:id',
        {},
        subjectController.getSubject
    );
    fastify.get<{ Reply: ISubject[] }>(
        '/subjects',
        {},
        subjectController.getSubjects
    );
    fastify.put<{ Params: { id: number }; Body: { name: string } }>(
        '/subjects/:id',
        {},
        subjectController.updateSubject
    );
    fastify.delete<{ Params: { id: number } }>(
        '/subjects/:id',
        {},
        subjectController.deleteSubject
    );
}
