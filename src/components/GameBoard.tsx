import { useRef } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { Grid } from './gameBoard/Grid';
import { Parallax } from './gameBoard/Parallax';
import {
  ViewContainerAbsolute,
  GridDimensions,
  GridElement,
  createGridData,
} from '../designSystem/';

//  Value that reflects the number of grid elements
export const GRID_SIZE: GridDimensions = { horizontal: 9, vertical: 16 };

export enum GameBoardEnum {
  GRID = 'grid',
  PARALLAX = 'parallax',
}

interface GameBoardProps {
  type: GameBoardEnum;
}

export const GameBoard = ({ type }: GameBoardProps) => {
  const { width, height } = useWindowDimensions();
  let board;
  switch (type) {
    case GameBoardEnum.GRID:
      const yOffSet = Platform.OS === 'web' ? 0 : 78;
      const gridData = useRef<Array<GridElement>>(
        createGridData(width, height - yOffSet, GRID_SIZE)
      );
      board = <Grid gridData={gridData.current} />;
      break;
    case GameBoardEnum.PARALLAX:
      board = <Parallax />;
      break;
  }

  return <ViewContainerAbsolute>{board}</ViewContainerAbsolute>;
};
