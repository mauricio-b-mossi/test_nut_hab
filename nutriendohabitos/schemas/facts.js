export default {
  name: "fact",
  title: "Facts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Fact title(Won't appear in website)",
      type: "string",
    },
    {
      name: "body",
      title: "Fact",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
      