const func = {
  name: 'ClinicalNoteJSON',
  description: 'Clinical Note response model for orthopedic consultations.',
  parameters: {
    type: 'object',
    properties: {
      chief_complaint: {
        type: 'object',
        description:
          "The primary reason for the patient's visit, using the patient's own words where possible.",
        properties: {
          output: {
            title: 'Output',
            description: 'The corrected section note',
            type: 'string',
          },
          reasoning: {
            title: 'Reasoning',
            description:
              'Exaplanation of the reason why you corrected the string in the way you did',
            type: 'string',
          },
        },
        required: ['output', 'reasoning'],
      },
      history_of_present_illness: {
        type: 'object',
        description:
          "Detailed account of the patient's presenting issue, including duration, nature, and any relevant prior treatments, and medical/surgical history.",
        properties: {
          output: {
            title: 'Output',
            description: 'The corrected section note',
            type: 'string',
          },
          reasoning: {
            title: 'Reasoning',
            description:
              'Exaplanation of the reason why you corrected the string in the way you did',
            type: 'string',
          },
        },
        required: ['output', 'reasoning'],
      },
      physical_exam: {
        type: 'object',
        description: "Findings from the physical examination relevant to the patient's complaint.",
        properties: {
          output: {
            title: 'Output',
            description: 'The corrected section note',
            type: 'string',
          },
          reasoning: {
            title: 'Reasoning',
            description:
              'Exaplanation of the reason why you corrected the string in the way you did',
            type: 'string',
          },
        },
        required: ['output', 'reasoning'],
      },
      diagnostic_studies: {
        type: 'object',
        description: 'Summary of any diagnostic tests performed and their results.',
        properties: {
          output: {
            title: 'Output',
            description: 'The corrected section note',
            type: 'string',
          },
          reasoning: {
            title: 'Reasoning',
            description:
              'Exaplanation of the reason why you corrected the string in the way you did',
            type: 'string',
          },
        },
        required: ['output', 'reasoning'],
      },
      diagnosis: {
        type: 'object',
        description: 'The diagnosis based on the clinical findings and diagnostic studies.',
        properties: {
          output: {
            title: 'Output',
            description: 'The corrected section note',
            type: 'string',
          },
          reasoning: {
            title: 'Reasoning',
            description:
              'Exaplanation of the reason why you corrected the string in the way you did',
            type: 'string',
          },
        },
        required: ['output', 'reasoning'],
      },
      plan: {
        type: 'object',
        description:
          'Written in a formal third person perspective clinical tone, medical treatment plans, including medications, therapies, and follow-up appointments.',
        properties: {
          output: {
            title: 'Output',
            description: 'The corrected section note',
            type: 'string',
          },
          reasoning: {
            title: 'Reasoning',
            description:
              'Exaplanation of the reason why you corrected the string in the way you did',
            type: 'string',
          },
        },
        required: ['output', 'reasoning'],
      },
    },
    required: [
      'chief_complaint',
      'history_of_present_illness',
      'physical_exam',
      'diagnostic_studies',
      'diagnosis',
      'plan',
    ],
  },
};

console.log(JSON.stringify(func, undefined, 2));
