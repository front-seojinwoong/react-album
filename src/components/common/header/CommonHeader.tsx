import ST from "./CommonHeader.module.scss";

const CommonHeader = () => {
  return (
    <header className={ST.header}>
      <div className={ST.header__logoBox}>
        <img className={ST.header__logoBox__logo} src="src/assets/images/image-logo.png" alt="" />
        <span className={ST.header__logoBox__title}>photosplash</span>
      </div>
      <div className={ST.header__profileBox}>
        <button className={ST.header__profileBox__button}>사진제출</button>
        <button className={ST.header__profileBox__button}>북마크</button>
        <span className={ST.header__profileBox__userName}>구디인</span>
      </div>
    </header>
  )
}

export default CommonHeader