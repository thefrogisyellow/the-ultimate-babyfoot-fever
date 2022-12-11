import {
  Container,
  Heading,
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const Stats = ({}) => {
  return (
    <Layout title='Stats'>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Statistiques
        </Heading>
      </Container>
    </Layout>
  );
};

export default Stats;
