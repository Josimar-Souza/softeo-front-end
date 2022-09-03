import React from 'react';
import PropTypes from 'prop-types';
import styles from './removeModalStyles';
import Button from '../Button';

function RemoveModal({ customer, config }) {
  const {
    FadeBackground,
    ModalContainer,
    ModalTitle,
    ButtonContainer,
  } = styles;

  const { setRemoveModal } = config;

  const onCancellButtonClick = () => {
    setRemoveModal({ visible: false, customer: {} });
  };

  const cancellButtonConfig = {
    onClick: onCancellButtonClick,
    backgroundColor: 'lightgreen',
    width: '47%',
    fontSize: '2vw',
  };

  const removeButtonConfig = {
    onClick: onCancellButtonClick,
    backgroundColor: 'red',
    width: '47%',
    fontSize: '2vw',
    fontColor: 'white',
  };

  return (
    <FadeBackground>
      <ModalContainer>
        <ModalTitle>{`Tem certeza que deseja remover o cliente "${customer.name}"`}</ModalTitle>
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
  }).isRequired,
  config: PropTypes.shape({
    setRemoveModal: PropTypes.func.isRequired,
  }).isRequired,
};

export default RemoveModal;
