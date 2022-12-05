import React from 'react';
import { Heading, Container, Link, Box, Flex } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import { addIndex, propOr, prop, head, map, cond, always, equals } from 'ramda';
import { TagItem } from '../../components/tag';
import Section from '../../components/section';
import {  getMatchDetails, getMatchs } from '../../services';
const mapIndexed = addIndex(map);

const Match = ({match}) => {

  const scoreToWin = cond([
    [equals('match_en_10'),   always('Match en 10 points')],
    [equals('match_en_5'),   always('Match en 5 points')],
    [equals('match_en_3'),   always('Match en 3 points')],
    [equals('match_en_2'),   always('Match en 2 points')],
  ])(prop('scoreToWin',head(match)));

  return (
    <Layout title='Matchs'>
      <Container>
        <Box>
          <NextLink href='/matchs'>
            <Link>Matchs</Link>
          </NextLink>
          <span>
            {' '}
            <ChevronRightIcon />{' '}
          </span>
          <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
            {prop('slug', head(match))}{' '}
          </Heading>
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            {scoreToWin}
          </Heading>
        </Section>
        <Section delay={0.3}>
          <Flex justifyContent="space-between">
            <Box>
              <P>Equipe 1 :</P>
              {mapIndexed(({firstName, lastName}, matchIndex) => (
                <TagItem
                  firstName={firstName}
                  lastName={lastName}
                  photo={''}
                  key={`${lastName}-${matchIndex}`}
                />
              )

              ,prop('team1', head(match)))}
              <P>Score : {prop('scoreTeam1',head(match))}</P>
            </Box>
            <Box>
              <P>Equipe 2 :</P>
              {mapIndexed(({firstName, lastName}, matchIndex) => (
                <TagItem
                  firstName={firstName}
                  lastName={lastName}
                  photo={''}
                  key={`${lastName}-${matchIndex}`}
                />
              )

              ,propOr('','team2', head(match)))}

              <P>Score : {propOr('','scoreTeam2',head(match))}</P>
            </Box>
          </Flex>
        </Section>
      </Container>
    </Layout>
  );
};

export default Match;

export async function getStaticProps({ params }) {
  const data = (await getMatchDetails(params.slug)) || [];
  return {
    props: { match: data },
  };
}

export async function getStaticPaths() {
  const matchs = (await getMatchs()) || [];
  return {
    paths: matchs.map(({slug}) => ({ params: { slug } })),
    fallback: false,
  };
}
