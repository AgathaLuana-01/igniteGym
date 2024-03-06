import { ScrollView, Center, VStack, Text } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{ uri: "https://github.com/AgathaLuana-01.png" }}
            alt="Foto do usuário"
            size={33}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
