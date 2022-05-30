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
            ]
        },
        {
            title: 'Title of record',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: doc => `${doc.name} (${doc.releasedIn})`
                // source: 'name'
            }
        },
        {
            title: 'Year',
            description: 'Year of release',
            name: 'releasedIn',
            type: 'number',
            options: {
                dateFormat: 'YYYY'
            }
            
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
            // type: 'array',
            //     of: [{type: 'block'}]
        },
        // {
        //     title: 'Cover',
        //     name: 'cover',
        //     type: 'image'
        // },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        },
        {
            title: 'On sale',
            description: 'Set to on if item is on sale',
            name: 'sale',
            type: 'boolean'
        }

    ]

}