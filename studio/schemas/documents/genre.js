export default {
    title: 'Genre',
    name: 'genres',
    type: 'document',
    fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
		},
        {
            title: 'Artists',
            description: 'Chose the artists who fall under this category',
            name: 'genre',
            type: 'array',
                of: [{
                    type: 'reference',
                    to: [{type: 'artist'}]
                }]
        }
	]
}