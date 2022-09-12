import styled from 'styled-components';

const AddCustomerPageSection = styled.section`
  align-items: center;
  background-color: #d1d1d1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
  width: 100%;
`;

const AddCustomerForm = styled.form`
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 5rem 0;
  padding: 15px;
  width: 80%;
`;

const FormSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 15px 0;
  padding: 10px;
  width: 80%;
`;

const FormSectionTitle = styled.h1`
  font-size: 2.5vw;
  margin-bottom: 10px;

  @media (max-width: 540px) {
    font-size: 5vw;
  }
`;

const FormFeedback = styled.p`
  color: ${({ fontColor }) => fontColor}
`;

const styles = {
  AddCustomerPageSection,
  AddCustomerForm,
  FormSection,
  FormSectionTitle,
  FormFeedback,
};

export default styles;
