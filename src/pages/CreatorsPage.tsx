import { useEffect, useMemo, useState } from 'react';
import type { Creator } from '@/types/creator';
import { fetchCreators } from '@/services/creatorService';
import { CreatorCard } from '@/features/creators/CreatorCard';
import { ExpandedCreatorCard } from '@/features/creators/ExpandedCreatorCard';
import { FilterBar } from '@/features/creators/FilterBar';
import { ContactModal } from '@/features/creators/ContactModal';
import {
  DEFAULT_FILTERS,
  applyFilters,
  type CreatorFilters,
} from '@/features/creators/filtering';
import styles from './CreatorsPage.module.css';

export function CreatorsPage() {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<CreatorFilters>(DEFAULT_FILTERS);
  const [contactTarget, setContactTarget] = useState<Creator | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchCreators()
      .then((data) => {
        if (!cancelled) setCreators(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const visible = useMemo(() => applyFilters(creators, filters), [creators, filters]);

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>Meet the Creators</h1>
          <p className={styles.subtitle}>
            {creators.length} wine country and Bay Area creators ready to share your story with
            their community.
          </p>
        </div>
      </header>

      <FilterBar filters={filters} onChange={setFilters} />

      <p className={styles.resultCount} aria-live="polite">
        {loading
          ? 'Loading creators…'
          : `Showing ${visible.length} of ${creators.length} creators`}
      </p>

      {!loading && visible.length === 0 && (
        <div className={styles.empty}>
          <h2>No creators match those filters</h2>
          <p>Try choosing a different opportunity type or adjusting your search.</p>
          <button className={styles.resetLink} onClick={() => setFilters(DEFAULT_FILTERS)}>
            Reset all filters
          </button>
        </div>
      )}

      <div className={styles.grid}>
        {visible.map((creator) => {
          if (creator.id === expandedId) {
            return (
              <div key={creator.id} className={styles.expandedSlot}>
                <ExpandedCreatorCard
                  creator={creator}
                  onCollapse={() => setExpandedId(null)}
                  onContact={setContactTarget}
                />
              </div>
            );
          }
          return (
            <CreatorCard
              key={creator.id}
              creator={creator}
              onContact={setContactTarget}
              onExpand={(c) => setExpandedId(c.id)}
            />
          );
        })}
      </div>

      {contactTarget && (
        <ContactModal creator={contactTarget} onClose={() => setContactTarget(null)} />
      )}
    </div>
  );
}
