import { Answer } from "./Answer";

export interface Question {
    id?: number;
    title: string;
    content: string;
    date: Date | string;
    approvedAnswer: Answer;
}