import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import record from './documents/record.js'
import genre from './documents/genre.js'
import artist from './documents/artist.js'
import instrument from './documents/instrument.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    record,
    artist,
    genre,
    instrument
  ]),
})
