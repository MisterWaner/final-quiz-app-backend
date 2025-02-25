import { Theme } from '../domain/Theme';

export interface ThemeRepository {
    createTheme(theme: Theme): Promise<void>;
    getThemes(): Promise<Theme[]>;
    getTheme(id: number): Promise<Theme | null>;
    deleteTheme(id: number): Promise<void>;
    updateTheme(id: number, name: string): Promise<void>;
}
