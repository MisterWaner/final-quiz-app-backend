import { FastifyRequest, FastifyReply } from 'fastify';
import { Branch } from '../../domain/branch/Branch';
import { BranchService } from './branch.service';

export class BranchController {
    constructor(private readonly branchService: BranchService) {}

    createBranch = async (
        request: FastifyRequest,
        reply: FastifyReply
    ): Promise<void> => {
        try {
            const branch = request.body as Branch;
            if (!branch.name) {
                reply.status(400).send('Branch name is required');
                return;
            }
            const branchExists = (await this.branchService.getBranches()).find(
                (b) => b.name === branch.name
            );
            if (branchExists) {
                reply.status(400).send('Branch already exists');
                return;
            }
            await this.branchService.createBranch(branch);
            reply.status(201).send('Branch created successfully');
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    getBranches = async (request: FastifyRequest, reply: FastifyReply) => {
        const branches = await this.branchService.getBranches();
        if (!branches) {
            reply.status(404).send('Branches not found');
        }
        if (branches.length === 0) {
            reply.status(404).send('Branches not provided');
        }
        reply.status(200).send(branches);
    };

    getBranch = async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) => {
        try {
            const { id } = request.params;
            const branch = await this.branchService.getBranch(id);
            if (!branch) {
                reply.status(404).send('Branch not found');
                return;
            }
            reply.status(200).send(branch);
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    updateBranch = async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) => {
        const { id } = request.params;
        const { name, subject } = request.body as Branch;
        const branch = await this.branchService.getBranch(id);
        if (!branch) {
            reply.status(404).send('Branch not found');
            return;
        }
        await this.branchService.updateBranch(id, name, subject);
        reply.status(200).send('Branch updated successfully');
    };

    deleteBranch = async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply: FastifyReply
    ) => {
        const { id } = request.params;
        const branch = await this.branchService.getBranch(id);
        if (!branch) {
            reply.status(404).send('Branch not found');
            return;
        }
        await this.branchService.deleteBranch(id);
        reply.status(200).send('Branch deleted successfully');
    };
}
