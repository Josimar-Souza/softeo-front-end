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
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-top: 5rem;
  padding: 15px;
  width: 80%;
`;

const FormSection = styled.div`
  align-items: center;
  border: 1px solid blue;
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
`;

const styles = {
  AddCustomerPageSection,
  AddCustomerForm,
  FormSection,
  FormSectionTitle,
};

export default styles;
