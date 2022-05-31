export default {
    title: 'Record',
    name: 'record',
    type: 'document',
    fields: [
        {
            title: 'Artist',
            name: 'artist',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'artist'}
                    ]
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            title: 'Title of record',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: doc => `${doc.name} (${doc.releasedIn})`

            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Year',
            description: 'Year of release',
            name: 'releasedIn',
            type: 'number',
            options: {
                dateFormat: 'YYYY'
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Genre',
            name: 'genre',
            type: 'array',
            of: [
                { type: 'reference', 
                    to: [{
                        type: 'genres'
                    }]
                }
                
            ]
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            title: 'On sale',
            description: 'Set to on if item is on sale',
            name: 'sale',
            type: 'boolean'
        }

    ]

}