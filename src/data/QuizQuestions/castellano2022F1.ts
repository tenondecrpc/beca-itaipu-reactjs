// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import { roaBastos } from './roaBastos'

export const castellano2022F1: Topic = {
  topic: 'Castellano2022F1',
  level: 'Beginner',
  totalQuestions: 20,
  totalScore: 20,
  totalTime: 2400,
  questions: [
    {
      question: '(21) El sinónimo contextual de la palabra "INSPIRACIÓN" es:',
      code: roaBastos,
      choices: [
        'Iluminación', 
        'Sugestión', 
        'Respiración', 
        'Espiración'
      ],
      type: 'MCQs',
      correctAnswers: ['Iluminación'],
      score: 1,
    },
    {
      question: '(22) El párrafo que contiene error de concordancia es el número:',
      code: roaBastos,
      choices: [
        'Dos', 
        'Uno', 
        'Tres', 
        'Cinco'
      ],
      type: 'MCQs',
      correctAnswers: ['Uno'],
      score: 1,
    },
    {
      question: `(23) En el párrafo "En 1944 viajó a Gran Bretaña, con una Invitación del Consejo
                  Británico, y trabajó alli como corresponsal para su periódico" a través de la
                  palabra subrayada se establece la relación de referencia denominada:`,
      code: roaBastos,
      choices: ['Anáfora', 'Elipsis', 'Catáfora', 'Exofórica'],
      type: 'MCQs',
      correctAnswers: ['Anáfora'],
      score: 1,
    },
    {
      question: '(24) El hecho que generó el exilio de Augusto Roa Bastos fue:',
      code: roaBastos,
      choices: [
        'La publicación de obras', 
        'Su desempeño como locutor', 
        'Se le privó de su libertad', 
        'La orden de su arresto'
      ],
      type: 'MCQs',
      correctAnswers: ['La orden de su arresto'],
      score: 1,
    },
    {
      question: '(25) La declaración antigubernamental de Roa Bastos según el texto se manifiesta',
      code: roaBastos,
      choices: [
        '1944', 
        '1976', 
        '1985', 
        '1989'
      ],
      type: 'MCQs',
      correctAnswers: ['1985'],
      score: 1,
    },
    {
      question: '(26) La tipología textual a la que pertenece la lectura es:',
      code: roaBastos,
      choices: [
        'Informativa',
        'Epistolar',
        'Instruccional',
        'Instrumental',
      ],
      type: 'MCQs',
      correctAnswers: ['Informativa'],
      score: 1,
    },
    {
      question: `(27) La expresión "En noviembre de 1989 recibió el Premio Cervantes, máximo
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
      score: 1,
    },
    {
      question: '(28) El texto está estructurado en:',
      code: roaBastos,
      choices: [
        'Prosa y verso',
        'Solo en prosa',
        'Estrofas y párrafos',
        'Rimas y métrica',
      ],

      type: 'MCQs',
      correctAnswers: ['Solo en prosa'],
      score: 1,
    },
    {
      question: '(29) La letra que contiene error ortográfico es:',
      choices: [
        'Corregir, corrijo, enhebrar, decisión',
        'Ebilla, exibición, escéntrico, bendaje',
        'Haya, beneficio, hebilla, controversia',
        'Explanada, excéntrico, oveja, ceder',
      ],

      type: 'MCQs',
      correctAnswers: ['Ebilla, exibición, escéntrico, bendaje'],
      score: 1,
    },
    {
      question: '(30) La opción que contiene palabras con HIATO es:',
      choices: [
        'Púa, cohesión, caer',
        'Virrey, ahumado, copiáis',
        'Prohibir, óseo, gracioso',
        'Fraile, rubia, fluorescente',
      ],

      type: 'MCQs',
      correctAnswers: ['Púa, cohesión, caer'],
      score: 1,
    },
    {
      question: ` (31) La opción que completa adecuadamente las expresiones dadas es:
                  Pablo sostiene que eres dedicado, no aprobarás los exámenes (_____).
                  Los abuelos manifiestan que educas a los niños, estos se perderán (_____).
                  No irás de visita los días martes los fines de semana (_____).`,
      choices: [
        'si no, si no, sino', 
        'si no, sino, sino', 
        'sino, sino, si no', 
        'si no / si no , si no'
      ],
      type: 'MCQs',
      correctAnswers: ['si no, si no, sino'],
      score: 1,
    },
    {
      question: '(32) El hipónimo adecuado del hiperónimo "animal" es:',
      choices: [
        'Gardenia - chita- tapir', 
        'Armadillo - lirio - calandria', 
        'Tucán- carpincho - cardenal', 
        'Colibrí - tapir - yvapovo'
      ],
      type: 'MCQs',
      correctAnswers: ['Tucán- carpincho - cardenal'],
      score: 1,
    },
    {
      question: `(33) La oración que contiene el empleo correcto del adverbio es:`,
      choices: [
        'Muchos son perros pocos rápidos', 
        'Los canelones están bastantes cocinados', 
        'Sus hijas estaban demasiadas ansiosas', 
        'Los canelones están bastante cocinados'
      ],
      type: 'MCQs',
      correctAnswers: ['Los canelones están bastante cocinados'],
      score: 1,
    },
    {
      question: '(34) ¿Cuál de las afirmaciones es correcta?',
      choices: [
        'Una de las flexiones del verbo es el tiempo de conjugación', 
        'El adverbio posee accidentes gramaticales', 
        'Una de las flexiones del adjetivo es el género y número', 
        'A y C son correctas'
      ],
      type: 'MCQs',
      correctAnswers: ['A y C son correctas'],
      score: 1,
    },
    {
      question: '(35) La opción que contiene la conjugación incorrecta del verbo es:',
      choices: [
        'El arquitecto amueblará su oficina la próxima semana', 
        'Las propuestas satisfacerán a todos los jóvenes', 
        'Llovió mucho el día de ayer en la zona del Guairá', 
        'Tanto la opción A como la B contienen error'
      ],
      type: 'MCQs',
      correctAnswers: ['Tanto la opción A como la B contienen error'],
      score: 1,
    },
    {
      question: `(36) EI único sujeto que completa correctamente el predicado propuesto es:
                ...apareció totalmente limpia.`,
      choices: [
        'La superficie de la cancha de fútbol',
        'El patio de la casa de mis tíos',
        'Las jaulas de los animales',
        'La ventana, la cortina, el mueble, todo',
      ],

      type: 'MCQs',
      correctAnswers: ['La superficie de la cancha de fútbol'],
      score: 1,
    },
    {
      question: `(37) Marca la letra que expresa incorrectamente la relación del sustantivo colectivo
                con su individual.`,
      choices: [
        'Pinacoteca: cuadros',
        'Plara: peces',
        'Jauría: perros',
        'Parvada: aves',
      ],

      type: 'MCQs',
      correctAnswers: ['Plara: peces'],
      score: 1,
    },
    {
      question: '(38) Marca la oración que contenga el predicado compuesto.',
      choices: [
        'Lucas y sus hermanos han presentado sus documentos',
        'Ven y estudia con nosotros todas las lecciones',
        'Yo trabajo todos los días en la escuela de mi ciudad',
        'La subasta había afectado intereses patrimoniales',
      ],

      type: 'MCQs',
      correctAnswers: ['Ven y estudia con nosotros todas las lecciones'],
      score: 1,
    },
    {
      question: '(39) Marca la oración con el uso correcto del superlativo',
      choices: [
        'El estudiante José trajo unas cortinas muy blanquisísimas',
        'El pulquérrimo docente fue becado al exterior para especializarse',
        'Esos jóvenes son tan estudiosos como aquellos',
        'La película de anoche fue bastante más peor que la anterior',
      ],

      type: 'MCQs',
      correctAnswers: ['El pulquérrimo docente fue becado al exterior para especializarse'],
      score: 1,
    },
    {
      question: ` (40) La expresión "...mentiras dulces y verdades amargas" au contiene una figura
                  literaria denominada:`,
      choices: [
        'Antitesis',
        'Repetición',
        'Aliteración',
        'Hipérbole',
      ],
      type: 'MCQs',
      correctAnswers: ['Antitesis'],
      score: 1,
    },
  ],
}
