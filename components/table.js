import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { TagItem } from './tag';
import {  Box } from '@chakra-ui/react';
import { addIndex, map, pathOr, propOr } from 'ramda';

const mapIndexed = addIndex(map);
export const Leaderboard = ({players}) => (
  <TableContainer>
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Victoire(s)</Th>
          <Th>Défaite(s)</Th>
        </Tr>
      </Thead>
      <Tbody>
        {mapIndexed((player, playerIndex) => (
          <Tr key={`${propOr('','lastName',player)}-${playerIndex}`}>
            <Th>
              <Box>
                <TagItem
                  firstName={propOr('','firstName',player)}
                  lastName={propOr('','lastName',player)}
                  photo={pathOr('',['photo', 'url'],player)}
                />
              </Box>
            </Th>
            <Td isNumeric>{propOr('', 'victory', player)}</Td>
            <Td isNumeric>{propOr('', 'defeat', player)}</Td>
          </Tr>
        ), players)}
      </Tbody>
    </Table>
  </TableContainer>
);
