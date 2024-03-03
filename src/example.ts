const func = {
  name: 'article',
  description:
    'Use this function to provide the content of the article with the associated sections.',
  parameters: {
    type: 'object',
    properties: {
      article_sections: {
        type: 'array',
        description: 'List of article sections',
        items: {
          type: 'object',
          properties: {
            section_type: {
              type: 'string',
              enum: ['title', 'subtitle', 'paragraph', 'bullet_list'],
              description: 'The type of section for the given article',
            },
            content: {
              type: 'string',
              description:
                'The content of the given section. This can either be the title of subtitle, a paragraph containing the content, or this can be a list of points.',
            },
          },
          required: ['section_type', 'content'],
        },
      },
    },
    required: ['article_sections'],
  },
};
