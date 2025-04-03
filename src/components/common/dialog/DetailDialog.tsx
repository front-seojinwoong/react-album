import { CardDTO, Tag } from '@/pages/index/types/card';
import ST from './DetailDialog.module.scss';

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
}

const DetailDialog = ({data, handleDialog}: Props) => {
  const closeDialog = () => {
    handleDialog(false);
  }

  return (
    <div className={ST.container}>
      <div className={ST.container__dialog}>
        <div className={ST.container__dialog__header}>
          <div className={ST.close}>
            <button className={ST.close__button}>
              <span className="material-symbols-outlined" style={{ fontSize: 28 + 'px' }}></span>
            </button>
            <img src={data.user.profile_image.small} alt="사진작가 프로필 사진" className={ST.close__authorImage}/>
            <span className={ST.close__authorName}>{data.user.name}</span>
          </div>
          <div className={ST.bookmark}>
            <button className={ST.bookmark__button}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 + 'px' }}></span>
              북마크
            </button>
            <button className={ST.bookmark__button}>다운로드</button>
          </div>
        </div>
        <div className={ST.container__dialog__body}>
          <img src={data.urls.small} alt="상세이미지" className={ST.image}/>
        </div>
        <div className={ST.container__dialog__footer}>
          <div className={ST.infoBox}>
            <div className={ST.infoBox__item}>
              <span className={ST.infoBox__item__label}>이미지 크기</span>
              <span className={ST.infoBox__item__value}>{data.width} X {data.height}</span>
            </div>
            <div className={ST.infoBox__item}>
              <span className={ST.infoBox__item__label}>업로드</span>
              <span className={ST.infoBox__item__value}>{data.created_at.split('T')[0]}</span>
            </div>
            <div className={ST.infoBox__item}>
              <span className={ST.infoBox__item__label}>마지막 업데이트</span>
              <span className={ST.infoBox__item__value}>{data.updated_at.split('T')[0]}</span>
            </div>
            <div className={ST.infoBox__item}>
              <span className={ST.infoBox__item__label}>다운로드</span>
              <span className={ST.infoBox__item__value}>{data.likes}</span>
            </div>
          </div>
          <div className={ST.tagBox}>
            {data.tags.map((tag: Tag)=> {
              return (<div className={ST.tagBox__tag} key={tag.title}>{tag.title}</div>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailDialog