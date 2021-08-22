const getAngle = (element: HTMLSpanElement) => {
  const matrix = window.getComputedStyle(element).getPropertyValue('transform');
  console.log('a', matrix);

  let matrixValues = matrix.split('(')[1];
  matrixValues = matrixValues.split(')')[0];
  const a = parseFloat(matrixValues.split(',')[0]);
  const b = parseFloat(matrixValues.split(',')[1]);

  console.log('b', Math.round(Math.atan2(b, a) * (180 / Math.PI)));

  return Math.round(Math.atan2(b, a) * (180 / Math.PI));
};

export { getAngle };
