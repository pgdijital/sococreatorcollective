import { CONTENT_TYPES, CONTENT_TYPE_LABELS } from '@/types/creator';
import { SORT_OPTIONS, type CreatorFilters, type SortOption } from './filtering';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  filters: CreatorFilters;
  onChange: (filters: CreatorFilters) => void;
}

export function FilterBar({ filters, onChange }: FilterBarProps) {
  const update = (patch: Partial<CreatorFilters>) => onChange({ ...filters, ...patch });

  return (
    <div className={styles.bar}>
      <input
        type="search"
        className={styles.search}
        placeholder="Search creators, handles, and regions…"
        aria-label="Search creators"
        value={filters.search}
        onChange={(e) => update({ search: e.target.value })}
      />

      <label className={styles.field}>
        <span>Opportunity</span>
        <select
          value={filters.contentType}
          onChange={(e) => update({ contentType: e.target.value as CreatorFilters['contentType'] })}
        >
          <option value="all">All types</option>
          {CONTENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {CONTENT_TYPE_LABELS[type]}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Sort by</span>
        <select
          value={filters.sort}
          onChange={(e) => update({ sort: e.target.value as SortOption })}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
