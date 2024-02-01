export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'overview', type: 'string', title: 'Overview'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title'}},
    {name: 'publishedAt', type: 'date', title: 'Published At'},
    {name: 'lastUpdated', type: 'date', title: 'Last Updated'},
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Check if this post should be featured',
    },
    {name: 'image', type: 'image', title: 'Image'},
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}],
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'News', value: 'news'},
          {title: 'Product Update', value: 'productUpdate'},
          {title: 'Tutorial', value: 'tutorial'},
          {title: 'Inside Barrel', value: 'insideBarrel'},
          {title: 'Engineering', value: 'engineering'},
        ],
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          title: 'Content Block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          fields: [{type: 'text', name: 'alt', title: 'Alternative Text'}],
        },
      ],
    },
  ],
}
