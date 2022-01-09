import styles from "./Blog.module.scss";
import SimpleSlider from "./Slider";
const Blog = () => {
  return (
    <div className={`${styles.blog} ${"container"}`}>
      <div className={styles.headingDiv}>
        <h3 className={styles.heading}>Блог</h3>
        <a className={styles.link} href="/">
          All Articles
        </a>
      </div>
      <SimpleSlider />
    </div>
  );
};
export default Blog;
