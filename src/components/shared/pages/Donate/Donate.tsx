import styles from "./Donate.module.scss";

export const Donate = () => {
  return (
    <section className={styles.donate}>
      <div className={styles.hero}>
        <h1>DONATE STORE</h1>
        <p>Support NextGen Role Play and receive unique rewards.</p>
      </div>

      <div className={styles.donateForm}>
        <h2>DONATE NOW</h2>

        <input
          type="text"
          placeholder="Enter your nickname"
        />

        <input
          type="number"
          placeholder="Enter amount (€)"
        />

        <button>
          DONATE NOW
        </button>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>VIP</h2>
          <p>Basic privileges</p>
          <span>€5</span>

          <button>
            BUY NOW
          </button>
        </div>

        <div className={styles.card}>
          <h2>PREMIUM</h2>
          <p>Extended privileges</p>
          <span>€10</span>

          <button>
            BUY NOW
          </button>
        </div>

        <div className={styles.card}>
          <h2>ULTIMATE</h2>
          <p>Maximum privileges</p>
          <span>€20</span>

          <button>
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};