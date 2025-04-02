import { useRecoilValue } from 'recoil';
import { imageData } from '@/recoil/selectors/imageSelectors';

import CommonHeader from '@/components/common/header/CommonHeader';
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar';
import CommonNav from '@/components/common/navigation/CommonNav';
import CommonFooter from '@/components/common/footer/CommonFooter';

import ST from './styles/index.module.scss';
import Card from './components/Card';
import { CardDTO } from './types/card';
import DetailDialog from '@/components/common/dialog/DetailDialog';
import { useState } from 'react';

const index = () => {
  const imageSelector = useRecoilValue(imageData);
  const [imgData, setImgData] = useState<CardDTO>();
  const [open, setOpen] = useState<boolean>(false); 

  const CARD_LIST = imageSelector.data.results.map((card: CardDTO) => {
    return (
      <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData}/>
    )
  })

  return (
    <div className={ST.page}>
      <CommonHeader />
      <CommonNav />
      <div className={ST.page__contents}>
        <div className={ST.page__contents__introBox}>
          <div className={ST.wrapper}>
          <span className={ST.wrapper__title}>photosplash</span>
            <span className={ST.wrapper__desc}>
              인터넷의 시각자료 출처입니다 <br />
              인터넷의 시각자료 출처입니다
            </span>
            <CommonSearchBar />
          </div>
        </div>
        <div className={ST.page__contents__imageBox}>
          {CARD_LIST}
        </div>
      </div>
      <CommonFooter />
      {open && <DetailDialog data={imgData}/>}
    </div>
  )
}

export default index