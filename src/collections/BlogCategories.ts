import { CollectionConfig } from 'payload'

export const blogCategories: CollectionConfig = {
  slug: 'blogCategories',
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
