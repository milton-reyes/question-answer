import { Question } from "./Question";

export interface Answer {
    id?: number;
    content: string;
    date: Date | string;
    question: Question;
}