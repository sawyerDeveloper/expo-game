import { useRef } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import {
  GridDimensions,
  GridElement,
  createGridData,
} from '../designSystem/utils/CreateGridData';
import { Grid } from './gameBoard/Grid';
import { Parallax } from './gameBoard/Parallax';
import { ViewContainerAbsolute } from '../designSystem/layout/containers/ViewContainerAbsolute';

//  Value that reflects the number of grid elements
export const GRID_SIZE: GridDimensions = { horizontal: 9, vertical: 16 };
export const GameBoardType = {
  GRID: 'grid',
  PARALLAX: 'parallax',
};
export const GameBoard = ({ type }) => {
  const { width, height } = useWindowDimensions();
  let board;
  switch (type) {
    case GameBoardType.GRID:
      const yOffSet = Platform.OS === 'web' ? 0 : 78;
      const gridData = useRef<Array<GridElement>>(
        createGridData(width, height - yOffSet, GRID_SIZE)
      );
      board = <Grid gridData={gridData.current} />;
      break;
    case GameBoardType.PARALLAX:
      board = <Parallax />;
      break;
  }

  return <ViewContainerAbsolute>{board}</ViewContainerAbsolute>;
};
