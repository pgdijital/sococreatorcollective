import { useEffect } from 'react';
import type { Creator } from '@/types/creator';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  creator: Creator;
  onClose: () => void;
}

/**
 * Placeholder for the offer-submission flow; shows a coming-soon dialog.
 */
export function ContactModal({ creator, onClose }: ContactModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <Avatar src={creator.photoUrl} name={creator.name} size={64} />
        <h2 id="contact-modal-title" className={styles.title}>
          Work with {creator.name.split(' ')[0]}
        </h2>
        <p className={styles.body}>
          Direct offer submissions are coming soon! When the platform launches, you'll be able to send{' '}
          {creator.name} a paid-post offer directly from this page. Until then, please reach out to Tyler at <a href="mailto:tyler@mcbratneymedia.com">tyler@mcbratneymedia.com</a>. 
          Thank You for your interest!
        </p>
        <Button onClick={onClose}>Got it</Button>
      </div>
    </div>
  );
}
