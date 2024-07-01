const linearSearch(arr:number[], v: number): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === v) {
      return true;
    }
  }
  return false;
}


