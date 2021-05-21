export default {
  name: "misionVision",
  title: "Misión & Visión",
  type: "document",
    fields: [
        
    {

    name: 'title',
    title: 'Title',
    type: 'string'
    },
    {
      name: "mision",
      title: "Misión",
      type: "string",
    },
    {
      name: "vision",
      title: "Visión",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};