import { Button } from '../../../ui/Button';
import { useContext } from 'react';
import { GameAudioContext } from '../../../context/audio/GameAudioContext';
import { ViewContainerFlex } from '../viewContainer/ViewContainerFlex';

export const Header = () => {
  const { musicMuted, muteMusic } = useContext(GameAudioContext);
  return (
    <ViewContainerFlex>
      <Button
        fontFamily='neuroBold'
        title={musicMuted ? 'Mute' : 'UnMute'}
        onPress={muteMusic}
      />
    </ViewContainerFlex>
  );
};