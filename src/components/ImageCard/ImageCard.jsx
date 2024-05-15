import css from './ImageCard.module.css'

export default function ImageCard({ largeUrl, imgUrl, imgDesc, onclick }) {
    const handleClick = () => {
        onclick(largeUrl)
    }
  return (
    <div className={css.wrap}>
          <img className={css.image} src={imgUrl} alt={imgDesc} onClick={handleClick} />
    </div>
  );
}
