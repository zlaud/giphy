import styles from "./SearchButton.module.css";

const SearchButton = () => {
  return (
    <div>
      <button type="submit" className={styles.button}>
        <span className="relative">
          <span className={styles.btnstatic}>Submit</span>
          <span className={styles.btnhover}>Submit</span>
        </span>
        <svg className={styles.btncontainer} viewBox="0 0 180 60">
          <rect
            x="0"
            y="0"
            width="180"
            height="60"
            rx="30"
            ry="30"
            className={styles.glowblur}
          ></rect>
          <rect
            x="0"
            y="0"
            width="180"
            height="60"
            rx="30"
            ry="30"
            className={styles.glowline}
          ></rect>
        </svg>
      </button>
    </div>
  );
};

export default SearchButton;
