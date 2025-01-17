import { ReactNode } from 'react'
import { ReactComponent as BecaIcon } from '../assets/icons/beca.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'Castellano 2022 F1',
    icon: <BecaIcon />,
  },
  {
    title: 'Castellano 2022 F2',
    icon: <BecaIcon />,
  },
]
