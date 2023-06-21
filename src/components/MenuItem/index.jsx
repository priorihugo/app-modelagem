import { Center, Column, Flex, IconButton, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";

export default function MenuItem({
  iconImage,
  label,
  goTo,
  boxSize = 24,
  buttonColor = "black",
  iconColor = "white",
}) {
  const navigation = useNavigation();

  return (
    <Column alignItems={"center"} flexDirection={"column"} w={"35%"} mb= {2}>
      <IconButton
        borderRadius={8}
        boxSize={boxSize}
        backgroundColor={buttonColor}
        icon={
          <MaterialIcons
            name={iconImage}
            size={40}
            style={{ color: iconColor }}
          />
        }
        onPress={() => navigation.navigate(goTo)}
      />
      <Text
        textAlign={"center"}
        fontWeight="semibold"
        textBreakStrategy="highQuality"
        marginTop="5px"
        fontSize="14px"
      >
        {label}
      </Text>
    </Column>
  );
}
