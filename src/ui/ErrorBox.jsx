import styled from 'styled-components';
import Heading from './Heading';
import { useMoveBack } from '../hooks/useMoveBack';
import Button from './Button';

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  margin: 0 auto;

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function ErrorBox({ errorName }) {
  const moveBack = useMoveBack();

  return (
    <Box>
      <Heading as="h2">
        The {errorName} you are looking for could not be found 😢
      </Heading>
      <div>
        <Button onClick={moveBack} size="small">
          &larr; Go back
        </Button>
      </div>
    </Box>
  );
}

export default ErrorBox;
