import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

export const FeedIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.988v-3M9.02 2.838l-5.39 4.2c-.9.7-1.63 2.19-1.63 3.32v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-7.28c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12Z"
    />
  </Svg>
);

export const ChatIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.22 16.83.39 3.16c.1.83-.79 1.41-1.5.98l-4.19-2.49c-.46 0-.91-.03-1.35-.09a4.86 4.86 0 0 0 1.18-3.16c0-2.84-2.46-5.14-5.5-5.14-1.16 0-2.23.33-3.12.91-.03-.25-.04-.5-.04-.76C5.09 5.69 9.04 2 13.92 2s8.83 3.69 8.83 8.24c0 2.7-1.39 5.09-3.53 6.59Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.75 15.23c0 1.19-.44 2.29-1.18 3.16-.99 1.2-2.56 1.97-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97c-1.34-.93-2.2-2.42-2.2-4.1 0-1.76.94-3.31 2.38-4.23.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14Z"
    />
  </Svg>
);

export const BookmarkIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 9.05a8 8 0 0 0 5.5 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.07 2H7.43C5.3 2 3.57 3.74 3.57 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.93 3.74 19.2 2 17.07 2Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.07 2H7.43C5.3 2 3.57 3.74 3.57 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.93 3.74 19.2 2 17.07 2Z"
    />
  </Svg>
);

export const ProfileIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.159 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43c0-2.45 1.98-4.44 4.44-4.44a4.435 4.435 0 0 1 .16 8.87Zm-5 3.69c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0Z"
    />
  </Svg>
);

export const BellIcons = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      stroke="#EB5CF8"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20.019 10.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06l-1.15 1.91c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06v-2.89c0-3.3-2.7-6-6-6Z"
    />
    <Path
      stroke="#EB5CF8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M21.872 11.201a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z"
    />
    <Path
      stroke="#EB5CF8"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M23.02 27.059c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12"
    />
    <Rect width={39} height={39} x={0.5} y={0.5} stroke="#E0E0E0" rx={5.5} />
  </Svg>
);

export const LikeIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#E10BF4"
      d="M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z"
    />
  </Svg>
);

export const CommentIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#525252"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9.67 18.33h-.436C5.744 18.33 4 17.459 4 13.097V8.734C4 5.244 5.745 3.5 9.234 3.5h6.98c3.489 0 5.234 1.745 5.234 5.234v4.362c0 3.49-1.745 5.235-5.235 5.235h-.436c-.27 0-.532.13-.698.349l-1.308 1.744c-.576.768-1.518.768-2.094 0l-1.309-1.744c-.14-.192-.462-.35-.698-.35Z"
    />
    <Path
      stroke="#525252"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.026}
      d="M9.357 11.35h.008M13.228 11.35h.008M17.1 11.35h.007"
    />
  </Svg>
);

export const DownloadIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#525252"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.5 11.999 4 4m0 0 4-4m-4 4V5.332m-8 13.333a25.266 25.266 0 0 0 16 0"
    />
  </Svg>
);

export const ShareIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#525252"
      fillRule="evenodd"
      d="M19.55 6.975a2.975 2.975 0 0 1-5.153 2.027l-4.345 2.568a2.972 2.972 0 0 1 0 1.86l4.346 2.568a2.975 2.975 0 1 1-.65 1.097l-4.346-2.568a2.975 2.975 0 1 1 0-4.054l4.346-2.568a2.975 2.975 0 1 1 5.802-.93Zm-1.275 0a1.7 1.7 0 1 1-3.4 0 1.7 1.7 0 0 1 3.4 0ZM7.225 14.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Zm11.05 3.825a1.7 1.7 0 1 1-3.4 0 1.7 1.7 0 0 1 3.4 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const SaveIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#525252"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.25 9.05a8 8 0 0 0 5.5 0"
    />
    <Path
      stroke="#525252"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.903}
      d="M17.317 20.345h0c.627.35 1.097.322 1.383.154.286-.168.538-.566.538-1.285V6.488a3.057 3.057 0 0 0-3.044-3.036H7.487a3.043 3.043 0 0 0-3.035 3.035v12.727c0 .713.251 1.11.538 1.278.287.17.758.198 1.384-.147 0 0 0 0 0 0l4.406-2.447 6.537 2.447Zm0 0L12.913 17.9l-.002-.002m4.406 2.447-4.406-2.447m0 0c-.316-.178-.702-.254-1.063-.254-.362 0-.749.076-1.067.254h2.13Z"
    />
  </Svg>
);

export const CancelIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M10.001 18.335a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.5 7.5-5 5M7.5 7.5l5 5"
    />
  </Svg>
);

export const DeliveredMessaged = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E10BF4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1.625 6.906 2.031 2.032 4.875-4.876M5.5 7.5l1.813 1.438 4.875-4.876"
    />
  </Svg>
);

export const SendLiveMessageIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40.002} height={40} x={0.996} fill="#FDEBFE" rx={20} />
    <Path
      fill="#E10BF4"
      d="m24.08 13.567-8.883 1.734c-5.97 1.161-6.375 4.291-.9 6.937l1.657.801c.482.238.822.68.93 1.206l.346 1.798c1.16 5.97 4.284 6.382 6.936.9l3.943-8.147c1.768-3.654-.044-6.007-4.029-5.229Zm.028 5.04-4.046 3.117a.714.714 0 0 1-.994-.129.714.714 0 0 1 .129-.994l4.045-3.117a.715.715 0 0 1 .995.129.714.714 0 0 1-.13.995Z"
    />
  </Svg>
);
