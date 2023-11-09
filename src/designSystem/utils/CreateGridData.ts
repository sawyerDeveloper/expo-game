export type GridElement = {
  x: number;
  y: number;
  width: number;
  height: number;
  id: string;
};

export type GridDimensions = {
  width: number;
  height: number;
};

export const createGridData = (width, height, gridDimensions) : Array<GridElement> => {
  const elementWidth = width / gridDimensions.width//Math.floor(width / gridDimensions.width);
  const elementHeight = height / gridDimensions.height//Math.floor(height / gridDimensions.height);
  const grid = [];
  let id = 0;
  for (var i = 0; i < gridDimensions.width; i++) {
    for (var j = 0; j < gridDimensions.height; j++) {
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
