// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { Router, InjectedRouter, withRouter } from 'react-router';
import { Location } from 'history';
import InjectButton, { ButtonProps } from 'react-toolbox/lib/button/Button';
import { BUTTON } from 'react-toolbox/lib/identifiers';
import { themr } from 'react-css-themr';
import invariant from 'invariant';

export interface ButtonLinkProps extends ButtonProps {
	to: Router.RoutePattern | Router.LocationDescriptor | ((...args: any[]) => Router.LocationDescriptor);
	type?: string;
	replace?: boolean;
	location?: Location;
	router?: InjectedRouter;
	params?: any;
	routes?: any;
}

function isLeftClickEvent(event: React.MouseEvent<any>) {
	return event.button === 0;
}

function isModifiedEvent(event: React.MouseEvent<any>) {
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const factory: (Button: React.ComponentClass<ButtonProps>) => React.ComponentClass<ButtonLinkProps> = (Button) => {
	class ButtonLink extends React.PureComponent<ButtonLinkProps, {}> {
		// this is take from react-router's Link handleClick
		handleClick = (event: React.MouseEvent<any>) => {
			const {onClick, router, target, type, to, location, replace} = this.props;

			if (onClick) onClick(event);

			if (event.defaultPrevented) return;

			if (!router) {
				if (process.env.NODE_ENV !== 'production') {
					invariant(false, '<ButtonLink>s rendered outside of a router context cannot navigate.')
				} else {
					invariant(false);
				}
			} else {
				if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

				if (target && type === 'a') return;

				event.preventDefault();

				const link = typeof to === 'function' ? to(location) : to;
				if (replace) {
					router.replace(link);
				} else {
					router.push(link);
				}
			}
		}

		constructor(props?: ButtonLinkProps, context?: any) {
			super(props, context);
		}

		render(): JSX.Element | null {
			// tslint:disable-next-line:no-unused-variable
			const {onClick, children, href, type, to, replace, location, params, routes, router, ...others} = this.props;
			let _href: string | undefined = undefined;
			if (type === 'a' && typeof to === 'string') {
				_href = to;
			}
			return (
				<Button onClick={this.handleClick} href={_href} {...others}>
					{children}
				</Button>
			)
		}
	}

	return withRouter(ButtonLink);
}

const ButtonLink = factory(InjectButton);
export default themr<ButtonLinkProps>(BUTTON)(ButtonLink);
export { ButtonLink, factory as buttonLinkFactory };
