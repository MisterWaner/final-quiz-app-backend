import { FastifyRequest, FastifyReply } from 'fastify';
import { Subject } from '../../domain/Subject';
import { SubjectService } from './subject.service';
import { request } from 'http';

export class SubjectController {
    constructor(private readonly subjectService: SubjectService) {}

    createSubject = async (
        request: FastifyRequest,
        reply: FastifyReply
    ): Promise<void> => {
        try {
            const subject = request.body as Subject;
            if (!subject.name) {
                reply.status(400).send('Subject name is required');
                return;
            }
            const subjectExists = (
                await this.subjectService.getSubjects()
            ).find((s) => s.name === subject.name);
            if (subjectExists) {
                reply.status(400).send('Subject already exists');
                return;
            }
            await this.subjectService.createSubject(subject);
            reply.status(201).send('Subject created successfully');
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    getSubjects = async (request: FastifyRequest, reply: FastifyReply) => {
        const subjects = await this.subjectService.getSubjects();
        if (!subjects) {
            reply.status(404).send('Subjects not found');
        }
        reply.status(200).send(subjects);
    };

    getSubjectsWithThemes = async (request: FastifyRequest, reply: FastifyReply) => {
        const subjects = await this.subjectService.getSubjectsWithThemes();
        if (!subjects) {
            reply.status(404).send('Subjects not found');
        }
        reply.status(200).send(subjects);
    };

    getSubject = async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) => {
        try {
            const { id } = request.params;
            const subject = await this.subjectService.getSubject(id);
            if (!subject) {
                reply.status(404).send('Subject not found');
                return;
            }
            reply.status(200).send(subject);
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    updateSubject = async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) => {
        const { id } = request.params;
        const { name } = request.body as Subject;
        const subject = await this.subjectService.getSubject(id);
        if (!subject) {
            reply.status(404).send('Subject not found');
            return;
        }
        await this.subjectService.updateSubject(id, name);
        reply.status(200).send('Subject updated successfully');
    };

    deleteSubject = async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) => {
        const { id } = request.params;
        const subject = await this.subjectService.getSubject(id);
        if (!subject) {
            reply.status(404).send('Subject not found');
            return;
        }
        await this.subjectService.deleteSubject(id);
        reply.status(200).send('Subject deleted successfully');
    };
}
