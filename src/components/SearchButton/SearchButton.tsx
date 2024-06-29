import styles from "./SearchButton.module.css";

const SearchButton = () => {
  return (
    <div>
      <button type="submit" className={styles.button}>
        <span className="relative">
          <span className={styles.btnstatic}>Search</span>
          <span className={styles.btnhover}>Search</span>
        </span>
        <svg className={styles.btncontainer} viewBox="0 0 130 50">
          <rect
            x="0"
            y="0"
            width="130"
            height="50"
            rx="25"
            ry="25"
            className={styles.line1}
          ></rect>
          <rect
            x="0"
            y="0"
            width="130"
            height="50"
            rx="25"
            ry="25"
            className={styles.line2}
          ></rect>
          <rect
            x="0"
            y="0"
            width="130"
            height="50"
            rx="25"
            ry="25"
            className={styles.line3}
          ></rect>
          <rect
            x="0"
            y="0"
            width="130"
            height="50"
            rx="25"
            ry="25"
            className={styles.line4}
          ></rect>
        </svg>
      </button>
    </div>
  );
};

export default SearchButton;
