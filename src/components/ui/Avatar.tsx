import { useState } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  name: string;
  size?: number;
}

/** Profile photo with an initials fallback if the image fails to load. */
export function Avatar({ src, name, size = 72 }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const dimensions = { width: size, height: size };

  if (failed) {
    const initials = name
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('');
    return (
      <div className={styles.fallback} style={{ ...dimensions, fontSize: size * 0.36 }}>
        {initials}
      </div>
    );
  }

  return (
    <img
      className={styles.avatar}
      style={dimensions}
      src={src}
      alt={`${name}'s profile photo`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
