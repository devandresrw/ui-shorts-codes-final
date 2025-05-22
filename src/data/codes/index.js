import { kyus } from '@/data/codes/categories'
import { kyu1Problems } from '@/data/codes/kyu1'
import { kyu2Problems } from '@/data/codes/kyu2'
import { kyu3Problems } from '@/data/codes/kyu3'
import { kyu4Problems } from '@/data/codes/kyu4'
import { kyu5Problems } from '@/data/codes/kyu5'
import { kyu6Problems } from '@/data/codes/kyu6'
import { kyu7Problems } from '@/data/codes/kyu7'
import { kyu8Problems } from '@/data/codes/kyu8'

export const allKataProblems = {
    kyu8: kyu8Problems,
    kyu7: kyu7Problems,
    kyu6: kyu6Problems,
    kyu5: kyu5Problems,
    kyu4: kyu4Problems,
    kyu3: kyu3Problems,
    kyu2: kyu2Problems,
    kyu1: kyu1Problems,
}

export function getKataProblemById(problemId) {
    for (const category in allKataProblems) {
        const problem = allKataProblems[category].find((problem) => problem.id === problemId)
        if (problem) return problem

    }
    return null
}

export { kyus }