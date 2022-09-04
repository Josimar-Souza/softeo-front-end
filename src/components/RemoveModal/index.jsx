import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './removeModalStyles';
import Button from '../Button';
import CustomersAPI from '../../api/customersAPI';

const { REACT_APP_API_URL } = process.env;
const customersAPI = new CustomersAPI(REACT_APP_API_URL, 10000);

function RemoveModal({ customer, config }) {
  const [feedbackMessage, setFeedbackMessage] = useState({ visible: false, message: '', color: '' });

  const {
    FadeBackground,
    ModalContainer,
    ModalTitle,
    ButtonContainer,
    FeedbackMessage,
  } = styles;

  const { setRemoveModal, refreshPage } = config;

  const onCancellButtonClick = () => {
    setRemoveModal({ visible: false, customer: {} });
  };

  const onRemoveButtonClick = async () => {
    const resultMessage = await customersAPI.deleteCustomerById(customer._id);

    if (resultMessage.status) {
      setFeedbackMessage(
        {
          visible: true,
          message: resultMessage.message,
          color: 'red',
        },
      );
    } else {
      setFeedbackMessage(
        {
          ...feedbackMessage,
          visible: true,
          message: resultMessage,
          color: 'green',
        },
      );
    }

    setTimeout(() => {
      setRemoveModal({ visible: false, customer: {} });
      refreshPage();
    }, 5000);
  };

  const getFeedbackMessage = () => {
    if (feedbackMessage.visible) {
      return (
        <FeedbackMessage
          fontColor={feedbackMessage.color}
        >
          { feedbackMessage.message }
        </FeedbackMessage>
      );
    }

    return null;
  };

  const cancellButtonConfig = {
    onClick: onCancellButtonClick,
    backgroundColor: 'lightgreen',
    width: '47%',
    fontSize: '2vw',
  };

  const removeButtonConfig = {
    onClick: onRemoveButtonClick,
    backgroundColor: 'red',
    width: '47%',
    fontSize: '2vw',
    fontColor: 'white',
  };

  return (
    <FadeBackground>
      <ModalContainer>
        <ModalTitle>{`Tem certeza que deseja remover o cliente "${customer.name}"`}</ModalTitle>
        { getFeedbackMessage() }
        <ButtonContainer>
          <Button
            config={cancellButtonConfig}
          >
            Cancelar
          </Button>
          <Button
            config={removeButtonConfig}
          >
            Remover
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </FadeBackground>
  );
}

RemoveModal.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    setRemoveModal: PropTypes.func.isRequired,
    refreshPage: PropTypes.func.isRequired,
  }).isRequired,
};

export default RemoveModal;
