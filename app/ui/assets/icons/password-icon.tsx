import React from "react";

function PasswordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div>
      <svg
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M3 7V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3ZM16 9H2V19H16V9ZM8 14.7324C7.4022 14.3866 7 13.7403 7 13C7 11.8954 7.8954 11 9 11C10.1046 11 11 11.8954 11 13C11 13.7403 10.5978 14.3866 10 14.7324V17H8V14.7324ZM5 7H13V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default PasswordIcon;