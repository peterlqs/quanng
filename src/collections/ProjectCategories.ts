import { CollectionConfig } from 'payload'

export const ProjectCategories: CollectionConfig = {
  slug: 'projectCategories',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
  ],
}
