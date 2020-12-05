import React from "react"
import { DeviceBrand, DeviceIndex, DeviceItem, DeviceName, HeaderList, ListDiv } from "./style"

export const List: React.FC = () => {

  const arrayTest = [
    {
      name: 'Samsung Galaxy Grand Prime',
      brand: 'Samsung'
    },
    {
      name: 'Samsung Galaxy Grand Duos',
      brand: 'Samsung'
    },
    {
      name: 'Samsung Galaxy J2 Prime',
      brand: 'Samsung'
    },
    {
      name: 'Samsung Galaxy J5 Prime',
      brand: 'Samsung'
    },
    {
      name: 'Samsung Galaxy J7 Prime',
      brand: 'Samsung'
    }
  ]

  return (
    <ListDiv>
      <HeaderList>Dispositivos:</HeaderList>
      {arrayTest.map((device, index) => (
        <DeviceItem>
          <DeviceIndex>{index + 1}</DeviceIndex>
          <DeviceName>{device.name}</DeviceName>
          <DeviceBrand>{device.brand}</DeviceBrand>
        </DeviceItem>
      ))}
    </ListDiv>
  )
}