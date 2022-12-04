import {
  Tag,
  TagLabel,
} from '@chakra-ui/react'
import { propOr } from 'ramda'
import { Avatar } from '@chakra-ui/react'

export const TagItem = ({firstName, lastName, photo}) => (
<Tag size='lg' colorScheme='red' borderRadius='full'>
  <Avatar
    src={photo}
    size='xs'
    name={`${firstName} ${lastName}`}
    ml={-1}
    mr={2}
  />
  <TagLabel>{firstName} {lastName}</TagLabel>
</Tag>
)