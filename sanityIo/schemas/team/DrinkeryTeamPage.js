
export default {
    name: 'DrinkeryTeamSection',
    title: "Drinkery Team Section",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'contentPreTitle',
            title: 'Pre Title',
            type: 'string',
        },
        {
            name: 'contentTitle',
            title: 'Large Title',
            type: 'string',
        },
        {
            name: 'contentTexts',
            title: 'Content Text',
            type: 'array',
            of: [{type: 'text'}]
        },
        {
            name: 'teamList',
            title: 'The Team',
            type: 'array',
            of: [{type: 'reference', to: {type: 'DrinkeryTeamMember'}}]
        }
    ]
}



