import { FC } from 'react'
import styled from 'styled-components'

import { useQuiz } from '../../../context/QuizContext'
import { device } from '../../../styles/BreakPoints'

import { convertSeconds } from '../../../utils/helpers'
import { Result } from '../../../types'

const ResultOverviewStyle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background || '#f9f9f9'};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media ${device.md} {
    margin-bottom: 30px;
    padding: 15px;
  }

  p {
    margin-top: 15px;
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textPrimary || '#333'};

    &:first-of-type {
      margin-top: 0;
    }

    @media ${device.md} {
      font-size: 16px;
    }
  }
`;

const HighlightedText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText || '#007BFF'};
  background: ${({ theme }) => theme.colors.primaryHover || '#EAF4FF'};
  padding: 3px 6px;
  border-radius: 4px;

  @media ${device.md} {
    padding: 2px 5px;
  }
`;

interface ResultOverviewProps {
  result: Result[]
}

const ResultOverview: FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails, endTime } = useQuiz()

  const totalQuestionAttempted = result.length

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0)

  // Passed if 60 or more than 60% marks
  const calculateStatus =
    (obtainedScore / quizDetails.totalScore) * 100 >= 60 ? 'Logrado' : 'Fallido'

  return (
    <ResultOverviewStyle>
      <p>
        Tu respondiste:{' '}
        <HighlightedText> {totalQuestionAttempted} </HighlightedText>/{' '}
        {quizDetails.totalQuestions}
      </p>
      <p>
        Puntuación lograda:<HighlightedText> {obtainedScore} </HighlightedText>/{' '}
        {quizDetails.totalScore}
      </p>
      <p>
        Tiemplo empleado:<HighlightedText> {convertSeconds(endTime)} </HighlightedText>
      </p>
      <p>
        Estado:<HighlightedText> {calculateStatus}</HighlightedText>
      </p>
    </ResultOverviewStyle>
  )
}

export default ResultOverview
