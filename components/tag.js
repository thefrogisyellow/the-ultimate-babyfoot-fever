import {
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

export const TagItem = ({firstName, lastName, photo, key}) => (
  <Tag size='lg' colorScheme='red' borderRadius='full' key={key}>
    <Avatar
      src={photo}
      size='xs'
      name={`${firstName} ${lastName}`}
      ml={-1}
      mr={2}
    />
    <TagLabel>{firstName} {lastName}</TagLabel>
  </Tag>
);