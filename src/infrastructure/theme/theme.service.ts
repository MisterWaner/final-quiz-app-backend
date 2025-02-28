import { Theme } from '../../domain/Theme';
import { ThemeRepository } from '../../application/theme.repository';
import { db } from '../database/sqlite';
import { SubjectService } from '../subject/subject.service';

const subjectService = new SubjectService();

export class ThemeService implements ThemeRepository {
    async createTheme(theme: Theme): Promise<void> {
        const { name, subjectId } = theme;
        const subjectExists = (await subjectService.getSubjects()).find(
            (s) => s.id === subjectId
        );
        if (!subjectExists) {
            throw new Error('Subject not found');
        }
        db.prepare('INSERT INTO themes (name, subject_id) VALUES (?, ?)').run(
            name,
            subjectId
        );
    }
    async getThemes(): Promise<Theme[]> {
        const themes = db.prepare('SELECT * FROM themes').all() as Theme[];
        if (!themes) {
            throw new Error('no themes found');
        }
        return themes;
    }

    async getTheme(id: number): Promise<Theme | null> {
        const theme = db
            .prepare('SELECT * FROM themes WHERE id = ?')
            .get(id) as Theme;
        if (!theme) {
            throw new Error('Theme not found');
        }
        return theme;
    }
    async deleteTheme(id: number): Promise<void> {
        const theme = await this.getTheme(id);
        if (!theme) {
            throw new Error('Theme not found');
        }
        db.prepare('DELETE FROM themes WHERE id = ?').run(id);
    }

    async updateTheme(id: number, name: string): Promise<void> {
        const theme = await this.getTheme(id);
        if (!theme) {
            throw new Error('Theme not found');
        }

        db.prepare('UPDATE themes SET name = ? WHERE id = ?').run(name, id);
    }
}
