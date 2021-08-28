const isScrolledIntoView = (el: HTMLElement | null) => {
  if (!el) {
    return false;
  }

  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  const isVisible = elemTop + 100 < window.innerHeight && elemBottom >= 0;
  return isVisible;
};

const getAngle = (element: HTMLSpanElement) => {
  const matrix = window.getComputedStyle(element).getPropertyValue('transform');

  let matrixValues = matrix.split('(')[1];
  matrixValues = matrixValues.split(')')[0];
  const a = parseFloat(matrixValues.split(',')[0]);
  const b = parseFloat(matrixValues.split(',')[1]);

  return Math.round(Math.atan2(b, a) * (180 / Math.PI));
};

export { isScrolledIntoView, getAngle };
