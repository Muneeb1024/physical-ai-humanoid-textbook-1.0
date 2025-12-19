import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Complete 13-Week Curriculum',
    // Using a generic robot SVG since we don't have the specific ones yet
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Master Physical AI and Humanoid Robotics through our comprehensive 13-week course,
        structured into 4 progressive modules covering ROS 2, Gazebo, NVIDIA Isaac™, and VLA systems.
      </>
    ),
  },
  {
    title: 'Interactive Learning Experience',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Engage with interactive simulators, 3D models, and executable code examples
        that bring robotics concepts to life within the textbook interface.
      </>
    ),
  },
  {
    title: 'AI-Powered Assistance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Get instant help from our RAG-powered AI assistant that answers questions
        based on textbook content and provides personalized guidance.
      </>
    ),
  },
  {
    title: 'Personalized Learning Paths',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Content adapts to your expertise level, ensuring optimal learning pace
        and depth based on your background in robotics and AI.
      </>
    ),
  },
  {
    title: 'Multilingual Support',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Access content in English and Urdu with seamless language switching
        to accommodate diverse learning preferences.
      </>
    ),
  },
  {
    title: 'Progress Tracking & Assessments',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Monitor your learning journey with detailed progress tracking,
        assessments, and personalized recommendations for improvement.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('card', styles.featureCard)}>
        <div className="text--center padding-ver--md">
          <div className={styles.featureIcon}>
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="padding-horiz--md">
            <Heading as="h3" className={styles.featureTitle}>
              {title}
            </Heading>
            <p className={styles.featureDescription}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.features, 'features')}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
