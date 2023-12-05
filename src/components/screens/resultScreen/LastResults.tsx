import { ViewContainer, Label } from '../../../designSystem/';

export const LastResults = ({ results }) => {
  return (
    <>
      <Label color='#fb9' fontFamily='neuroBoldItalic' text='Previous games' />
      <ViewContainer>
        {results.map((resultObj) => {
          return (
            <Label
              fontFamily='neuro'
              color={resultObj.win ? 'green' : 'red'}
              text={resultObj.score}
              key={resultObj.score + Math.random()}
            />
          );
        })}
      </ViewContainer>
    </>
  );
};
