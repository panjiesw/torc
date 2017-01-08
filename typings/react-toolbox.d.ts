// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

declare module 'react-toolbox/lib/button/Button' {
	import * as React from 'react';
	import { ButtonTheme } from 'react-toolbox/lib/button';

	export interface ButtonProps extends React.HTMLAttributes<any> {
		accent?: boolean;
		disabled?: boolean;
		flat?: boolean;
		floating?: boolean;
		href?: string;
		icon?: React.ReactNode | string;
		inverse?: boolean;
		label?: string;
		mini?: boolean;
		neutral?: boolean;
		primary?: boolean;
		raised?: boolean;
		ripple?: boolean;
		theme?: ButtonTheme;
	}

	export class Button extends React.Component<ButtonProps, {}> { }
	export default Button;

	export { ButtonTheme }
}

declare module 'react-toolbox/lib/button/theme.css' {
  export const accent: string;
  export const button: string;
  export const flat: string;
  export const floating: string;
  export const icon: string;
  export const inverse: string;
  export const mini: string;
  export const neutral: string;
  export const primary: string;
  export const raised: string;
  export const rippleWrapper: string;
  export const toggle: string;
}

declare module 'react-toolbox/lib/identifiers' {
	export const APP_BAR: string;
	export const AUTOCOMPLETE: string;
	export const AVATAR: string;
	export const BUTTON: string;
	export const CARD: string;
	export const CHIP: string;
	export const CHECKBOX: string;
	export const DATE_PICKER: string;
	export const DIALOG: string;
	export const DRAWER: string;
	export const DROPDOWN: string;
	export const INPUT: string;
	export const LAYOUT: string;
	export const LINK: string;
	export const LIST: string;
	export const MENU: string;
	export const NAVIGATION: string;
	export const OVERLAY: string;
	export const PROGRESS_BAR: string;
	export const RADIO: string;
	export const RIPPLE: string;
	export const SLIDER: string;
	export const SNACKBAR: string;
	export const SWITCH: string;
	export const TABLE: string;
	export const TABS: string;
	export const TOOLTIP: string;
	export const TIME_PICKER: string;
}

declare module 'react-toolbox/lib/link/theme.css' {
	export const active: string;
	export const icon: string;
	export const link: string;
}
