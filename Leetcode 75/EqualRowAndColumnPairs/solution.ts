const equalRowAndColumnPairs = (grid: number[][]): number => {
  let count = 0;
  const rowMap = new Map<string, number>()

  for (let row of grid) {
    const rowString = row.join(',')
    rowMap.set(rowString, (rowMap.get(rowString) || 0) + 1)
  }

  for (let col = 0; col < grid.length; col++) {
    const colArray: number[] = []
    
    for (let row = 0; row < grid.length; row++) {
      colArray.push(grid[row][col])
    }

    const colString:string = colArray.join(',')
    if (rowMap.get(colString)) {
      count += rowMap.get(colString) || 0
    }
  }
  return count
}