import { defineField, defineType } from 'sanity';

const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '')
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publish Date',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Summary',
      rows: 3,
      validation: (rule) => rule.max(260)
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (rule) => rule.required().error('Describe the image for accessibility.')
        })
      ]
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Body',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Meta Title'
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Meta Description',
          rows: 3
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'excerpt'
    }
  }
});

export default post;
