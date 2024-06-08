import { StyleSheet} from 'react-native';
import Result from './components/Result'; // Ensure the path is correct
import ResultList from './components/ResultList'

export default function App() {

  const results = [
    <Result heading="Result 1" text="This is the first result.fdssssssssssssssssssssssssssssss" />,
    <Result heading="Result 2" text="This is the second result." />,
    <Result heading="Result 3" text="This is the third result." />,
    <Result heading="Result 4" text="This is the fourth result." />,
    <Result heading="Result 5" text="This is the fifth result." />,
    <Result heading="Result 6" text="This is the sixth result." />,
    <Result heading="Result 7" text="This is the seventh result." />,
    <Result heading="Result 8" text="This is the eighth result." />,
  ];

  return (
      <ResultList resultItems={results}>

      </ResultList>
  );
}
