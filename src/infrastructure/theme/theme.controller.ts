import { FastifyRequest, FastifyReply } from 'fastify';
import { Theme } from '../../domain/Theme';
import { ThemeService } from './theme.service';

export class ThemeController {
    constructor(private readonly themeService: ThemeService) {}

    createTheme = async (
        request: FastifyRequest,
        reply: FastifyReply
    ): Promise<void> => {
        try {
            const theme = request.body as Theme;
            if (!theme.name) {
                reply.status(400).send('Theme name is required');
                return;
            }
            const themeExists = (await this.themeService.getThemes()).find(
                (t) => t.name === theme.name
            );
            if (themeExists) {
                reply.status(400).send('Theme already exists');
                return;
            }
            await this.themeService.createTheme(theme);
            reply.status(201).send('Theme created successfully');
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    getThemes = async (request: FastifyRequest, reply: FastifyReply) => {
        const themes = await this.themeService.getThemes();
        if (!themes) {
            reply.status(404).send('Themes not found');
        }
        if (themes.length === 0) {
            reply.status(404).send('Themes not provided');
        }
        reply.status(200).send(themes);
    };

    getTheme = async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) => {
        try {
            const { id } = request.params;
            const theme = await this.themeService.getTheme(id);
            if (!theme) {
                reply.status(404).send('Theme not found');
                return;
            }
            reply.status(200).send(theme);
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    updateTheme = async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) => {
        const { id } = request.params;
        const { name } = request.body as Theme;
        const theme = await this.themeService.getTheme(id);
        if (!theme) {
            reply.status(404).send('Theme not found');
            return;
        }
        await this.themeService.updateTheme(id, name);
        reply.status(200).send('Theme updated successfully');
    };

    deleteTheme = async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) => {
        const { id } = request.params;
        const theme = await this.themeService.getTheme(id);
        if (!theme) {
            reply.status(404).send('Theme not found');
            return;
        }
        await this.themeService.deleteTheme(id);
        reply.status(200).send('Theme deleted successfully');
    };
}
