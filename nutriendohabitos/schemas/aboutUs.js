export default {
    name: "aboutUs",
    title: "About Us",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: 'subtitle',
            title: 'Sub-Title',
            type: 'string'
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
}