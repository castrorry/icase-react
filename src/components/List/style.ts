import styled from "styled-components";

export const ListDiv = styled.div`
  max-width: 500px;
  min-height: 300px;
  margin: 0 auto;
  padding: 10px;

  display: flex;
  flex-direction: column;
`;

export const HeaderList = styled.h1`
  margin: 15px 0;
`;

export const DeviceItem = styled.div`
  width: 100%;
  border-radius: 6px;
  padding: 20px;
  margin: 6px auto;

  background-color: #EEEEEE;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const DeviceIndex = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #888;
`;

export const DeviceName = styled.span`
  margin: 0 10px;
  font-weight: 500;
  font-size: 14px;
  color: #555;
`;

export const DeviceBrand = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #888;
  margin-left: auto;
`;