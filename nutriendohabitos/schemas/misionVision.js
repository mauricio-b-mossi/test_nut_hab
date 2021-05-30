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
      name: "mission",
      title: "Edit Mission Body",
      type: "blockContent",
    },
    {
      name: "vision",
      title: "Edit Vision Body",
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