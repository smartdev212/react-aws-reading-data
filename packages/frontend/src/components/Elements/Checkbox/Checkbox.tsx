import React, { ChangeEvent } from 'react'
import { Checkbox as ChakraCheckbox } from '@chakra-ui/core'

export interface CheckboxSelection {
  field: string
  selected: boolean
  value: any
}

interface CheckboxProps {
  isChecked: boolean
  name: string
  label: string | number
  value?: string | number
  onSelect(result: CheckboxSelection): void
}

export function Checkbox(props: CheckboxProps) {
  return (
    <ChakraCheckbox
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        props.onSelect({
          field: props.name,
          selected: e.target.checked,
          value: props.value
        })
      }
      value={props.value}
      isChecked={props.isChecked}
    >
      {props.label}
    </ChakraCheckbox>
  )
}
