import { CardDTO } from '../types/card';
import ST from './Card.module.scss';

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
  handleSetData: (eventValue: CardDTO) => void;
}

const Card = ({data, handleDialog, handleSetData}: Props) => {
  const openDialog = () => {
    handleDialog(true);
    handleSetData(data);
  }

  return (
    <div className={ST.card} onClick={openDialog}>
      <img src={data.urls.small} alt={data.alt_description} className={ST.card__image}/>
    </div>
  )
}

export default Card