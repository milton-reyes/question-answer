import { Question } from '../models/Question'
import { internalAxios } from './internal-axios'

export const createQuestion = async (question: Question) => {
    const response = await internalAxios.post('/question', question)
    return true
}