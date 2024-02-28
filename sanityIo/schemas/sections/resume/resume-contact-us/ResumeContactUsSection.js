
export default {
  name: 'ResumeContactUsSection',
  title: "Resume Contact Us Section",
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title of Section',
      type: 'string',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'reference',
      to:[{type: 'MuiTheme'}]
    },
    {
      name: 'formSubmitButtonText',
      title: 'Form Submit Button Text',
      type: 'string'
    },
    {
      name: 'searchableOnPages',
      title: 'Make Searchable on pages',
      type: 'array',
      of:[{type: "reference", to: {type:"homePage"}}]
    },

  ],
  preview: {
    select: {
      title: 'name',
      media: 'bgImageSrc',
    },
  },
}



