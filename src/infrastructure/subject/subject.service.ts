import { Subject } from '../../domain/Subject';
import { SubjectRepository } from '../../application/subject.repository';
import { db } from '../database/sqlite';

type RawSubject = {
    subject_id: number;
    subject_name: string;
    subject_path: string;
    themes: string;
}

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

    async getSubjectsWithThemes(): Promise<Subject[]> {
        const subjects = db
            .prepare(
                `SELECT 
                    s.id AS subject_id,
                    s.name AS subject_name,
                    s.subjectPath AS subject_path,
                    COALESCE(json_group_array(
                        json_object('id', t.id, 'name', t.name, 'themePath', t.themePath)
                    ), '[]') AS themes
                FROM subjects s
                LEFT JOIN themes t ON s.id = t.subject_id
                GROUP BY s.id, s.name, s.subjectPath
                ORDER BY s.id;
                `
            )
            .all() as RawSubject[];

        if (!subjects) {
            throw new Error('Subjects not found');
        }

        const parsedSubjects = subjects.map((subject) => ({
            id: subject.subject_id,
            name: subject.subject_name,
            subjectPath: subject.subject_path,
            themes: JSON.parse(subject.themes),
        }))

        return parsedSubjects;
    }

    async getSubject(id: number): Promise<Subject> {
        const subject = db
            .prepare('SELECT * FROM subjects WHERE id = ?')
            .get(id) as Subject;
        return subject;
    }

    async updateSubject(id: number, name: string): Promise<void> {
        const subject = await this.getSubject(id);

        if (!subject) {
            throw new Error('Subject not found');
        }

        db.prepare('UPDATE subjects SET name = ? WHERE id = ?').run(name, id);
    }

    async deleteSubject(id: number): Promise<void> {
        const subject = await this.getSubject(id);

        if (!subject) {
            throw new Error('Subject not found');
        }

        db.prepare('DELETE FROM subjects WHERE id = ?').run(id);
    }
}
