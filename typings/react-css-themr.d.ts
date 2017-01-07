// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

declare module 'react-css-themr' {
	import * as React from 'react';

	interface TReactCSSThemrOptions {
		composeTheme?: 'deeply' | 'softly' | false;
		withRef?: boolean;
	}

	export function themr<P>(name: string | number, local?: any, options?: TReactCSSThemrOptions):
		(<TFunction extends React.ComponentClass<P>>(target: TFunction) => TFunction) &
		((clazz: React.StatelessComponent<P>) => React.ClassicComponentClass<P>)
}
