import { FastifyRequest, FastifyReply } from 'fastify';
import { SubjectService } from './subject';
import { Subject } from '../../domain/types';

export class SubjectController {
    constructor(private subjectService: SubjectService) {}

    async createSubject(request: FastifyRequest, reply: FastifyReply) {
        try {
            const subject: Subject = request.body as Subject;
            await this.subjectService.createSubject(subject);
            reply
                .status(201)
                .send(`Subject ${subject.name} created successfully`);
        } catch (error) {
            reply.status(500).send(error);
        }
    }

    async getSubjects(request: FastifyRequest, reply: FastifyReply) {
        const subjects = await this.subjectService.getSubjects();
        if (!subjects) {
            reply.status(404).send('Subjects not found');
            return;
        }
        reply.status(200).send(subjects);
    }

    async getSubject(
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) {
        const id = request.params.id;
        const subject = await this.subjectService.getSubject(id);
        reply.status(200).send(subject);
    }

    async updateSubject(
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) {
        const id = request.params.id;
        const subject = await this.subjectService.getSubject(id);
        if (!subject) {
            reply.status(404).send('Subject not found');
            return;
        }
        await this.subjectService.updateSubject(id);
        reply.status(200).send('Subject updated successfully');
    }

    async deleteSubject(
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) {
        const id = request.params.id;
        const subject = await this.subjectService.getSubject(id);
        if (!subject) {
            reply.status(404).send('Subject not found');
            return;
        }
        await this.subjectService.deleteSubject(id);
        reply.status(200).send('Subject deleted successfully');
    }
}
