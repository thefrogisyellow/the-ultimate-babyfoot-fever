import Link from 'next/link';
import { Text, useColorModeValue, Box } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Box fontSize={18}>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
                        The Ultimate Babyfoot Fever
          </Text>
        </Box>
      </a>
    </Link>
  );
};

export default Logo;