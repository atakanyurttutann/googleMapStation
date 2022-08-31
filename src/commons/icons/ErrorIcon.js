const ErrorIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width ? width : "25"}
      height={height ? height : "25"}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 0C5.59667 0 0 5.59667 0 12.5C0 19.4033 5.59667 25 12.5 25C19.4033 25 25 19.4033 25 12.5C25 5.59667 19.4033 0 12.5 0Z"
        fill={color ? color : "#FF0000"}
      />
      <path
        d="M5.86476 19.5034C13.3789 19.5034 19.4707 13.4116 19.4707 5.89747C19.4724 4.47558 19.251 3.06223 18.8145 1.709C16.8998 0.586259 14.7196 -0.0038007 12.5 1.84221e-05C5.59669 1.84221e-05 1.42159e-05 5.59669 1.42159e-05 12.5C-0.00337287 14.7406 0.598558 16.9405 1.7422 18.8672C3.07547 19.2901 4.46602 19.5047 5.86476 19.5034Z"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        d="M12.4946 20.9799C12.0929 20.9799 11.7001 20.8608 11.3661 20.6377C11.032 20.4145 10.7716 20.0973 10.6177 19.7262C10.4639 19.355 10.4236 18.9466 10.5018 18.5525C10.58 18.1585 10.7733 17.7964 11.0573 17.5122C11.3412 17.228 11.7031 17.0343 12.0971 16.9557C12.491 16.8771 12.8995 16.9171 13.2708 17.0706C13.6421 17.224 13.9595 17.4841 14.183 17.818C14.4065 18.1519 14.526 18.5445 14.5264 18.9462C14.5266 19.2132 14.4743 19.4776 14.3723 19.7243C14.2703 19.9711 14.1207 20.1953 13.932 20.3842C13.7433 20.573 13.5192 20.7229 13.2726 20.8251C13.026 20.9273 12.7616 20.9799 12.4946 20.9799ZM14.4639 13.9829C14.4297 14.2968 14.2879 14.5893 14.0625 14.8105C13.8342 15.0333 13.5371 15.1722 13.2197 15.2045H13.2104C13.0114 15.2273 12.8112 15.2387 12.6108 15.2387C12.3707 15.2399 12.1306 15.2285 11.8916 15.2045H11.8818C11.5646 15.1721 11.2677 15.0332 11.0395 14.8105C10.8142 14.5893 10.6724 14.2968 10.6382 13.9829C10.5894 13.5244 10.5649 10.3403 10.5649 9.63082C10.5649 8.92134 10.5898 5.72896 10.6382 5.27047C10.6718 4.95565 10.8137 4.66226 11.0395 4.44039C11.2679 4.21797 11.5647 4.07913 11.8818 4.04635H11.8916C12.1306 4.02248 12.3709 4.01514 12.6108 4.02438C12.8108 4.01512 13.0112 4.02247 13.21 4.04635H13.2197C13.5375 4.0801 13.8345 4.22035 14.0625 4.4443C14.2884 4.66617 14.4302 4.95956 14.4639 5.27438C14.5127 5.73287 14.5371 8.92574 14.5371 9.63472C14.5371 10.3437 14.5122 13.5263 14.4639 13.9829Z"
        fill="white"
      />
    </svg>
  );
};

export default ErrorIcon;
