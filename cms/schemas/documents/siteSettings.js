import {CogIcon} from "@sanity/icons";

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site configuration',
  icon: CogIcon,
  // __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'header', title: 'Header' },
    { name: 'footer', title: 'Footer' },
    { name: 'social', title: 'Social' },
    { name: 'general', title: 'General' },
  ],
  fieldsets: [
    { name: 'header', title: 'Header' },
    { name: 'footer', title: 'Footer' },
    { name: 'social', title: 'Social' },
    { name: 'general', title: 'General' },
  ],
  fields: [
    {
      name: "site",
      title: "Site",
      readOnly: true,
      hidden: true,
      type: "string",
      options: {
        list: [
          { title: "Noble33", value: "noble33" },
          { title: "Casa Madera", value: "casaMadera" },
          { title: "Sparrow", value: "sparrow" },
        ],
      },
    },
    {
      name: 'mainNav',
      type: 'array',
      title: 'Main nav menu',
      description: 'Select pages for the overlay menu.',
      group: 'header',
      fieldset: 'header',
      of:[
        {type: "links"}
      ]
    },
    {
      type: "image",
      title: "Menu image",
      name: "menuImage",
      group: 'header',
      fieldset: 'header',
      description: `
        Recommended size: 500x960, Aspect ratio: 52:100, Max file size: 350kb
      `
    },
    {
      name: "alt_text",
      type: "string",
      title: "Menu image - alt Text"
    },
    {
      name: 'secondHeaderNav',
      type: 'array',
      title: 'Second nav menu',
      group: 'header',
      fieldset: 'header',
      of:[
        {type: "links"}
      ]
    },
    {
      name: 'footerNav',
      type: 'array',
      title: 'Footer nav menu',
      group: 'footer',
      fieldset: 'footer',
      of:[
        {type: "links"}
      ]
    },
    {
      name: 'footer_noble_link',
      type: 'string',
      title: 'Footer Noble33 link',
      group: 'footer',
      fieldset: 'footer',
      hidden: ({document}) => document?.site == "noble33"
    },
    {
      name: 'facebookHandle',
      type: 'url',
      title: 'Facebook handle',
      placeholder: 'link',
      group: 'social',
      fieldset: 'social',
    },
    {
      name: 'instagramHandle',
      type: 'url',
      title: 'Instagram Handle',
      placeholder: 'link',
      group: 'social',
      fieldset: 'social',
    },
    {
      name: 'spotifyHandle',
      type: 'url',
      title: 'Spotify handle',
      placeholder: 'link',
      group: 'social',
      fieldset: 'social',
      hidden: ({document}) => document?.site == "noble33"

    },
    {
      name: 'soundCloudHandle',
      type: 'url',
      title: 'SoundCloud Handle',
      placeholder: 'link',
      group: 'social',
      fieldset: 'social',
      hidden: ({document}) => document?.site === "noble33"
    },
    {
      name: 'contact_section',
      title: "Contact section",
      type: 'array',
      of: [
        {
          type: 'object',
          name: "contact_option",
          title: "Contact Option",
          fields:[
            {
              name: "contact_option_text",
              title: "Contact option text",
              type: "string"
            },
            {
              name: "contact_option_link",
              title: "Contact option link",
              type: "url"
            },
            {
              name: "contact_option_icon",
              title: "Contact option icon",
              type: "image"
            }
          ]
        }
      ],
      group: 'general',
      fieldset: 'general',
      hidden: ({document}) => document?.site != "casaMadera"
    },
    {
      name: 'schedules',
      title: "Schedules",
      type: 'array',
      of: [
        {
          type: 'object',
          name: "schedule",
          title: "Schedule",
          fields:[
            {
              name: "schedule_title",
              title: "Schedule title",
              type: "string"
            },
            {
              name: "schedule_options",
              title: "Schedule options",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "schedule_option",
                  title: "Schedule option",
                  fields: [
                    {
                      type: "string",
                      name: "days",
                      title: "Days"
                    },
                    {
                      type: "string",
                      name: "hours",
                      title: "Hours"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      group: 'general',
      fieldset: 'general',
      hidden: ({document}) => document?.site != "casaMadera"
    },
    {
      name: 'address',
      title: "Address",
      type: "text",
      group: 'general',
      fieldset: 'general',
      hidden: ({document}) => document?.site != "casaMadera"
    },
    {
      name: 'about_us',
      title: "About us (Summary)",
      type: "text",
      group: 'general',
      fieldset: 'general',
      hidden: ({document}) => document?.site != "casaMadera"
    },
    {
      name: 'privacyPolicyHandle',
      type: 'links',
      title: 'Privacy policy handle',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'cookiesPreferencesHandle',
      type: 'links',
      title: 'Cookies preferences Handle',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'newsletter_text',
      type: 'string',
      title: 'Newsletter Title',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'reservationsButton',
      type: 'links',
      title: 'Reservations Button',
      group: 'header',
      fieldset: 'header',
    },
  ],
  preview: {
    select: {
      site: "site",
    },
    prepare({site}) {

      const sites = {
        casaMadera: "Casa madera",
        noble33: "Noble33",
        sparrow: "Sparrow"
      }

      return {
        title: sites[site], 
      }
    },
  },
}