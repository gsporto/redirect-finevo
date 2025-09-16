import styles from './maintenance.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
              fill="currentColor"
            />
            <path
              d="M19 15L20.09 19.26L24 20L20.09 20.74L19 25L17.91 20.74L14 20L17.91 19.26L19 15Z"
              fill="currentColor"
            />
            <path
              d="M5 15L6.09 19.26L10 20L6.09 20.74L5 25L3.91 20.74L0 20L3.91 19.26L5 15Z"
              fill="currentColor"
            />
          </svg>
        </div>
        
        <h1 className={styles.title}>Under Maintenance</h1>
        
        <p className={styles.description}>
          We're currently performing scheduled maintenance to improve your experience. 
          We'll be back online shortly.
        </p>
        
        <div className={styles.status}>
          <div className={styles.statusItem}>
            <div className={styles.statusDot}></div>
            <span>System Maintenance in Progress</span>
          </div>
        </div>
        
        <div className={styles.footer}>
          <p>Thank you for your patience</p>
        </div>
      </div>
    </div>
  );
}
