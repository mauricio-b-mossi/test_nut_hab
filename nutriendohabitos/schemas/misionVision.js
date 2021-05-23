export default {
  name: "misionVision",
  title: "Misión & Visión",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "mision",
      title: "Misión",
      type: "blockContent",
    },
    {
      name: "vision",
      title: "Visión",
      type: "blockContent",
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