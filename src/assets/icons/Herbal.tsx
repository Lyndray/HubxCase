import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.94 3.5c.582 1.354 1.565 2.693 2.94 3.27.157.066.335.115.518.156a5.35 5.35 0 011.279-1.352c.423-.311.866-.555 1.322-.746a3.732 3.732 0 00-.412-.25c-.572-.3-1.192-.562-1.795-.845.567.153 1.218.21 1.76.408.34.125.651.296.942.5.869-.295 1.776-.437 2.682-.545-.734-1.22-2.3-2.2-3.481-2.642-1.233-.463-2.629-.52-4-.662C1.854.705.94.392.271.025.12-.058-.042.08.01.249.339 1.3.505 2.49.94 3.5z"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Path
        d="M15.433 3.34c-1.546.84-3.32.944-5.058 1.143-.848.098-1.689.22-2.488.461a7.395 7.395 0 00-.517.177 6.089 6.089 0 00-1.452.784 4.922 4.922 0 00-1.082 1.107c-.474.66-.804 1.421-1.076 2.21a12.605 12.605 0 00-.678 4.474c.018.614.028 1.254.18 1.854.034.132.067.3.17.398.134.13.374-.003.32-.19-.389-1.327-.147-2.876.391-4.143.618-1.457 1.811-2.324 3.27-2.852.387-.14.783-.263 1.185-.379.008-.003.016-.003.025-.003.08 0 .114.117.03.155-.474.214-.944.43-1.392.664-2.194 1.144-3.152 3.809-2.33 3.809a.623.623 0 00.235-.056c1.27-.524 2.776-.53 4.17-.788.491-.09.969-.212 1.417-.398 1.778-.743 3.05-2.194 3.807-3.94.564-1.303.783-2.842 1.21-4.196.056-.173-.067-.322-.217-.322a.225.225 0 00-.12.031z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
