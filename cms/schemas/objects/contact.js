export default {
  type: 'object',
  name: 'contact',
  title: 'Contact',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: "description",
      type: 'text',
      title: "Description"
    },
    {
      name: 'locations',
      type: 'array',
      title: 'Locations to show',
      of: [
        {
          type: 'reference',
          to: { type: 'locations' }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Contact',
      };
    },
  },
};