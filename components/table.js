import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { TagItem } from "./tag";
import { Icon, Box } from '@chakra-ui/react'
import { map, prop, pathOr, propOr } from 'ramda'

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
      {map(player => (
      <Tr>
        <Th>
          <Box>
            <TagItem
              firstName={prop('firstName',player)}
              lastName={prop('lastName',player)}
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
)
