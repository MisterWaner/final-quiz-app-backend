import { Subject } from "../domain/subject/Subject"

export interface SubjectRepository {
    createSubject(subject: Subject): Promise<void>
    getSubjects(): Promise<Subject[]>
    getSubject(id: number): Promise<Subject>
    deleteSubject(id: number): Promise<void>
    updateSubject(id: number, name: string): Promise<void>
}