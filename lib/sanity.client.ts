import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, token, useCdn } from '@/sanity/env';

const sharedConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn
} as const;

export const client = createClient(sharedConfig);

export const previewClient = createClient({
  ...sharedConfig,
  useCdn: false,
  token
});

export type { SanityDocument } from 'next-sanity';
