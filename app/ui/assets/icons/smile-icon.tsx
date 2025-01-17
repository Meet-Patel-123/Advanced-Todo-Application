import React from "react";

const SmileIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.498"
        height="15.498"
        viewBox="0 0 15.498 15.498"
        {...props}
      >
        <path
          id="face-smile-emoji"
          d="M7.749,8A7.749,7.749,0,1,0,15.5,15.749,7.748,7.748,0,0,0,7.749,8Zm0,14A6.249,6.249,0,1,1,14,15.749,6.256,6.256,0,0,1,7.749,22Zm-2.5-6.749a1,1,0,1,0-1-1A1,1,0,0,0,5.249,15.249Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,10.249,15.249Zm.125,2.268a3.413,3.413,0,0,1-5.249,0,.75.75,0,0,0-1.153.959,4.919,4.919,0,0,0,7.555,0,.75.75,0,0,0-1.153-.959Z"
          transform="translate(0 -8)"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default SmileIcon;
