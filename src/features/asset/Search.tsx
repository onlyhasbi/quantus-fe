import React from 'react';
import {
  Heading,
  Input,
  Image,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

type Props = {
  onSearch: (value: string) => void;
};
function InputSearch({ onSearch }: Props) {

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <>
      <InputGroup>
        <Input
          type="text"
          w="full"
          id="search"
          placeholder="Search assets"
          bg="brand.50"
          borderColor="brand.100"
          fontSize="14px"
          onChange={handleSearch}
        />
        <InputRightElement pointerEvents="none">
          <Image src="/assets/search.svg" alt="search-icon" />
        </InputRightElement>
      </InputGroup>
    </>
  );
}

export default InputSearch;
