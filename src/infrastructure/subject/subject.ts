import { Subject } from '../../domain/types';
import { SubjectRepository } from '../../application/subject.repository';
import { db } from '../database/sqlite';

export class SubjectService implements SubjectRepository {
    async createSubject(subject: Subject): Promise<void> {
        const name = subject.name;
        db.prepare('INSERT INTO subjects (name) VALUES (?)').run(name);
    }

    async getSubjects(): Promise<Subject[]> {
        const subjects = db
            .prepare('SELECT * FROM subjects')
            .all() as Subject[];

        if (!subjects) {
            throw new Error('Subjects not found');
        }
        return subjects;
    }

    async getSubject(id: number): Promise<Subject> {
        const subject = db
            .prepare('SELECT * FROM subjects WHERE id = ?')
            .get(id) as Subject;
        return subject;
    }

    async updateSubject(id: number): Promise<void> {
        const subject = await this.getSubject(id);

        if (!subject) {
            throw new Error('Subject not found');
        }

        db.prepare('UPDATE subjects SET name = ? WHERE id = ?').run(
            subject.name,
            id
        );
    }

    async deleteSubject(id: number): Promise<void> {
        const subject = await this.getSubject(id);

        if (!subject) {
            throw new Error('Subject not found');
        }

        db.prepare('DELETE FROM subjects WHERE id = ?').run(id);
    }
}
