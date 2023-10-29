import { useReducer } from 'react';
import {
  Flex,
  Image,
  Heading,
  Text,
  VStack,
  FormControl,
  FormErrorMessage,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';


type AuthPayload = {
  email: string;
  password: string;
};

const defaultValues = {
  email: '',
  password: '',
};

type Props = {
  onSubmit: (values: FieldValues) => void;
};

function LoginForm({onSubmit}:Props) {
  const [show, toggle] = useReducer((o) => !o, false);

  const form = useForm<AuthPayload>({ defaultValues });
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <Flex justifyContent="center" alignItems="center" direction="column">
      <Image src="/assets/logo.svg" alt="logo" w={51} h={33} />
      <Heading as="h2" fontSize="54px" color="#06122B">
        Welcome Back!
      </Heading>
      <Text
        fontSize="20px"
        w="245px"
        textAlign="center"
        lineHeight="24px"
        color="#818896"
        mt="5px"
      >
        You’ve been missed,
        <br />
        Please sign in your account
      </Text>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        style={{ width: '308px', marginTop: '98px' }}
      >
        <VStack spacing="18px">
          <FormControl isInvalid={Boolean(errors?.email)}>
            <InputGroup>
              <InputLeftElement>
                <Image
                  src="/assets/email.svg"
                  alt="email"
                  w="18.33px"
                  h="14.67px"
                />
              </InputLeftElement>
              <Input
                w="full"
                id="email"
                placeholder="Email"
                {...register('email', {
                  required: 'This form is required',
                  pattern: {
                    value:
                      /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                    message: 'Invalid email!',
                  },
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors?.password)}>
            <InputGroup>
              <InputLeftElement>
                <Image
                  src="/assets/lock.svg"
                  alt="lock"
                  w="14.67px"
                  h="19.25px"
                />
              </InputLeftElement>
              <Input
                w="full"
                id="password"
                type={`${show ? 'text' : 'password'}`}
                placeholder="Password"
                {...register('password', {
                  required: 'This form is required',
                })}
              />
              <InputRightElement>
                <Image
                  src={`/assets/eye${show ? '-' : '-off-'}fill.svg`}
                  alt="lock"
                  w="17.3px"
                  h="16.56px"
                  cursor="pointer"
                  onClick={toggle}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            w="full"
            mt="52px"
            type="submit"
            bgGradient="linear(to-t, brand.201, brand.200)"
            colorScheme="undefined"
          >
            Login
          </Button>
        </VStack>
      </form>
    </Flex>
  );
}

export default LoginForm;
