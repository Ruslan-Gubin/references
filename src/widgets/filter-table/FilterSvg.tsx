const FilterSvg = ({ active }: {active: boolean}) => {
  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 18 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>filter_list</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Rounded" transform="translate(-443.000000, -1488.000000)">
          <g id="Content" transform="translate(100.000000, 1428.000000)">
            <g
              id="-Round-/-Content-/-filter_list"
              transform="translate(340.000000, 54.000000)"
            >
              <g transform="translate(0.000000, 0.000000)">
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  d="M11,18 L13,18 C13.55,18 14,17.55 14,17 C14,16.45 13.55,16 13,16 L11,16 C10.45,16 10,16.45 10,17 C10,17.55 10.45,18 11,18 Z M3,7 C3,7.55 3.45,8 4,8 L20,8 C20.55,8 21,7.55 21,7 C21,6.45 20.55,6 20,6 L4,6 C3.45,6 3,6.45 3,7 Z M7,13 L17,13 C17.55,13 18,12.55 18,12 C18,11.45 17.55,11 17,11 L7,11 C6.45,11 6,11.45 6,12 C6,12.55 6.45,13 7,13 Z"
                  id="🔹Icon-Color"
                  fill={active ? '#5664d2': '#727272'}
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export { FilterSvg };
