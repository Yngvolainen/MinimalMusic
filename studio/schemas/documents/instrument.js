export default {
    title: 'Instrument',
    name: 'instrument',
    type: 'document',
    fields: [
        {
            title: 'Type of instrument',
            name: 'instrument',
            type: 'string'
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Producer',
            name: 'producer',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Picture',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        }
    ],
}