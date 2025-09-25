const required = (value: string | undefined, key: string) => {
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
};

export const projectId = required(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const dataset = required(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'NEXT_PUBLIC_SANITY_DATASET'
);

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-18';

export const studioBasePath = '/studio';

export const useCdn = process.env.NODE_ENV === 'production' && !process.env.SANITY_API_TOKEN;

export const token = process.env.SANITY_API_TOKEN;

export const previewSecret = process.env.SANITY_PREVIEW_SECRET;
