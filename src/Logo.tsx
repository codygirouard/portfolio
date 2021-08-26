type LogoProps = {
  letter: string;
};
const Logo = ({ letter }: LogoProps) => {
  return (
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 84 96"
    >
      <title>Logo</title>

      <g>
        <text
          transform="matrix(1 0 0 1 0 0)"
          fontSize="50"
          fontFamily="sans-serif"
          fontStyle="normal"
          fontWeight="normal"
          textAnchor="middle"
          id="logo-text"
          y="66"
          x="42"
        >
          {letter}
        </text>
        <polygon
          id="logo-shape"
          strokeWidth="4"
          strokeLinecap="round"
          points="42,3 3,25 3,70 42,93 81,71 81,26 "
        ></polygon>
      </g>
    </svg>
  );
};

export default Logo;
