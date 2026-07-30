import styles from './Tag.module.css';
import { CONTENT_TYPE_LABELS, type ContentType } from '@/types/creator';

export function Tag({ type }: { type: ContentType }) {
  return <span className={styles.tag}>{CONTENT_TYPE_LABELS[type]}</span>;
}

export function VerifiedPartnerTag() {
  return <span className={`${styles.tag} ${styles.verified}`}>Verified Partner</span>;
}
