import React from 'react';
import styles from './index.module.scss';

export default function DeveloperExperts() {
  return (
    <div className={styles.developerExperts}>
      <header>
        <h3 className={styles.developerExpertsTitle}>精选 Ionic 开发者专家项目</h3>
        <p className={styles.developerExpertsDescription}>
          通过社区成员制作的优质教育资源，扩展你的 Ionic 知识。
        </p>
      </header>
      <div className={styles.developerExpertsLinks}>
        <a href="https://ionicacademy.com" target="_blank" rel="noopener noreferrer">
          Ionic Academy →
        </a>
        <a href="https://ionicstart.com" target="_blank" rel="noopener noreferrer">
          Ionic Start →
        </a>
        <a href="https://ionicthemes.com" target="_blank" rel="noopener noreferrer">
          Ionic Themes →
        </a>
        <a href="https://ionicreacthub.com" target="_blank" rel="noopener noreferrer">
          Ionic React Hub →
        </a>
      </div>
    </div>
  );
}
