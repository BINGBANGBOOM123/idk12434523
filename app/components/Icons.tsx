const createIcon = ({
  path,
  displayName,
}: {
  path: React.ReactNode;
  displayName: string;
}) => {
  const Comp = (props: React.SVGAttributes<SVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {path}
    </svg>
  );

  Comp.displayName = displayName;

  return Comp;
};

export const TreasureLogoIcon = ({ className }: { className: string }) => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 1486.2 1573.3"
    fill="#E3003D"
    className={className}
    aria-hidden="true"
  >
    <g id="Treasure_x5F_Logomark_x5F_On_x5F_Light_00000042697129003240641870000006852363279536445082_">
      <path
        className="st0"
        d="M743.1,105.3c0,47-21.8,92.4-55.4,125.9s-78.9,55.4-125.9,55.4c94,0,181.3,87.3,181.3,181.3
		c0-94,87.3-181.3,181.3-181.3C830.4,286.6,743.1,199.3,743.1,105.3z"
      />
      <path
        className="st0"
        d="M17.7,739.3c0-0.2,0-0.4,0-0.7c0-1.2,0-2.4,0-3.6V739.3z"
      />
      <path
        className="st0"
        d="M366,242.8c0.1,0,0.2,0,0.4,0c166.6-17.4,288.1-91.8,340.5-223.3c1.2-3,2.3-6,3.4-9
		C511,19.3,332.6,108.6,206.8,246.7h60.3C293.7,246.7,339.6,245.4,366,242.8"
      />
      <path
        className="st0"
        d="M1119.8,242.7c0.1,0,0.2,0,0.4,0c26.5,2.7,72.3,4,98.9,3.9h60.3C1153.6,108.6,975.2,19.3,775.8,10.4
		c1.1,3,2.3,6,3.4,9C831.7,150.9,953.3,225.4,1119.8,242.7"
      />
      <path
        className="st0"
        d="M1339.7,633.5h-32.5c5.9,33,9,66.9,9,101.6c0,227.7-132.7,424.3-325,516.8v152c0,4.3,0.4,8.5,1.3,12.6
		c277.8-101.7,476-368.4,476-681.4c0-13.8-0.4-27.5-1.2-41.2C1436,655.7,1389.2,633.5,1339.7,633.5"
      />
      <path
        className="st0"
        d="M1359.2,553.8c43.9,0,85.8,17.5,116.6,48.2c-18.7-100.7-58.1-194-113.8-275.4h-142.9c-26,0-72.5,1.3-98.9,3.9
		c-0.1,0-0.2,0-0.4,0c-166.6,17.4-288.1,91.8-340.5,223.3c-24.1,60.4-36.2,132.9-36.2,217.3h0c0-84.5-12-156.9-36.2-217.3
		c-52.4-131.5-174-205.9-340.5-223.3c-0.1,0-0.2,0-0.4,0c-26.5-2.7-72.9-3.9-98.9-3.9H124.2C68.6,408,29.1,501.3,10.4,602
		c30.8-30.7,72.6-48.2,116.6-48.2h448.1v850.1c0,50-25.8,94.7-65.6,120.5c21.4,7.3,43.3,13.6,65.6,18.9
		c53.9,12.8,110.2,19.6,168,19.6c57.8,0,114.1-6.8,168-19.6c22.3-5.3,44.2-11.6,65.6-18.9c-39.9-25.8-65.6-70.5-65.6-120.5V553.8
		H1359.2z"
      />
      <path
        className="st0"
        d="M170,735.1c0-34.7,3.1-68.6,9-101.6h-32.5c-49.5,0-96.3,22.2-127.6,60.5c-0.8,13.6-1.2,27.3-1.2,41.2
		c0,313,198.2,579.7,476,681.4c0.8-4.1,1.3-8.3,1.3-12.6v-152C302.7,1159.4,170,962.8,170,735.1"
      />
    </g>
  </svg>
);

export const SlashIcon = ({ className }: { className: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
  </svg>
);

export const StarIcon = ({ className }: { className: string }) => (
  <svg
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.2015 1.27572C16.1125 2.63286 15.658 4.05406 14.8838 5.39685C13.5049 7.78783 11.4639 9.40119 8.84324 10.1716C8.1186 10.3846 7.12722 10.5575 6.34131 10.608C6.24377 10.6143 6.29918 10.6298 6.46434 10.6424C7.05697 10.6879 8.37082 10.9838 9.0337 11.221C9.94058 11.5456 11.4135 12.3989 12.1623 13.0335C13.6761 14.3165 14.8876 16.2068 15.3991 18.0842C15.5552 18.657 15.7615 19.8608 15.7905 20.3673C15.796 20.4643 15.8224 20.3944 15.849 20.2119C16.1315 18.278 16.7154 16.7507 17.6917 15.3918C19.1282 13.3924 21.0337 12.0522 23.3493 11.4126C24.0996 11.2054 24.5425 11.1282 25.6031 11.0199C25.8353 10.9963 25.8349 10.9957 25.5615 10.9744C24.0014 10.8529 22.1673 10.1838 20.7395 9.21526C18.1596 7.46529 16.4568 4.48993 16.3079 1.47206C16.2921 1.15376 16.2679 0.88671 16.2539 0.87864C16.2399 0.87057 16.2164 1.04932 16.2015 1.27572ZM34.5361 22.4598C34.4048 23.3535 34.0992 24.127 33.5125 25.0505C32.7442 26.2601 31.9367 26.9799 30.6503 27.6021C30.1711 27.8338 29.0261 28.1556 28.4348 28.2248L28.1465 28.2585L28.5932 28.3384C30.2107 28.6277 31.7319 29.5057 32.7462 30.7354C33.5923 31.7611 34.1922 33.2243 34.283 34.4839C34.3003 34.7244 34.3252 34.8464 34.3382 34.755C34.5334 33.3867 34.9438 32.2961 35.5956 31.4142C36.1935 30.6048 36.5889 30.2261 37.4 29.6855C38.4119 29.0111 39.4679 28.6404 40.6663 28.539C40.8267 28.5255 40.7342 28.4933 40.3663 28.4348C39.4329 28.2863 38.7344 28.0102 37.8171 27.427C35.9432 26.2358 34.9195 24.5611 34.6428 22.2339C34.6114 21.9694 34.6067 21.9793 34.5361 22.4598ZM6.62895 28.1187C6.49765 29.0124 6.19206 29.7859 5.6054 30.7094C4.83708 31.919 4.02956 32.6388 2.74312 33.2609C2.26393 33.4927 1.11893 33.8145 0.527628 33.8836L0.239353 33.9174L0.686044 33.9972C2.31682 34.289 3.81637 35.1545 4.83904 36.3942C5.68516 37.42 6.28504 38.8832 6.37583 40.1428C6.39316 40.3833 6.41803 40.5053 6.43105 40.4139C6.62447 39.0582 7.04823 37.9385 7.70347 37.0524C8.28655 36.2638 8.68728 35.8813 9.49284 35.3444C10.5048 34.67 11.5607 34.2993 12.7592 34.1979C12.9196 34.1844 12.8271 34.1522 12.4592 34.0936C11.5257 33.9451 10.8273 33.669 9.90995 33.0859C8.0361 31.8947 7.01238 30.22 6.73571 27.8928C6.70424 27.6283 6.69959 27.6382 6.62895 28.1187Z"
      fill="white"
    />
  </svg>
);

export const ArrowDownwardIcon = createIcon({
  path: (
    <path
      d="M20 12L18.59 10.59L13 16.17V4H11V16.17L5.42 10.58L4 12L12 20L20 12Z"
      fill="white"
      fillOpacity="0.54"
    />
  ),
  displayName: "ArrowDownwardIcon",
});

export const ArrowForwardIcon = createIcon({
  path: (
    <path
      d="M14.0001 24.1667L12.3551 22.4629L18.8651 15.7083L4.66675 15.7083L4.66675 13.2917L18.8651 13.2917L12.3551 6.53708L14.0001 4.83333L23.3334 14.5L14.0001 24.1667Z"
      fill="white"
      fillOpacity="0.54"
    />
  ),
  displayName: "ArrowForwardIcon",
});

export const SplitIcon = createIcon({
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4L20 10L17.71 7.71L12.41 13L4 13L4 11L11.59 11L16.29 6.29L14 4L20 4ZM17.71 16.29L20 14L20 20L14 20L16.29 17.71L13.41 14.83L14.83 13.41L17.71 16.29Z"
    />
  ),
  displayName: "SplitIcon",
});

export const PieIcon = createIcon({
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 13L13 19.93C16.61 19.48 19.48 16.61 19.93 13L13 13ZM12 4C16.07 4 19.44 7.06 19.93 11L4.07 11C4.56 7.06 7.93 4 12 4ZM11 13L4.07 13C4.52 16.61 7.39 19.48 11 19.93L11 13Z"
    />
  ),
  displayName: "PieIcon",
});
