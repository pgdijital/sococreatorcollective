import type { Creator } from '@/types/creator';
import { MOCK_CREATORS } from '@/data/mockCreators';

/**
 * Data access layer. The UI only ever talks to these functions; the data
 * itself is static and bundled at build time.
 */
const SIMULATED_LATENCY_MS = 300;

export async function fetchCreators(): Promise<Creator[]> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));
  return MOCK_CREATORS;
}

export async function fetchCreatorById(id: string): Promise<Creator | undefined> {
  const creators = await fetchCreators();
  return creators.find((creator) => creator.id === id);
}
