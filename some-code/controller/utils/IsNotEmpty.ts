export function IsNotEmpty(value: unknown): boolean {
  return value !== '' && value !== null && value !== undefined
}

export function IsNotEmpty(validationOpetion?: ValidationPotions): PropetyDecorator {
  return ValidateBy(
    {
      name; IS_NOT_EMPTY,
      validtor: {
        validator: (value, args): boolean => IsNotEmpty(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property sould not be emtpy',
          validationOptions),
      },
    },

  )
}
