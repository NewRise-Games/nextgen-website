import styles from "./HowToPlayModal.module.scss";

interface Props {
  onClose: () => void;
}

export const HowToPlayModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.close}
          onClick={onClose}
        >
          ✕
        </button>

        <div className={styles.header}>
          <span>GET STARTED</span>

          <h2>HOW TO START PLAYING?</h2>

          <p>
            Choose the most convenient way to join NextGen RP.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h3>Furexa Launcher</h3>

            <ul>
              <li>Download launcher</li>
              <li>Create account</li>
              <li>Launch NextGen RP</li>
              <li>Start playing</li>
            </ul>

            <button className={styles.primary}>
              DOWNLOAD LAUNCHER
            </button>
          </div>

          <div className={styles.card}>
            <h3>SA:MP Client</h3>

            <ul>
              <li>Install GTA San Andreas</li>
              <li>Install SA:MP</li>
              <li>Add server</li>
              <li>Connect & Register</li>
            </ul>

            <div className={styles.ipBox}>
              play.nextgen-rp.com
            </div>

            <button className={styles.secondary}>
              PLAY VIA SA:MP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};