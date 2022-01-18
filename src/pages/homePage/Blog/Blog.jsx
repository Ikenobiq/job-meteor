import styles from "./Blog.module.scss";
import SimpleSlider from "./Slider";
const Blog = () => {
  return (
    <div className="container">
      <div className={styles.blog}>
        <div className={styles.headingDiv}>
          <h3 className={styles.heading}>Блог</h3>
          <a className={styles.link} href="/">
            All Articles
          </a>
        </div>
        <SimpleSlider className={styles.SimpleSlider} />
      </div>
    </div>
  );
};
export default Blog;
