import React from 'react';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

export default function HomepageBenefitsV2() {
  return (
    <div className={styles.bgContainer}>
      <div className="container">
        <div className={styles.benefitsHolder}>
          <div className={styles.header}>
            <h2 className={styles.title}>Why build with Weaviate</h2>

            <p className={styles.subtitle}>
              We believe the best way to empower AI developers is through a
              vibrant community and accessible technology in an open-source
              ecosystem.
            </p>
            <span> We believe in building together. </span>
          </div>

          <div className={styles.benefitsContainer}>
            <div className={styles.benefit}>
              <div className={styles.benefitText}>
                <h4>Built developer and AI-first</h4>
                <p>
                  Prototype, scale, and maintain AI-native applicationsmore
                  easily.
                </p>
                <Link to="">Learn more</Link>
              </div>
              <div className={styles.icon}></div>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitText}>
                <h4>Cloud, model, and deployment agnostic </h4>
                <p>
                  Run anywhere and easily integrate with new ML models and
                  frameworks.
                </p>
                <Link to="">Learn more</Link>
              </div>
              <div className={styles.icon}></div>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitText}>
                <h4>Flexible cost-performance optimization</h4>
                <p>
                  Tailor resource consumption to the needs of your use case.
                </p>
                <Link to="">Learn more</Link>
              </div>
              <div className={styles.icon}></div>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitText}>
                <h4>Robust developer community and enablement resources</h4>
                <p>
                  Get help from an accessible community and education programs.
                </p>
                <Link to="">Learn more</Link>
              </div>
              <div className={styles.icon}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
