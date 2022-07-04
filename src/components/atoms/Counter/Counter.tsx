import { 
  Button, 
  Container, 
  Grid, 
  TextField, 
} from '@mui/material';
import { useState } from 'react';

interface CounterProps {
  defaultValue: number;
}
const Counter = ({
  defaultValue,
}: CounterProps) => {
  const [count, setCount] = useState<number>(defaultValue);

  return (
    <Container>
      <Grid container gap={3}>
        <Grid item xs="auto">
          <Button 
            variant="contained" 
            role="button"
            onClick={() => setCount((prev) => prev - 1)}
            aria-label="Button Decrease"
          >
            -
          </Button>
        </Grid>
        <Grid item xs="auto">
          <TextField label="My Counter" value={count} />
        </Grid>
        <Grid item xs="auto">
          <button 
            type="button"
            onClick={() => setCount((prev) => prev + 1)}
            aria-label="Button Add"
          >
            +
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Counter;