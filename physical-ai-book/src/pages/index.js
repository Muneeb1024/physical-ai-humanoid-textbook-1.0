import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start Learning - 13 Weeks ⏱️
            </Link>
            <Link
              className="button button--primary button--lg"
              to="/docs/module-1-ros2/intro"
              style={{ marginLeft: '1rem' }}>
              Jump to Module 1
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Physical AI & Humanoid Robotics`}
      description="Master the convergence of AI and Robotics with our comprehensive 13-week course">
      <HomepageHeader />
      <main>
        <section className={styles.introSection}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className={styles.introCard}>
                  <Heading as="h2" className={styles.introTitle}>
                    The Future of Robotics Education
                  </Heading>
                  <p className={styles.introText}>
                    Our comprehensive textbook combines cutting-edge AI with hands-on robotics to create an immersive learning experience.
                    Master the convergence of Physical AI and Humanoid Robotics through our structured 13-week curriculum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
