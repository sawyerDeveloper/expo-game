export interface GridElement {
  x: number;
  y: number;
  width: number;
  height: number;
  id: string;
};

export interface GridDimensions {
  horizontal: number;
  vertical: number;
};

export const createGridData = (
  width: number,
  height: number,
  gridDimensions: GridDimensions
): Array<GridElement> => {
  const elementWidth = width / gridDimensions.horizontal;
  const elementHeight = height / gridDimensions.vertical;
  const grid = new Array<GridElement>();
  let id = 0;
  for (var i = 0; i < gridDimensions.horizontal; i++) {
    for (var j = 0; j < gridDimensions.vertical; j++) {
      const element: GridElement = {
        x: i * elementWidth,
        y: j * elementHeight,
        width: elementWidth,
        height: elementHeight,
        id: id.toString(),
      };
      grid.push(element);
      id++;
    }
  }
  return grid;
};
