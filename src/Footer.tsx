import { MediaLinks } from './MediaLinks';

const Footer = () => {
  return (
    <footer>
      <MediaLinks footer={true} />
      <p>Built by Cody Girouard</p>
      <a
        href="https://brittanychiang.com/"
        aria-label="Brittany Chiang Website"
        target="_blank"
        rel="noreferrer"
      >
        Design inspired by Brittany Chiang
      </a>
    </footer>
  );
};

export default Footer;
