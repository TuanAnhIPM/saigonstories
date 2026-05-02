import { defineType, defineField } from 'sanity'

export const tourSchema = defineType({
  name: 'tour',
  title: 'Tour',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'shortTitle', title: 'Short Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Food Tour', value: 'food' },
          { title: 'History & Culture', value: 'history' },
          { title: 'Food + Sightseeing', value: 'combo' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'text', rows: 2 }),
    defineField({ name: 'duration', title: 'Duration', type: 'string' }),
    defineField({
      name: 'departureTimes',
      title: 'Departure Times',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing Tiers',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'group', title: 'Group Size', type: 'string' },
          { name: 'price', title: 'Price (USD)', type: 'number' },
        ],
      }],
    }),
    defineField({
      name: 'groupDiscounts',
      title: 'Group Discounts',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'stops',
      title: 'Tour Stops / Itinerary',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'number', title: 'Stop Number', type: 'number' },
          { name: 'title', title: 'Stop Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text', rows: 3 },
        ],
      }],
    }),
    defineField({
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'exclusions',
      title: 'Exclusions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'note', title: 'Note / Good to Know', type: 'text', rows: 3 }),
    defineField({ name: 'minGuests', title: 'Minimum Guests', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'heroImage' },
  },
})
