export default {
    name: 'employeeShift',
    title: 'Employee Shift',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'employeeRef',
            title: 'The Employee',
            type: 'reference',
            to: {type: 'DrinkeryTeamMember'}
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'startTime',
            title: 'Start Time',
            type: 'string',
        },
        {
            name: 'endTime',
            title: 'End Time',
            type: 'string',
        },
    ]
}
