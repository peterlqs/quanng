import { CollectionConfig } from 'payload'
import { ProjectCategories } from './ProjectCategories'

export const Projects: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
    },
    {
      name: 'link',
      label: 'Link',
      type: 'text',
      required: true,
    },
    {
      name: 'shortDescription',
      label: 'Short Description',
      type: 'text',
      required: true,
    },
    {
      name: 'feature',
      label: 'Feature',
      type: 'checkbox',
    },
    {
      name: 'projectCategory',
      label: 'Project Category',
      type: 'relationship',
      hasMany: true,
      relationTo: 'projectCategories',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
  ],
}
