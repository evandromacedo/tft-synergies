import React from 'react';

const ArrowListItem = ({ rightArrow, ...props }) => (
  <li className={props.className}>
    <button {...props}>
      <svg width="34" height="20" viewBox="0 0 34 20">
        <defs>
          <linearGradient
            x1="49.991%"
            y1="105.3%"
            x2="49.991%"
            y2=".096%"
            id="Arrow_svg__a"
          >
            <stop stopColor="#67502D" offset="0%" />
            <stop stopColor="#D8A75B" offset="99.982%" />
          </linearGradient>
          <linearGradient
            x1="50.009%"
            y1="115.255%"
            x2="50.009%"
            y2="-13.296%"
            id="Arrow_svg__b"
          >
            <stop stopColor="#67502D" offset="0%" />
            <stop stopColor="#D8A75B" offset="99.982%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path fill="#454F51" d="M0 9.571h16v1H0z" />
          <g transform={rightArrow ? 'translate(14)' : 'matrix(-1 0 0 1 34 0)'}>
            <circle
              stroke="url(#Arrow_svg__a)"
              strokeWidth={1.5}
              fill="#192128"
              cx={10}
              cy={10}
              r={9.25}
            />
            <path
              d="M7.274 15.745c.382.344.963.344 1.345 0L15 10 8.62 4.255a1.005 1.005 0 00-1.346 0 .815.815 0 000 1.211L12.309 10l-5.035 4.534a.815.815 0 000 1.211z"
              fill="url(#Arrow_svg__b)"
              fillRule="nonzero"
            />
          </g>
        </g>
      </svg>
    </button>
  </li>
);

export default ArrowListItem;
