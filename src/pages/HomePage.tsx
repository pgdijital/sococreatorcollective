import { Link } from 'react-router-dom';
import { BusinessMap } from '@/features/home/BusinessMap';
import { MOCK_BUSINESSES } from '@/data/mockBusinesses';
import styles from './HomePage.module.css';

const BUSINESS_STEPS = [
  {
    title: 'Browse local creators',
    body: 'Explore profiles of real local creators. See their personality, their audience, and the kinds of businesses they love to feature.',
  },
  {
    title: 'Send an offer',
    body: 'Found a good fit? Contact us with your offer we\'ll help you with scheduling and a creative plan to show your business in the best light.',
  },
  {
    title: 'Reach your community organically',
    body: 'Once the video is posted, your business shows up in social feeds and search results for people who live nearby. Instead of an ad, it\'s a recommendation from a trusted community member.',
  },
];

const VALUE_PROPS = [
  {
    title: 'Authentic Voicing',
    body: 'A recommendation from a local creator lands differently than an advertisement. Their followers are the people your business is looking to target, and they trust their favorite creators to tell them where to go to eat, shop, and hang out.',
  },
  {
    title: 'Cost-effective by design',
    body: 'Rather than an ongoing digital ad campaign, or a monthly recurring marketing bill, a social post lives on the creator\'s account forever. Your one-time investment leads to a permanent boost in your organic internet presence.',
  },
  {
    title: 'Keeping It Local',
    body: 'Your marketing dollars now support a local creator instead of a national ad network. When the money stays local, businesses grow, creators get paid, and Sonoma County keeps its character.',
  },
];

export function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>Local Creators Build Community.</h1>
          <p className={styles.heroSubtitle}>
            Skip the Ineffective Digital Ads and Overpriced Marketing. Bring organic awareness to
            your business by supporting your neighbors and community members.
          </p>
          <div className={styles.heroActions}>
            <a href="#learn-more" className={styles.heroSecondary}>
              Learn More
            </a>
            <Link to="/creators" className={styles.heroCta}>
              Browse Creators
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapHeading}>
          <h2 className={styles.sectionTitle}>See It In Action</h2>
          <p className={styles.sectionLede}>
            Real videos made by your neighbors. Click a pin to watch the content our creators made
            on location.
          </p>
        </div>
        <BusinessMap businesses={MOCK_BUSINESSES} />
      </section>

      <section id="learn-more" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How it works for your business</h2>
          <div className={styles.cardGrid}>
            {BUSINESS_STEPS.map((step, index) => (
              <div key={step.title} className={styles.stepCard}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why local beats paid ads</h2>
          <div className={styles.cardGrid}>
            {VALUE_PROPS.map((prop) => (
              <div key={prop.title} className={styles.valueCard}>
                <h3>{prop.title}</h3>
                <p>{prop.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={`container ${styles.finalCtaInner}`}>
          <h2>Local creators are ready to tell your story.</h2>
          <p>
            From Healdsburg tasting rooms to Bodega Bay bluffs, find the voice that fits your
            business.
          </p>
          <Link to="/creators" className={styles.heroCta}>
            Meet the Creators
          </Link>
        </div>
      </section>
    </>
  );
}
