import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardList } from 'src/components/Cards';
import { Header } from 'src/components/Layouts';
import { NewCardContext } from 'src/contexts/NewCardContext';
import { JsonToArr } from 'src/utils/functions';
import { ICardInfo } from 'src/utils/types';

const Home = () => {
  const navigate = useNavigate();
  const { handleCardInfo } = useContext(NewCardContext);
  const cards = JsonToArr<ICardInfo[]>(localStorage.getItem('cards')) || [];

  const goToCardAliasWithInfo = (cardInfo: ICardInfo) => {
    handleCardInfo({
      ...cardInfo,
      bankTitle: cardInfo.title,
      cvc: '',
      firstPassword: '',
      secondPassword: '',
    });
    navigate('/card-alias');
  };

  const goToCardNew = () => {
    navigate('/card-new');
  };

  return (
    <>
      <Header title="보유 카드" />
      <div className="content">
        <CardList
          cardInfoList={cards}
          onClickCard={goToCardAliasWithInfo}
          onClickEmptyCard={goToCardNew}
        />
      </div>
    </>
  );
};

export default Home;
