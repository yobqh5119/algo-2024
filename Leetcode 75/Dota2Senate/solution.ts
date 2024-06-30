const dotaSenate = (senators: string): string => {
  const radiantQue: number[] = []
  const direQue: number[] = []
  const length = senators.length;

  for (let i = 0; i < length; i++) {
    if (senators[i] === 'R') {
      radiantQue.push(i)
    } else {
      direQue.push(i)
    }
  }

  while (radiantQue.length > 0 && direQue.length > 0) {
    const r = radiantQue.shift() as number;
    const d = direQue.shift() as number;
    if (r < d) {
      radiantQue.push(r + length);
    } else {
      direQue.push(d + length)
    }
  }
  return radiantQue.length > 0 ? 'Radiant' : 'Dire'
}