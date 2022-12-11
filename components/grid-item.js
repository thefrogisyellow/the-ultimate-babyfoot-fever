import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const MatchGridItem = ({ match }) => (
  <Box w="100%">
    <NextLink href={`/matchs/${match.slug}`}>
      <LinkBox cursor="pointer">
        <div className={'container'}>
          <Image
            src={match.thumbnail.url}
            alt={'image'}
            className={'grid-item-thumbnail'}
            width="300px"
            height="200px"
          />
          <p className={'score-block'}>{match.scoreTeam1} - {match.scoreTeam2}</p>
        </div>

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
      .container {
        position: relative;
      }
      .score-block {
        position: absolute;
        bottom: 50%;
        right: 50%;
        translate: 50% 50%;
        font-weight: 700;
        font-size: 1.9em;
        color: white;
      }
    `
    }
  />
);
