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

declare module 'react-toolbox/lib/drawer' {
	import * as React from "react";
	import ReactToolbox from 'react-toolbox/lib/index';

	export interface DrawerTheme {
		active?: string;
		content?: string;
		drawer?: string;
		left?: string;
		right?: string;
		wrapper?: string;
	}

	export interface DrawerProps extends ReactToolbox.Props {
		active?: boolean;
		children?: React.ReactNode;
		insideTree?: boolean;
		onOverlayClick?: Function;
		theme?: DrawerTheme;
		type?: "left" | "right";
		withOverlay?: boolean;
	}

	export class Drawer extends React.Component<DrawerProps, {}> { }

	export default Drawer;
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

declare module 'react-toolbox/lib/layout' {
	import * as React from "react";
	import ReactToolbox from "react-toolbox/lib/index";
	import { DrawerProps } from 'react-toolbox/lib/drawer';

	export interface LayoutTheme {
		appbarFixed?: string;
		layout?: string;
		navDrawerPinned?: string;
		navDrawerClipped?: string;
		sidebarPinned?: string;
		sidebarClipped?: string;
		sidebarWidth1?: string;
		sidebarWidth2?: string;
		sidebarWidth3?: string;
		sidebarWidth4?: string;
		sidebarWidth5?: string;
		sidebarWidth6?: string;
		sidebarWidth7?: string;
		sidebarWidth8?: string;
		sidebarWidth9?: string;
		sidebarWidth10?: string;
		sidebarWidth11?: string;
		sidebarWidth12?: string;
		sidebarWidth25?: string;
		sidebarWidth33?: string;
		sidebarWidth50?: string;
		sidebarWidth66?: string;
		sidebarWidth75?: string;
		sidebarWidth100?: string;
	}

	export interface LayoutProps extends ReactToolbox.Props {
		children?: [NavDrawer | Panel | Sidebar];
		theme?: LayoutTheme;
	}

	export class Layout extends React.Component<LayoutProps, {}> { }

	export interface NavDrawerTheme {
		pinned?: string;
		clipped?: string;
	}

	export interface NavDrawerProps extends DrawerProps {
		active?: boolean;
		clipped?: boolean;
		onOverlayClick?: Function;
		permanentAt?: "sm" | "smTablet" | "md" | "lg" | "lgTablet" | "xl" | "xxl" | "xxxl";
		pinned?: boolean;
		theme?: NavDrawerTheme;
	}

	export class NavDrawer extends React.Component<NavDrawerProps, {}> { }

	export interface PanelTheme {
		bodyScroll?: string;
		panel?: string;
	}

	export interface PanelProps extends ReactToolbox.Props {
		bodyScroll?: boolean;
		theme?: PanelTheme;
	}

	export class Panel extends React.Component<PanelProps, {}> { }

	export interface SidebarTheme {
		clipped?: string;
		pinned?: string;
	}

	export interface SidebarProps extends DrawerProps {
		clipped?: boolean;
		permanentAt?: "sm" | "smTablet" | "md" | "lg" | "lgTablet" | "xl" | "xxl" | "xxxl";
		pinned?: boolean;
		theme?: SidebarTheme;
		width?: number; // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 25 | 33 | 50 | 66 | 75 | 100;
	}

	export class Sidebar extends React.Component<SidebarProps, {}> { }
}

declare module 'react-toolbox/lib/link/theme.css' {
	export const active: string;
	export const icon: string;
	export const link: string;
}
