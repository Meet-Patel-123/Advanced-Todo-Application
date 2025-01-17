import React from "react";

const CashIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="30px"
        height="30px"
        {...props}
      >
        <path
          d="M19,4H5C2.24,4,0,6.24,0,9v6c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5v-6c0-2.76-2.24-5-5-5Zm3,11c0,1.65-1.35,3-3,3H5c-1.65,0-3-1.35-3-3v-6c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v6Zm-10-7c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Zm0,6c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default CashIcon;
