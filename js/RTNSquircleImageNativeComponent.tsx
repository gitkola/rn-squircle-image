import type { ViewProps } from "ViewPropTypes";
import type { HostComponent } from "react-native";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export interface NativeProps extends ViewProps {
  uri?: string;
  size: number;
}

export default codegenNativeComponent<NativeProps>(
  "RTNSquircleImage"
) as HostComponent<NativeProps>;
