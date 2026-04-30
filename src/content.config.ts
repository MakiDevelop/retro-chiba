import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const langEnum = z.enum(['zh-tw', 'zh-cn', 'en', 'ja']);
const licenseEnum = z.enum(['CC-BY-SA-4.0', 'CC-BY-SA-3.0', 'CC-BY-SA-2.0', 'CC-BY-4.0', 'PD', 'fair-use', 'ai-generated', 'own']);

const imageRef = z.object({
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
  license: licenseEnum,
  author: z.string().optional(),
  source_url: z.string().url().optional(),
  rationale: z.string().optional(),
  rights_holder: z.string().optional(),
  tool: z.string().optional(),
});

const videoRef = z.object({
  youtube: z.string(),
  caption: z.string(),
  source: z.string(),
});

const curatedGame = z.object({
  title: z.string(),
  reason: z.string(),
});

const relatedConsole = z.object({
  slug: z.string(),
  label: z.string(),
  note: z.string(),
});

export const consoles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/consoles' }),
  schema: z.object({
    lang: langEnum,
    title: z.string(),
    qid: z.string().regex(/^Q\d+$/),
    gen: z.union([z.number().int().min(1).max(9), z.literal('h')]),
    kind: z.enum(['home', 'handheld', 'hybrid', 'addon']),
    maker: z.string(),
    release: z.object({
      jp: z.string().optional(),
      na: z.string().optional(),
      eu: z.string().optional(),
    }).partial(),
    sales: z.object({
      official: z.string().optional(),
      community: z.string().optional(),
      source: z.string().optional(),
    }).partial(),
    specs: z.record(z.string()).optional(),
    images: z.object({
      hero: imageRef.optional(),
      gallery: z.array(imageRef).default([]),
    }).default({}),
    videos: z.array(videoRef).default([]),
    notable_games: z.array(z.string()).default([]),
    curation: z.object({
      thesis: z.string().optional(),
      turning_point: z.string().optional(),
      local_memory: z.string().optional(),
    }).default({}),
    curated_games: z.array(curatedGame).default([]),
    related_consoles: z.array(relatedConsole).default([]),
  }),
});

export const collections = { consoles };
