import 'styled-components';

import {light} from '../styles/theme';

export type LightTheme = typeof light;


declare module'styled-components'{
  export interface DefaultTheme extends LightTheme{}
  
}