import styled from 'styled-components'

import { AppLogo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'

import Button from '../ui/Button'

const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.themeColor};
  margin-bottom: 20px;
`

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`

const Emoji = styled.span`
  font-size: 24px;
`

const DetailText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <AppTitle>BECAS ITAIPU</AppTitle>
        <DetailTextContainer>
          <DetailItem>
            <Emoji>📚</Emoji>
            <DetailText>
              Simulación de: <HighlightedText>{selectedQuizTopic}</HighlightedText>
            </DetailText>
          </DetailItem>
          <DetailItem>
            <Emoji>❓</Emoji>
            <DetailText>
              Total de preguntas a intentar: <HighlightedText>{totalQuestions}</HighlightedText>
            </DetailText>
          </DetailItem>
          <DetailItem>
            <Emoji>🏆</Emoji>
            <DetailText>
              Puntos en total: <HighlightedText>{totalScore}</HighlightedText>
            </DetailText>
          </DetailItem>
          <DetailItem>
            <Emoji>⏳</Emoji>
            <DetailText>
              Tiempo límite: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
            </DetailText>
          </DetailItem>

        </DetailTextContainer>
        <Button
          text="Iniciar"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen