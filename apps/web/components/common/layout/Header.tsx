import { Flex, FlexProps, HStack } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Logo from '../Logo';

const Header: React.FC<FlexProps> = ({ ...props }) => {
  return (
    <Flex p={4} justify="space-between" {...props}>
      <Logo />

      <HStack spacing={8}>
        <ConnectButton />
      </HStack>
    </Flex>
  );
};

export default Header;
