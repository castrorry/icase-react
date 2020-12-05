import React, { useState } from "react";
import { ButtonPannel, FormPannel, InputFilePannel, InputPannel, TitlePannel } from "./style";

export const Pannel: React.FC = () => {

  function handleSubmit() {
  }

  return (
    <FormPannel>
      <TitlePannel>Cadastro de dispositivos</TitlePannel>
      <InputFilePannel disabled type="file" />
      <InputPannel placeholder="Nome" />
      <InputPannel placeholder="Fabricante (ex: Apple, Samsung...)" />
      <ButtonPannel onClick={handleSubmit}>Cadastrar</ButtonPannel>
    </FormPannel>
  );
}