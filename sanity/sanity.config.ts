import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'portfolio-next-2',

  projectId: '14clli2r',
  dataset: 'production',

  plugins: [deskTool(),],

  schema: {
    types: schemas,
  },
})
