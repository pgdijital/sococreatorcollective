import type { KeyboardEvent } from 'react';
import type { Creator } from '@/types/creator';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Tag, VerifiedPartnerTag } from '@/components/ui/Tag';
import { formatCount } from '@/utils/format';
import styles from './CreatorCard.module.css';

interface CreatorCardProps {
  creator: Creator;
  onContact: (creator: Creator) => void;
  onExpand: (creator: Creator) => void;
}

export function CreatorCard({ creator, onContact, onExpand }: CreatorCardProps) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onExpand(creator);
    }
  };

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      aria-expanded={false}
      aria-label={`View ${creator.name}'s full profile`}
      onClick={() => onExpand(creator)}
      onKeyDown={handleKeyDown}
    >
      <span className={styles.expandHint} aria-hidden="true">
        Full profile ↗
      </span>

      <header className={styles.header}>
        <Avatar src={creator.photoUrl} name={creator.name} size={72} />
        <div>
          <h3 className={styles.name}>{creator.name}</h3>
          <p className={styles.handle}>{creator.handle}</p>
        </div>
      </header>

      <p className={styles.blurb}>{creator.blurb}</p>

      <dl className={styles.stats}>
        <div className={styles.stat}>
          <dt>Instagram</dt>
          <dd>{formatCount(creator.instagramFollowers)}</dd>
        </div>
        <div className={styles.stat}>
          <dt>TikTok</dt>
          <dd>
            {creator.tiktokFollowers === null ? '—' : formatCount(creator.tiktokFollowers)}
          </dd>
        </div>
        <div className={styles.stat}>
          <dt>Avg. views</dt>
          <dd>{formatCount(creator.avgViews)}</dd>
        </div>
      </dl>

      <ul className={styles.tags}>
        {creator.verifiedPartner && (
          <li>
            <VerifiedPartnerTag />
          </li>
        )}
        {creator.contentTypes.map((type) => (
          <li key={type}>
            <Tag type={type} />
          </li>
        ))}
      </ul>

      <footer className={styles.footer}>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onContact(creator);
          }}
        >
          Submit an Offer
        </Button>
      </footer>
    </article>
  );
}
