const Logo = () => {
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
          id="logo-text"
          y="66"
          x="23"
        >
          C
        </text>
        <polygon
          id="logo-shape"
          strokeWidth="4"
          points="42,3 3,25 3,70 42,93 81,71 81,26 "
        ></polygon>
      </g>
    </svg>
  );
};

export default Logo;
