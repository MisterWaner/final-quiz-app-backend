import { Subject } from "../domain/types";

export interface SubjectRepository {
    createSubject(): Promise<void>
    getSubjects(): Promise<Subject[]>
    getSubject(id: string): Promise<Subject | null>
    deleteSubject(id: string): Promise<void>
    updateSubject(id: string): Promise<void>
}