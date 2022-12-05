import {
  Container,
  Heading,
  SimpleGrid,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import {MatchGridItem} from '../components/grid-item';
import Layout from '../components/layouts/article';
import { getMatchs } from '../services/index';
import Section from '../components/section';

import { addIndex, map, propOr } from 'ramda';
import { AddMatch } from '../components/addMatch';

const mapIndexed = addIndex(map);

const Matchs = ({matchs}) => {
  return (
    <Layout title='Matchs'>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Tous les matchs
        </Heading>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
          >
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input type='tel' placeholder='Rechercher…' marginBottom={5} marginRight={5} />
          <AddMatch/>
        </InputGroup>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {mapIndexed((match, matchIndex) => (
            <Section key={`${propOr('','slug',match)}-${matchIndex}`}>
              <MatchGridItem match={match}></MatchGridItem>
            </Section>
          ),
          matchs
          )}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Matchs;

export async function getStaticProps() {
  const matchs = await getMatchs();
  return {
    props: {matchs},
  };
}
