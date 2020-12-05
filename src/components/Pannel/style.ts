import styled from "styled-components";

export const FormPannel = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 300px;
  margin: 0 auto;
  padding: 5px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitlePannel = styled.h1`
  font-size: 20pt;
  padding: 10px;
  color: #555;
`;

export const InputFilePannel = styled.input`
  ::-webkit-file-upload-button {
    padding: 10px;
    border-radius: 6px;
    background-color: #EEE;
    border: none;
  }

  margin: 5px;
  padding: 10px;
  border-radius: 6px;
  border: 1px dashed #DDD;
  cursor: pointer;
`;

export const InputPannel = styled.input`
  margin: 5px;
  padding: 15px;
  border-radius: 6px;
  background-color: #EEE;
`;

export const TextAreaPannel = styled.textarea`
  min-height: 100px;
  max-height: 240px;
  margin: 5px;
  padding: 10px;
  border-radius: 6px;
  background-color: #EEE;
  resize: vertical;
  font-family: 'Roboto', sans-serif;
`;

export const ButtonPannel = styled.button`
  margin: 10px 0 0 0;
  padding: 15px;
  border-radius: 6px;
  background-color: #1985a1;
  color: #FFF;
  text-transform: uppercase;
  cursor: pointer;
  transition: .5s;

  :hover {
    background-color: #1ea1c2;
    transition: .5s;
  }
`;