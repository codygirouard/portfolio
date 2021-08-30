import { isScrolledIntoView } from './styleInfo';

type fn = () => void;

const elementAppear = (
  ref: React.RefObject<HTMLElement>,
  styleName: string,
  handleScroll: fn
) => {
  const section = ref.current;

  if (isScrolledIntoView(section)) {
    window.removeEventListener('scroll', handleScroll);
    section?.classList.add(`${styleName}-enter`);
    setTimeout(() => {
      section?.classList.add(`${styleName}-active`);
    }, 50);
  }
};

export default elementAppear;
