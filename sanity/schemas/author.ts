export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'designation', type: 'string', title: 'Designation'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'name'}},
    {name: 'image', type: 'image', title: 'Image'},
    {name: 'bio', type: 'text', title: 'Bio'},
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
