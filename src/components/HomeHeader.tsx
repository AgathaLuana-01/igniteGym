import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { useAuth } from "@hooks/useAuth";
import { UserPhoto } from "./UserPhoto";

import { TouchableOpacity } from "react-native";

export function HomeHeader() {
  const { user } = useAuth();

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems={"center"}>
      <UserPhoto
        source={{
          uri: "https://i.pinimg.com/originals/69/74/4f/69744fdda9a70b32e4f2f3020b687746.jpg",
        }}
        alt="imagem do usuária"
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize={"md"}>
          Olá,
        </Text>
        <Heading color="gray.100" fontSize={"md"}>
          {user.name}
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color={"gray.200"} size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
