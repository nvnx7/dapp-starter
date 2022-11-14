import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { APP_NAME } from 'config/constants';

const Logo: FC = () => {
  return (
    <Box>
      <Heading>{APP_NAME}</Heading>
    </Box>
  );
};

export default Logo;
