import ST from "./CommonSearchBar.module.scss";

const CommonSearchBar = () => {
  return (
    <div className={ST.searchBar}>
      <div className={ST.searchBar__search}>
        <input type="text" placeholder="찾으실 이미지를 검색하세요." className={ST.searchBar__search__input}/>
        <img src="src/assets/icons/icon-search.svg" alt="" />
      </div>
    </div>
  )
}

export default CommonSearchBar