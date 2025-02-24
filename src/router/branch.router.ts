import { FastifyInstance } from 'fastify';
import { BranchController } from '../infrastructure/branch/branch.controller';
import { BranchService } from '../infrastructure/branch/branch.service';
import { IBranch } from '../domain/types';

const branchService = new BranchService();
const branchController = new BranchController(branchService);

export async function branchRouter(fastify: FastifyInstance) {
    fastify.post<{ Body: { name: string; subject: string } }>(
        '/branches',
        {},
        branchController.createBranch
    );
    fastify.get<{ Params: { id: number }; Reply: IBranch }>(
        '/branches/:id',
        {},
        branchController.getBranch
    );
    fastify.get<{ Reply: IBranch[] }>(
        '/branches',
        {},
        branchController.getBranches
    );
    fastify.put<{
        Params: { id: number };
        Body: { name: string; subject: string };
    }>('/branches/:id', {}, branchController.updateBranch);
    fastify.delete<{ Params: { id: number } }>(
        '/branches/:id',
        {},
        branchController.deleteBranch
    );
}
