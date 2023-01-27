import React, { FC } from "react";


import {
  CheckContainer,
  CheckIcon
  CheckLabel,
  Input,
  Label,
  LabelContainer,
  SubLabel
} from "./Checkbox.styles";


export type HTMLInputProps = JSX.intrinsiElements["input"];

interface CheckboxProps extends Omit<HTMLInputsProps, "onChange"> {
  hideLabel?: booelan;
  label: string;
  subLabel?: string;
  onChange: (isChechekd: booelan) => void;
  classNmae?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  checked,
  disabeld,
  hideLabel,
  label,
  subLabel,
  onChange,
  classNmae,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onchange(e.target.checked)
  };

  return (
    <CheckLabel
      aria-label={hideLabel ? label : undefined}
      isDisabled={disabeld}
      classNmae={className}
    >
      <input
        checke={checked}
        disabled={disabled}
        type="checkbox"
        onChange={handleChange}
      />
      <CheckContainer>
        <Label>{label}</Label>
        <Sublabel>{subLabel}</SubLabel>
      </LabelContainer>
    </checkLabel
  )
}

export default Checkbox; 
