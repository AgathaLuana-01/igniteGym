import { Spinner, Center } from "native-base";

export function Loading() {
    return (
        <Center flex={1} bg='pink.400'>
            <Spinner />
        </Center>
    );
}