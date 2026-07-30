import { useEffect, useRef } from 'react';
import type { Creator } from '@/types/creator';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Tag, VerifiedPartnerTag } from '@/components/ui/Tag';
import { formatCount } from '@/utils/format';
import styles from './ExpandedCreatorCard.module.css';

interface ExpandedCreatorCardProps {
  creator: Creator;
  onCollapse: () => void;
  onContact: (creator: Creator) => void;
}

export function ExpandedCreatorCard({
  creator,
  onCollapse,
  onContact,
}: ExpandedCreatorCardProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [creator.id]);

  return (
    <article ref={ref} className={styles.card}>
      <button
        className={styles.close}
        onClick={onCollapse}
        aria-label={`Collapse ${creator.name}'s profile`}
      >
        ✕
      </button>

      <div className={styles.layout}>
        <div className={styles.profile}>
          <header className={styles.header}>
            <Avatar src={creator.photoUrl} name={creator.name} size={96} />
            <div>
              <h2 className={styles.name}>{creator.name}</h2>
              <a
                className={styles.handle}
                href={creator.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {creator.handle}
              </a>
            </div>
          </header>

          <p className={styles.blurb}>{creator.blurb}</p>

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
        </div>

        <div className={styles.statsColumn}>
          <dl className={styles.statGrid}>
            <div>
              <dt>Instagram</dt>
              <dd>{formatCount(creator.instagramFollowers)}</dd>
            </div>
            <div>
              <dt>TikTok</dt>
              <dd>
                {creator.tiktokFollowers === null
                  ? 'Not on TikTok'
                  : formatCount(creator.tiktokFollowers)}
              </dd>
            </div>
            <div>
              <dt>Avg. views</dt>
              <dd>{formatCount(creator.avgViews)}</dd>
            </div>
          </dl>

          <div className={styles.packageRow}>
            <span className={styles.packageLabel}>Package includes</span>
            <span className={styles.packageValue}>{creator.packageIncludes}</span>
          </div>
        </div>
      </div>

      <div className={styles.note}>
        <p className={styles.noteLabel}>A note from us</p>
        <p className={styles.noteBody}>{creator.agencyNote}</p>
        <p className={styles.noteSignature}>— The team</p>
      </div>

      <footer className={styles.footer}>
        <Button size="lg" onClick={() => onContact(creator)}>
          Submit an Offer to {creator.name.split(' ')[0]}
        </Button>
        <Button variant="secondary" size="lg" onClick={onCollapse}>
          Back to all creators
        </Button>
      </footer>
    </article>
  );
}
