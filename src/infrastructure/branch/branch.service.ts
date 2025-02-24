import { Branch } from '../../domain/branch/Branch';
import { BranchRepository } from '../../application/branch.repository';
import { db } from '../database/sqlite';
import { SubjectService } from '../subject/subject.service';

const subjectService = new SubjectService();

export class BranchService implements BranchRepository {
    async createBranch(branch: Branch): Promise<void> {
        const { name, subject } = branch;
        const subjectExists = (await subjectService.getSubjects()).find(
            (s) => s.name === subject
        );
        if (!subjectExists) {
            throw new Error('Subject not found');
        }
        db.prepare('INSERT INTO branches (name, subject) VALUES (?, ?)').run(
            name,
            subject
        );
    }
    async getBranches(): Promise<Branch[]> {
        const branches = db.prepare('SELECT * FROM branches').all() as Branch[];
        if (!branches) {
            throw new Error('no branches found');
        }
        return branches;
    }

    async getBranch(id: number): Promise<Branch | null> {
        const branch = db
            .prepare('SELECT * FROM branches WHERE id = ?')
            .get(id) as Branch;
        if (!branch) {
            throw new Error('Branch not found');
        }
        return branch;
    }
    async deleteBranch(id: number): Promise<void> {
        const branch = await this.getBranch(id);
        if (!branch) {
            throw new Error('Branch not found');
        }
        db.prepare('DELETE FROM branches WHERE id = ?').run(id);
    }

    async updateBranch(
        id: number,
        name: string,
        subject: string
    ): Promise<void> {
        const branch = await this.getBranch(id);
        if (!branch) {
            throw new Error('Branch not found');
        }

        db.prepare(
            'UPDATE branches SET name = ?, subject = ? WHERE id = ?'
        ).run(name, subject, id);
    }
}
