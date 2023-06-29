import { FormControl, Icon, IconButton, Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function InputField({
  label,
  iconName,
  errorMessage,
  isInvalid,
  secureTextEntry,
  ...rest
}) {
  const invalid = !!errorMessage || isInvalid;
  //console.log('rest ' , rest)
  const [hide, setHide] = useState(true);
  const show = hide && secureTextEntry;

  const toggleVisibility = () => {
    setHide(!hide);
  };

  return (
    <FormControl isInvalid={invalid}>
      {label ? (
        <FormControl.Label color={"black"}>{label}</FormControl.Label>
      ) : null}

      <Input
        placeholderTextColor={"black"}
        borderRadius={300}
        backgroundColor={"#CFDEE7"}
        borderColor="SECUNDARIO.1"
        InputLeftElement={
          iconName == null || "" ? null : (
            <Icon as={<MaterialIcons name={iconName} />} ml={2} />
          )
        }
        InputRightElement={
          secureTextEntry ? (
            <IconButton
              icon={<MaterialIcons name={"visibility"} />}
              mr={2}
              onPress={toggleVisibility}
            />
          ) : null
        }
        isInvalid={invalid}
        secureTextEntry={show}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
