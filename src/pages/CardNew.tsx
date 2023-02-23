import { useNavigate } from 'react-router-dom';
import Card from 'src/components/Card/Card';
import CardPasswordInput from 'src/components/CardPasswordInput/CardPasswordInput';
import Header from 'src/components/Header/Header';
import NewCardInput from 'src/components/NewCardInput/NewCardInput';
import TextButton from 'src/components/TextButton/TextButton';
import useNewCardForm from 'src/hooks/useNewCardForm';

const CUSTOMER_NAME_LIMIT_COUNT = 30;

const CardNew = () => {
  const navigate = useNavigate();
  const { state, handlers } = useNewCardForm();
  const goNextPage = () => {
    navigate('/card-alias', { replace: true });
  };
  return (
    <>
      <Header
        title="카드 추가"
        hasBackButton
        onClickBackbutton={() => navigate(-1)}
      />
      <Card
        title=""
        bgColor=""
        creditNumber={state.creditNumber}
        customerName={state.customerName}
        expirationDate={state.expirationDate}
      />
      <NewCardInput
        label="카드 번호"
        widthSize="lg"
        value={state.creditNumber}
        onChange={handlers.handleChangeCreditNumber}
        maxLength={19}
      />
      <NewCardInput
        label="만료일"
        widthSize="md"
        placeholder="MM / YY"
        value={state.expirationDate}
        onChange={handlers.handleChangeExpirationDate}
        maxLength={5}
      />
      <NewCardInput
        label="카드 소유자 이름(선택)"
        textAlign="left"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        id="input-customer-name"
        value={state.customerName}
        onChange={handlers.handleChangeCustomerName}
        inputLimitCount={CUSTOMER_NAME_LIMIT_COUNT}
        inputCount={state.customerName.length}
        maxLength={CUSTOMER_NAME_LIMIT_COUNT}
      />
      <NewCardInput
        label="보안 코드(CVC/CVV)"
        widthSize="sm"
        type="password"
        value={state.cvc}
        onChange={handlers.handleChangeCvc}
        maxLength={3}
      />
      <CardPasswordInput
        label="카드 비밀번호"
        firstPasswordProps={{
          value: state.firstPassword,
          onChange: handlers.handleChangeFirstPassword,
        }}
        secondPasswordProps={{
          value: state.secondPassword,
          onChange: handlers.handleChangeSecondPassword,
        }}
      />
      {/* TO DO : Form Validation & Navigate with State */}
      <TextButton onClick={goNextPage}>다음</TextButton>
    </>
  );
};

export default CardNew;
