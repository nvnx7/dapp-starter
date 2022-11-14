import { Box, BoxProps } from '@chakra-ui/react';

const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box boxShadow="2xl" rounded="md" borderWidth={1} p={2} {...props}>
      {children}
    </Box>
  );
};

export default Card;
