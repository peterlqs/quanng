import { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },

    {
      name: 'Link',
      label: 'Link',
      type: 'text',
      required: true,
    },
    {
      name: 'shortDescription',
      label: 'short description',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'blogCategory',
      label: 'Blog Category',
      type: 'relationship',
      relationTo: 'blogCategories',
      hasMany: true,
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
  ],
}
