import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schema';
import { apiVersion, dataset, projectId, studioBasePath } from './sanity/env';

export default defineConfig({
  name: 'customslens',
  title: 'CustomsLens Studio',
  projectId,
  dataset,
  basePath: studioBasePath,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes
  }
});
