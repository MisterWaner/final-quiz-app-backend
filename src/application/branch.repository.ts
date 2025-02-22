import { Branch } from "../domain/types";

export interface BranchRepository {
    createBranch(): Promise<void>
    getBranches(): Promise<Branch[]>
    getBranch(id: string): Promise<Branch | null>
    deleteBranch(id: string): Promise<void>
    updateBranch(id: string): Promise<void>
}