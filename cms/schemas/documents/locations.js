import { FolderIcon } from '@sanity/icons';

export default {
  name: 'locations',
  type: 'document',
  title: 'Casa madera - Locations',
  icon: FolderIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'locationPage', title: 'Location page' },
    { name: 'menuPage', title: 'Menu page' },
  ],
  fields: [
    {
      name: "site",
      title: "Site",
      type: "string",
      readOnly: true,
      hidden: true,
      options: {
        list: [
          { title: "Noble33", value: "noble33" },
          { title: "Casa Madera", value: "casaMadera" },
        ],
      },
      initialValue: "casaMadera"
    },
    {
      name: 'title',
      type: 'string',
      group: 'general',
      title: 'Location'
    },
    {
      name: 'seo_title_location_page',
      type: 'string',
      title: 'Title Location Page (SEO)',
    },
    {
      name: 'description_location_page',
      type: 'text',
      title: 'Description (Location page)',
    },
    {
      name: 'openGraphImage_location_page',
      type: 'image',
      title: 'Open Graph image',
      description: 'Image for sharing previews on Facebook, Twitter etc. (Location page)'
    },
    {
      name: 'seo_title_menu_page',
      type: 'string',
      title: 'Title menu Page (SEO)',
    },
    {
      name: 'description_menu_page',
      type: 'text',
      title: 'Description (Menu page)',
    },
    {
      name: 'openGraphImage_menu_page',
      type: 'image',
      title: 'Open Graph image',
      description: 'Image for sharing previews on Facebook, Twitter etc. (Menu page)'
    },
    {
      name: 'slug',
      type: 'slug',
      group: 'general',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 180,
      },
    },
    {
      name: "comming_soon",
      type: "boolean",
      title: "Comming Soon?"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      group: 'general',
      description: `
        Recommended size: 888x657, Aspect ratio: 135:100, Max file size: 350kb
      `
    },
    {
      name: "alt_text",
      type: "string",
      title: "Alt Text"
    },
    {
      name: 'content',
      group: "locationPage",
      type: 'array',
      title: 'Location page - sections',
      of: [
        { type: 'hero' },
        { type: 'bannerWithText' },
        { type: 'space' },
        { type: 'textContentCenter' },
        { type: 'imageWithText' },
        { type: 'imageFullWidth' },
        { type: 'eventsSlider' },
        { type: 'details' },
        { type: 'event' },
        { type: 'newsletter' },
        { type: 'contact' },
        { type: 'richtext' },
        { type: 'gallery' },
      ],
      initialValue: [
        {
          _type: 'hero',
        },
        {
          _type: 'space',
          heightDesktop: 210,
          heightTablet: 150,
          heightMobile: 120
        },
      ]
    },
    {
      name: 'menus',
      group: "menuPage",
      type: 'array',
      title: 'Menus',
      of: [
        {
          type: 'object',
          title: "Menu",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: 'slug',
              type: 'slug',
              title: 'Slug',
              options: {
                source: (doc, options) => {
                  const menus = doc?.menus;
                  const actualKey = options?.parentPath[1];
                  return menus.find(menu => menu?._key == actualKey?._key)?.title;
                },
                maxLength: 180,
              },
            },
            {
              name: 'groups',
              type: 'array',
              title: 'Groups',
              of: [
                {
                  type: 'object',
                  title: "Group",
                  fields: [
                    {
                      type: "string",
                      name: "title",
                      title: "Group title"
                    },
                    {
                      type: "array",
                      name: "courses",
                      title: "Courses",
                      of: [
                        {
                          type: "object",
                          name: "Course",
                          fields: [
                            {
                              type: "string",
                              name: "title",
                              title: "Course title"
                            },
                            {
                              type: "text",
                              name: "description",
                              title: "Description"
                            },
                            {
                              type: "string",
                              name: "extra_text",
                              title: "Extra text"
                            },
                            {
                              name: "description_size",
                              title: "Description size",
                              type: "string",
                              options: {
                                list: [
                                  { title: "Small", value: "small" },
                                  { title: "Medium", value: "medium" },
                                  { title: "Large", value: "large" },
                                ],
                              },
                              initialValue: "medium"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        },
      ]
    },

    {
      name: 'menuPageContent',
      group: "menuPage",
      type: 'array',
      title: 'Menu page - sections',
      of: [
        { type: 'menusContent' },
        { type: 'hero' },
        { type: 'bannerWithText' },
        { type: 'space' },
        { type: 'textContentCenter' },
        { type: 'imageWithText' },
        { type: 'imageFullWidth' },
        { type: 'eventsSlider' },
        { type: 'details' },
        { type: 'event' },
        { type: 'newsletter' },
        { type: 'contact' },
        { type: 'richtext' },
      ],
      initialValue: [
        {
          _type: 'menusContent',
        },
      ]
    },

    {
      name: 'address',
      group: 'general',
      type: 'string',
      title: 'Address'
    },
    {
      name: 'postalCode',
      group: 'general',
      type: 'string',
      title: 'Postal Code'
    },
    {
      name: 'phoneNumber',
      group: 'general',
      type: 'string',
      title: 'Phone Number',
      validation: Rule => Rule.regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/).error('Invalid Phone Number')
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    },
    prepare({ title, media }) {
      return {
        title,
        media
      };
    },
  },
};
