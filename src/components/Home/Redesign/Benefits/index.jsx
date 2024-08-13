import React from 'react';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

export default function HomepageBenefits() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Why build with Weaviate</h2>

        <p className={styles.subtitle}>
          Our open source community and AI-native database empower developers to
          build and scale the future.
        </p>
      </div>

      <div className={styles.benefitsContainer}>
        <div className={styles.benefit}>
          <div className={styles.benefitText}>
            <h4>Built developer and AI-first</h4>
            <p>
              Prototype, scale, and maintain AI-native applicationsmore easily.
            </p>
            <Link to="">Learn more</Link>
          </div>
          <div className={styles.icon}></div>
        </div>
        <div className={styles.benefit}>
          <div className={styles.benefitText}>
            <h4>Built developer and AI-first</h4>
            <p>
              Prototype, scale, and maintain AI-native applicationsmore easily.
            </p>
            <Link to="">Learn more</Link>
          </div>
          <div className={styles.icon}></div>
        </div>
        <div className={styles.benefit}>
          <div className={styles.benefitText}>
            <h4>Built developer and AI-first</h4>
            <p>
              Prototype, scale, and maintain AI-native applicationsmore easily.
            </p>
            <Link to="">Learn more</Link>
          </div>
          <div className={styles.icon}></div>
        </div>
        <div className={styles.benefit}>
          <div className={styles.benefitText}>
            <h4>Built developer and AI-first</h4>
            <p>
              Prototype, scale, and maintain AI-native applicationsmore easily.
            </p>
            <Link to="">Learn more</Link>
          </div>
          <div className={styles.icon}></div>
        </div>
      </div>
    </div>
  );
}
