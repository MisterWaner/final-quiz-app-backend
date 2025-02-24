import { Branch } from "../domain/branch/Branch"

export interface BranchRepository {
    createBranch(branch: Branch): Promise<void>
    getBranches(): Promise<Branch[]>
    getBranch(id: number): Promise<Branch | null>
    deleteBranch(id: number): Promise<void>
    updateBranch(id: number, name: string, subject: string): Promise<void>
}