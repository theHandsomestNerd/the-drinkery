
export default {
    name: 'DrinkerySpecialsSection',
    title: "Drinkey - Specials Section",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'contentTitle',
            title: 'Large Title',
            type: 'string',
        },
        {
            name: 'subTitle',
            title: 'Small Title',
            type: 'string',
        },
        {
            name: 'theSpecials',
            title: 'specials',
            type: 'array',
            of: [{type:"drinkerySpecial"
            }]
        },
        // {
        //     name: 'ctaButtonText',
        //     title: 'CTA Button Text',
        //     type: 'string'
        // },
        // {
        //     name: 'ctaButtonLink',
        //     title: 'CTA Button Link',
        //     type: 'string'
        // }
    ],
}



