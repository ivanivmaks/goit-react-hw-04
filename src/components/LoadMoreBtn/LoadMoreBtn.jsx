import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, loading }) {
  return (
    <button disabled={loading} className={css.loadBtn} onClick={onClick}>
      {loading ? "Loading" : "Load more"}
    </button>
  );
}
