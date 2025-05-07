declare module 'react-native-vector-icons' {
  import * as React from 'react';
  export interface IconProps {
    name: string;
    size: number;
    color: string;
  }
  export class Ionicons extends React.Component<IconProps> {}
  export class MaterialIcons extends React.Component<IconProps> {}
}
