import ST from './CommonFooter.module.scss';

const CommonFooter = () => {
  return (
    <footer className={ST.footer}>
      <div className={ST.pagination}>
        <button className={ST.pagination__button}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="" />
        </button>
        <span>1</span>
        <button className={ST.pagination__button}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="" />
        </button>
      </div>
    </footer>
  )
}

export default CommonFooter