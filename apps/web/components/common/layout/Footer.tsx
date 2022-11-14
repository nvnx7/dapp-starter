import { Center, StackProps, HStack, Text } from '@chakra-ui/react';

const Footer: React.FC<StackProps> = ({ ...props }) => {
  return (
    <HStack as="footer" p={4} w="100%" justify="space-between" bg="primary.500" {...props}>
      <Center w="full">
        <Text color="white" fontWeight="bold" fontSize="lg">
          -
        </Text>
      </Center>
    </HStack>
  );
};

export default Footer;
