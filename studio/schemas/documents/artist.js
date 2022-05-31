export default {
    title: 'Artist',
    name: 'artist',
    type: 'document',
    fields: [
        {
            title: 'Name of Artist',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Portrait / Picture',
            name: 'image',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            title: 'Releases',
            name: 'releases',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'record'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Signature Instrument',
            name: 'signature',
            type: 'reference',
            to: [{type: 'instrument'}]
        },
        {
            title: 'Biography',
            name: 'bio',
            type: 'text'
        },
        {
            title: 'Genres',
            description: 'Select relevant genres from list',
            name: 'genre',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{
                    type: 'genres'
                }]
            }]
            
        }
    ]
}