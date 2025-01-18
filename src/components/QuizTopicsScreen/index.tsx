import styled, { keyframes } from 'styled-components'

import { AppLogo } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { quizTopics } from '../../data/quizTopics'
import { device } from '../../styles/BreakPoints'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'

import Button from '../ui/Button'

// Animación de entrada para los textos
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 20px;
  text-align: center;
  max-width: 500px;
`

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`

const Emoji = styled.span`
  font-size: 24px;
`

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(90deg, #4a90e2, #9013fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.8s ease-in-out;
`

const DetailText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #666;
  animation: ${fadeIn} 1s ease-in-out;
  margin-top: 30px;
`

const SelectButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 80%;
  gap: 20px;
  margin: 40px auto 45px auto;
  animation: ${fadeIn} 1.2s ease-in-out;
  @media ${device.md} {
    gap: 15px;
    max-width: 100%;
  }
`

interface SelectButtonProps {
  active: boolean
  disabled?: boolean
}

const SelectButton = styled.div<SelectButtonProps>`
  background: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabledCard : theme.colors.selectTopicBg};
  border: ${({ active, theme }) =>
    active
      ? `2px solid ${theme.colors.themeColor}`
      : `1px solid ${theme.colors.disabledButton}`};
  transition: background-color 0.3s ease-out, transform 0.2s ease-out;
  border-radius: 10px;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-shadow: ${({ active }) =>
    active ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none'};
  &:hover {
    background: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabledCard : theme.colors.themeColorLight};
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
  }
  @media ${device.md} {
    padding: 10px;
  }
`

const SelectButtonText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  color: #333;
  @media ${device.md} {
    font-size: 16px;
    font-weight: 500;
  }
`

const QuizTopicsScreen: React.FC = () => {
  const { quizTopic, selectQuizTopic, setCurrentScreen } = useQuiz()

  const goToQuizDetailsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizDetailsScreen)
  }

  return (<PageCenter light justifyCenter>
    <CenterCardContainer>
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <Heading>
        BIENVENIDO A <HighlightedText> SIMULACIÓN BECAS ITAIPU</HighlightedText>
      </Heading>
      <DetailText>Selecciona el tema a continuación para iniciar la simulación</DetailText>
      <SelectButtonContainer>
        {quizTopics.map(({ title, icon, disabled }) => (
          <SelectButton
            key={title}
            active={quizTopic === title}
            onClick={() => !disabled && selectQuizTopic(title)}
            disabled={disabled}
          >
            {icon}
            <SelectButtonText>{title}</SelectButtonText>
          </SelectButton>
        ))}
      </SelectButtonContainer>
      <Button text="Continuar" onClick={goToQuizDetailsScreen} bold />
      <DetailTextContainer>
        <DetailItem>
          <DetailText>
            <DetailText>Colaboradores:</DetailText>
            Este proyecto fue desarrollado por <strong>Wildo Fariña</strong> y 
            <strong><a href="https://www.instagram.com/tenondev_/" target="_blank" rel="noreferrer">Cristian Paniagua</a></strong> 
            como un aporte comunitario.
          </DetailText>
        </DetailItem>
      </DetailTextContainer>
    </CenterCardContainer>
  </PageCenter>
  )
}

export default QuizTopicsScreen