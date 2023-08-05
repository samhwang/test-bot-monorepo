import { inferAsyncReturnType } from '@trpc/server';
import { CreateNetlifyContextOptions } from 'trpc-netlify-functions';
import { prisma } from 'db';

export function createContext({ event, context }: CreateNetlifyContextOptions) {
  return { event, context, prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;
