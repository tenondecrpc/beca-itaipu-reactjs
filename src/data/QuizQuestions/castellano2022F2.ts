// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import { propulsor } from './propulsor'

export const castellano2022F2: Topic = {
  topic: 'Castellano2022F2',
  level: 'Beginner',
  totalQuestions: 20,
  totalScore: 20,
  totalTime: 2400,
  questions: [
    {
      question: '(21) El sinónimo contextual de la palabra "VISIONARIO" es:',
      code: propulsor,
      choices: [
        'Materialista', 
        'Conservador', 
        'Prospectivo', 
        'Realista'
      ],
      type: 'MCQs',
      correctAnswers: ['Prospectivo'],
      score: 1,
    },
    {
      question: '(22) El párrafo que contiene error de concordancia es el número:',
      code: propulsor,
      choices: [
        'Uno', 
        'Dos', 
        'Tres', 
        'Cinco'
      ],
      type: 'MCQs',
      correctAnswers: ['Dos'],
      score: 1,
    },
    {
      question: `(23) En el párrafo "En 1944 viajó a Gran Bretaña, con una Invitación del Consejo
                  Británico, y trabajó alli como corresponsal para su periódico" a través de la
                  palabra subrayada se establece la relación de referencia denominada:`,
      code: propulsor,
      choices: ['Anáfora', 'Elipsis', 'Catáfora', 'Exofórica'],
      type: 'MCQs',
      correctAnswers: ['Anáfora'],
      score: 1,
    },
    {
      question: '(24) La expresión "Los artífices del proceso de modernización del país" se refiere a:',
      code: propulsor,
      choices: [
        'Los presidentes del Paraguay', 
        'Los jóvenes estudiantes del país', 
        'Los estudiantes becarios paraguayos', 
        'Integrantes del Congreso Nacional'
      ],
      type: 'MCQs',
      correctAnswers: ['Integrantes del Congreso Nacional'],
      score: 1,
    },
    {
      question: '(25) Uno de los aportes de Cándido Bareiro al patrimonio cultural intangible del Paraguay fue:',
      code: propulsor,
      choices: [
        'Ir becado a estudiar en Gran Bretaña', 
        'Ser uno de los presidentes del Paraguay', 
        'Ser uno de los mejores en el aula de Filosofía', 
        'Contribuir a la historiografía paraguaya'
      ],
      type: 'MCQs',
      correctAnswers: ['Ser uno de los mejores en el aula de Filosofía'],
      score: 1,
    },
    {
      question: '(26) La tipología textual a la que pertenece la lectura es:',
      code: propulsor,
      choices: [
        'Literaria',
        'Epistolar',
        'Instruccional',
        'Informativa',
      ],
      type: 'MCQs',
      correctAnswers: ['Literaria'],
      score: 1,
    },
    {
      question: `(27) La expresión "... u una visión que comprometía al Estado as desempeña la 
                función del lenguaje denominada:`,
      code: propulsor,
      choices: [
        'Metalingüística y fática',
        'Solamente expresiva',
        'Referencial o Informativa',
        'Informativa y metalingüística',
      ],

      type: 'MCQs',
      correctAnswers: ['Referencial o Informativa'],
      score: 1,
    },
    {
      question: '(28) El texto está estructurado en:',
      code: propulsor,
      choices: [
        'Prosa y verso',
        'Estrofas y párrafos',
        'Rimas y métrica',
        'Solo en prosa',
      ],

      type: 'MCQs',
      correctAnswers: ['Estrofas y párrafos'],
      score: 1,
    },
    {
      question: '(29) La letra que contiene error ortográfico es:',
      choices: [
        'Follage, excema, confexión, reinverción',
        'Herbívoro, varón, eccema, concesión',
        'Vizcondesa, barón, eczema, allá',
        'Haya, decisión, huye, excepción',
      ],

      type: 'MCQs',
      correctAnswers: ['Herbívoro, varón, eccema, concesión'],
      score: 1,
    },
    {
      question: '(30) La opción que contiene palabras con diptongos es:',
      choices: [
        'Azahar, roer, acuoso',
        'Albahaca, prohibe, teatro',
        'Dios, prohibir, gracioso',
        'Pandemia, vehículo, acueducto',
      ],

      type: 'MCQs',
      correctAnswers: ['Azahar, roer, acuoso'],
      score: 1,
    },
    {
      question: ` (31) La opción que completa adecuadamente las expresiones dadas es:
                Julio comunicó que esa fue la razón
                (_____) huyó.
                Muchos jóvenes se esmeran
                (_____) quieren avanzar.
                La jueza dio a conocer el
                (_____) de la condena al reo.`,
      choices: [
        'Porqué, porque, por que', 
        'Por qué, porque, por qué', 
        'Porque, porqué, por qué', 
        'Por que, porque, porqué'
      ],
      type: 'MCQs',
      correctAnswers: ['Porqué, porque, por que'],
      score: 1,
    },
    {
      question: '(32) El hipónimo adecuado del hiperónimo "flor" es:',
      choices: [
        'Orquidea - camelia - mosca', 
        'Pasionaria - clavel - cerdo', 
        'Pasionaria - dalia- camelia', 
        'Tulipán - gardenia - colibri'
      ],
      type: 'MCQs',
      correctAnswers: ['Pasionaria - dalia- camelia'],
      score: 1,
    },
    {
      question: `(33) La oración que contiene el empleo correcto del adverbio es:`,
      choices: [
        'Tus primos Juan y Luis fuman y beben demasiado', 
        'Los gatos blancos de la casa del vecino son rápidos', 
        'Me pregunto ¿qué habríamos hecho sin el médico', 
        'La hija de Don Alejandro es paraguayo - japonesa'
      ],
      type: 'MCQs',
      correctAnswers: ['La hija de Don Alejandro es paraguayo - japonesa'],
      score: 1,
    },
    {
      question: '(34) ¿Cuál de las afirmaciones es correcta?',
      choices: [
        'Una de las flexiones del sustantivo es el género', 
        'Una de las flexiones del adjetivo es el número', 
        'El adverbio posee accidentes gramaticales', 
        'Las opciones A y B son correctas'
      ],
      type: 'MCQs',
      correctAnswers: ['Las opciones A y B son correctas'],
      score: 1,
    },
    {
      question: '(35) La opción que contiene el verbo conjugado incorrectamente es:',
      choices: [
        'Mi deseo es que quepamos en el recinto', 
        'Las lecheras no satisfacerán a los terneros', 
        'Increiblemente, toda la gente cabió en el aula', 
        'Tanto la opción B como la C contienen error'
      ],
      type: 'MCQs',
      correctAnswers: ['Tanto la opción B como la C contienen error'],
      score: 1,
    },
    {
      question: `(36) Marca la oración con sujeto implícito.`,
      choices: [
        'Muchos problemas tenían los nuevos ingresantes',
        'Cada día, mi madre lleva a mi hermano pequeño a la escuela',
        'Estábamos muy cansados después de recorrer varios colegios',
        'Carlos y Lorena buscaban nuevas estrategias para mejorar las ofertas',
      ],

      type: 'MCQs',
      correctAnswers: ['Muchos problemas tenían los nuevos ingresantes'],
      score: 1,
    },
    {
      question: `(37) Marca la letra que expresa incorrectamente la relación del sustantivo colectivo
              con su individual`,
      choices: [
        'Letra: abecedario',
        'Persona : muchedumbre',
        'Pinos : pinacoteca',
        'Músico : banda',
      ],

      type: 'MCQs',
      correctAnswers: ['Persona : muchedumbre'],
      score: 1,
    },
    {
      question: '(38) Marca la oración que contenga predicado verbal',
      choices: [
        'La cama del hotel de Encarnación está bien tendida',
        'El catre de mis abuelos maternos parece muy gastado',
        'Yo trabajo todos los días en la escuela de mi ciudad',
        'Francisco es muy valiente por presentarse hoy aquí',
      ],

      type: 'MCQs',
      correctAnswers: ['El catre de mis abuelos maternos parece muy gastado'],
      score: 1,
    },
    {
      question: '(39) Marca la oración con el uso correcto del superlativo',
      choices: [
        'La bastante paupérrima familia necesitaba asistencia médica urgente',
        'Los muy sabiosísimos estudiantes del colegio ganaron la medalla de oro',
        'Este espectáculo fue bastante más peor que el anterior',
        'Las antiquísimas imágenes de la Parroquia fueron vendidas',
      ],

      type: 'MCQs',
      correctAnswers: ['Los muy sabiosísimos estudiantes del colegio ganaron la medalla de oro'],
      score: 1,
    },
    {
      question: ` (40) "En el silencio sólo se escuchaba el susurro de las abejas que sonaba".
              (Garcilaso de la Vega) corresponde al recurso estético denominado::`,
      choices: [
        'Prosopopeya',
        'Ironía',
        'Aliteración',
        'Antitesis',
      ],
      type: 'MCQs',
      correctAnswers: ['Prosopopeya'],
      score: 1,
    },
  ],
}
