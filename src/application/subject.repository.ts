import { Subject } from "../domain/types";

export interface SubjectRepository {
    createSubject(subject: Subject): Promise<void>
    getSubjects(): Promise<Subject[]>
    getSubject(id: number): Promise<Subject>
    deleteSubject(id: number): Promise<void>
    updateSubject(id: number): Promise<void>
}