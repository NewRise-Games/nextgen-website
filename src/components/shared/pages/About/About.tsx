import styles from "./About.module.scss";

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.hero}>
        <h1>ABOUT NEXTGEN RP</h1>
        <p>
          NextGen Role Play is a modern roleplay project focused on quality
          gameplay, custom systems and a unique player experience.
        </p>
      </div>

      <div className={styles.features}>
        <div className={styles.card}>
          <h3>CUSTOM SYSTEMS</h3>
          <p>
            Unique mechanics and gameplay features created specifically for
            NextGen RP.
          </p>
        </div>

        <div className={styles.card}>
          <h3>MODERN LAUNCHER</h3>
          <p>
            Fast updates, automatic installation and a comfortable game launch.
          </p>
        </div>

        <div className={styles.card}>
          <h3>ACTIVE COMMUNITY</h3>
          <p>
            Events, updates and a friendly environment for every player.
          </p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <h2>1+</h2>
          <span>Game Server</span>
        </div>

        <div className={styles.stat}>
          <h2>50+</h2>
          <span>Custom Systems</span>
        </div>

        <div className={styles.stat}>
          <h2>24/7</h2>
          <span>Support</span>
        </div>

        <div className={styles.stat}>
          <h2>2026</h2>
          <span>Project Launch</span>
        </div>
      </div>
      
    </section>
  );
};