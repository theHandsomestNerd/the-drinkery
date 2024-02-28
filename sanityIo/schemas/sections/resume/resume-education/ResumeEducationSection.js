export default {
    name: 'ResumeEducationSection',
    title: 'Resume Education Section',
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
            name: 'educationExperiences',
            title: 'Education Experiences',
            type: "array",
            of: [
                {type: "reference",
                    to:
                        [{type: "ResumeEducation"}],
                }
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