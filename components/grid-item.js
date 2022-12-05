import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const MatchGridItem = ({ match }) => (
  <Box w="100%">
    <NextLink href={`/matchs/${match.slug}`}>
      <LinkBox cursor="pointer">
        <Image
          src={match.thumbnail.url}
          alt={'image'}
          className="grid-item-thumbnail"
          width="300px"
          height="200px"
        />
        <LinkOverlay href={`/matchs/${match.slug}`}>
          <Text mt={2} fontSize={20}>
            {match.slug}
          </Text>
        </LinkOverlay>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);