String.prototype.myIndexOf = function (searchValue, fromIndex = 0) {
  if (this.length === 0) return -1;
  if (this.length <= fromIndex) {
    throw new Error('fromIndex greater than string size');
  }
  if (fromIndex < 0) {
    throw new Error('fromIndex is negative');
  }
  let ret = -1;
  for (let i = fromIndex; i < this.length; i++) {
    let j = 0;
    while (
      j<searchValue.length &&
      (i+j)<this.length &&
      this[i+j] === searchValue[j]
    ) {
      j++;
      if (j >= searchValue.length) return i;
    }
  }
  return ret;
};
