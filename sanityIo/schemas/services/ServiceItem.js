
export default {
  name: 'ServiceItem',
  title: 'Service Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imageSrc',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'iconImageSrc',
      title: 'Icon Image',
      type: 'image',
    },
    {
      name: 'backgroundImageSrc',
      title: 'Background Image',
      type: 'image',
    },
    {
      name: 'imageSrcAltText',
      title: 'Image Alt Text',
      type: 'string',
    },
    {
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'text'
    },
    {
      name: 'learnMoreText',
      title: 'Learn More Text',
      type: 'string'
    },
    {
      name: 'learnMoreLink',
      title: 'Learn More Link',
      type: 'string'
    },
    {
      name: 'educationPageTitle',
      title: 'Education Page Title',
      type: 'string',
    },
    {
      name: 'educationPageSlimHeroImage',
      title: 'Education Page Slim Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'extendedDescriptions',
      title: 'Extended Description Content',
      type: 'array',
      of:[{type: 'text'}]
    },
    {
      name: 'benefitsOfServiceTitle',
      title: 'Benefits of Service Title',
      type: 'string',
    },
    {
      name: 'benefitsOfServiceContents',
      title: 'Benefits of Service Contents',
      type: 'array',
      of:[{type: 'text'}]
    },
    {
      name: 'benefitsOfServiceBullets',
      title: 'Benefits of Service Bullets',
      type: 'array',
      of:[{type: 'string'}]
    },
    {
      name: 'serviceAmenities',
      title: 'Service Amenities',
      type: 'array',
      of: [{type: 'reference', to: {type: 'ServiceAmenityItem'}}]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'imageSrc',
    },
  },
}



