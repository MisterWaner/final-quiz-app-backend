import { FastifyInstance } from 'fastify';
import { ThemeController } from '../infrastructure/theme/theme.controller';
import { ThemeService } from '../infrastructure/theme/theme.service';
import { Theme } from '../domain/Theme';

const themeService = new ThemeService();
const themeController = new ThemeController(themeService);

export async function themeRouter(fastify: FastifyInstance) {

    fastify.post<{ Body: { name: string; subject: string } }>(
        '/themes',
        {},
        themeController.createTheme
    );

    fastify.get<{ Params: { id: number }; Reply: Theme }>(
        '/themes/:id',
        {},
        themeController.getTheme
    );

    fastify.get<{ Reply: Theme[] }>(
        '/themes',
        {},
        themeController.getThemes
    );

    fastify.put<{
        Params: { id: number };
        Body: { name: string};
    }>('/themes/:id', {}, themeController.updateTheme);

    fastify.delete<{ Params: { id: number } }>(
        '/themes/:id',
        {},
        themeController.deleteTheme
    );
}
