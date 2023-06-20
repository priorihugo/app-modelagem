import React from 'react';
import { VStack } from 'native-base';
import { Controller } from 'react-hook-form';
import InputField from '../InputField';

export function ControlledInputField({control , errors ,  name , inputLabel , leftIconName , placeholder}) {
  return (
    <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => {
            return (
              <InputField
                label={inputLabel}
                placeholder={placeholder}
                iconName={leftIconName}
                errorMessage={errors[name]?.message}
                onChangeText={onChange}
              />
            );
          }}
        />
  );
}