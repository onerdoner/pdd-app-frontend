export interface IQuestionInterface {
    correctAnswerId: number,
    createdAt: string,
    explanation: string,
    id: number,
    moduleId: number,
    options: string[],
    questionImg: string,
    text: string,
    updatedAt: string,
}