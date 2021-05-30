export default {
  name: "misionVision",
  title: "Misión & Visión(Edit Only)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title(Won't appear in website)",
      type: "string",
    },
    {
      name: "fieldOne",
      title: "Title",
      type: "string",
    },
    {
      name: "mission",
      title: "Edit Mission Body",
      type: "blockContent",
    },
    {
      name: "fieldTwo",
      title: "Title",
      type: "string",
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