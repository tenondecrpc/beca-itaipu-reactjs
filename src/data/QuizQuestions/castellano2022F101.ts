// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import {roaBastos} from './roaBastos'

export const castellano2022F101: Topic = {
  topic: 'Castellano2022F101',
  level: 'Beginner',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 1200,
  questions: [
    {
      question: '21. El sinónimo contextual de la palabra "INSPIRACIÓN" es:',
      code: roaBastos,
      choices: [
        'Iluminación', 
        'Sugestión', 
        'Respiración', 
        'Espiración'
      ],
      type: 'MCQs',
      correctAnswers: ['Iluminación'],
      score: 10,
    },
    {
      question: '22. El párrafo que contiene error de concordancia es el número:',
      code: roaBastos,
      choices: [
        'Dos', 
        'Uno', 
        'Tres', 
        'Cinco'
      ],
      type: 'MCQs',
      correctAnswers: ['Uno'],
      score: 10,
    },
    {
      question: `23. En el párrafo "En 1944 viajó a Gran Bretaña, con una Invitación del Consejo
                  Británico, y trabajó alli como corresponsal para su periódico" a través de la
                  palabra subrayada se establece la relación de referencia denominada:`,
      code: roaBastos,
      choices: ['Anáfora', 'Elipsis', 'Catáfora', 'Exofórica'],
      type: 'MCQs',
      correctAnswers: ['Anáfora'],
      score: 10,
    },
    {
      question: '24. El hecho que generó el exilio de Augusto Roa Bastos fue:',
      code: roaBastos,
      choices: [
        'La publicación de obras', 
        'Su desempeño como locutor', 
        'Se le privó de su libertad', 
        'La orden de su arresto'
      ],
      type: 'MCQs',
      correctAnswers: ['La orden de su arresto'],
      score: 10,
    },
    {
      question: '25. La declaración antigubernamental de Roa Bastos según el texto se manifiesta',
      code: roaBastos,
      choices: [
        '1944', 
        '1976', 
        '1985', 
        '1989'
      ],
      type: 'MCQs',
      correctAnswers: ['1985'],
      score: 10,
    },
    {
      question: '26. La tipología textual a la que pertenece la lectura es:',
      code: roaBastos,
      choices: [
        'Informativa',
        'Epistolar',
        'Instruccional',
        'Instrumental',
      ],

      type: 'MCQs',
      correctAnswers: ['Informativa'],
      score: 10,
    },
    {
      question: `27. La expresión "En noviembre de 1989 recibió el Premio Cervantes, máximo
                reconocimiento a la labor creadora de escritores españoles
                e hispanoamericanos" desempeña la función del lenguaje denominada:`,
      code: roaBastos,
      choices: [
        'Metalingüística y fática',
        'Expresiva y fática',
        'Referencial o Informativa',
        'Informativa y metalingüística',
      ],

      type: 'MCQs',
      correctAnswers: ['Referencial o Informativa'],
      score: 10,
    },
    {
      question: '28. El texto está estructurado en:',
      code: roaBastos,
      choices: [
        'Prosa y verso',
        'Solo en prosa',
        'Estrofas y párrafos',
        'Rimas y métrica',
      ],

      type: 'MCQs',
      correctAnswers: ['Solo en prosa'],
      score: 10,
    },
    {
      question: '29. La letra que contiene error ortográfico es:',
      code: roaBastos,
      choices: [
        'Corregir, corrijo, enhebrar, decisión',
        'Ebilla, exibición, escéntrico, bendaje',
        'Haya, beneficio, hebilla, controversia',
        'Explanada, excéntrico, oveja, ceder',
      ],

      type: 'MCQs',
      correctAnswers: ['Ebilla, exibición, escéntrico, bendaje'],
      score: 10,
    },
    {
      question: '30. La opción que contiene palabras con HIATO es:',
      code: roaBastos,
      choices: [
        'Púa, cohesión, caer',
        'Virrey, ahumado, copiáis',
        'Prohibir, óseo, gracioso',
        'Fraile, rubia, fluorescente',
      ],

      type: 'MCQs',
      correctAnswers: ['Púa, cohesión, caer'],
      score: 10,
    },
  ],
}
