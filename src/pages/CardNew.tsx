import BottomSheet from 'src/components/BottomSheet';
import BankBottomSheet from 'src/components/BottomSheet/BankBottomSheet';
import Card from 'src/components/Card/Card';
import CardPasswordInput from 'src/components/CardPasswordInput/CardPasswordInput';
import Header from 'src/components/Header/Header';
import NewCardInput from 'src/components/NewCardInput/NewCardInput';
import TextButton from 'src/components/TextButton/TextButton';
import useNewCardForm from 'src/hooks/useNewCardForm';
import { bankList } from 'src/utils/constants';

const CUSTOMER_NAME_LIMIT_COUNT = 30;

const CardNew = () => {
  const { state, handlers, onClickNextPage, openBottomSheet } =
    useNewCardForm();

  return (
    <>
      <Header title="카드 추가" hasBackButton />
      <Card
        title={state.bankTitle}
        bgColor={state.bgColor}
        creditNumber={state.creditNumber}
        customerName={state.customerName}
        expirationDate={state.expirationDate}
        onClick={openBottomSheet}
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
      <TextButton onClick={onClickNextPage}>다음</TextButton>
      <BottomSheet isBackgroundToggle>
        <BankBottomSheet
          bankList={bankList}
          handleBankTitle={handlers.handleBankTitle}
          handleBgColor={handlers.handleBgColor}
        />
      </BottomSheet>
    </>
  );
};

export default CardNew;
