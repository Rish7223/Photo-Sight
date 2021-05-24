import styled from 'styled-components';

export const StyledLoginForm = styled.div`
  background-color: #fff;
  border-radius: 30px;
  padding: 30px 40px;
  width: 400px;
  min-width: 350px;
  min-height: 500px;
  display: flex;
  flex-direction: column;

  .form_data {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }

  .form_label {
    margin-bottom: 5px;
  }

  .form_input {
    position: relative;
    width: 100%;

    img {
      position: absolute;
      top: 12px;
      left: 10px;
    }
  }

  .form_input2 {
    position: relative;
    width: 100%;

    img {
      position: absolute;
      top: 14px;
      left: 18px;
    }
  }
`;
