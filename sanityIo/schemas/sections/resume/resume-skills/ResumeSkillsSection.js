export default {
    name: 'ResumeSkillSection',
    title: 'Resume Skills Section',
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
            name: 'theme',
            title: 'Theme',
            type: 'reference',
            to:[{type: 'MuiTheme'}]
        },
        {
            name: 'introduction',
            title: 'Introduction',
            type: 'text',
        },
        {
            name: 'skillsets',
            title: 'Skillsets',
            type: "array",
            of: [{type: "reference", to:{type:"ResumeSkillset"}},
            ]
        },
        {
            name: 'searchableOnPages',
            title: 'Make Searchable on pages',
            type: 'array',
            of:[{type: "reference", to: {type:"homePage"}}]
        },
    ]
}