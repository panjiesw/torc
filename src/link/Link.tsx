// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { Link as RouterLink, Router } from 'react-router';
import { LinkTheme } from 'react-toolbox/lib/link';
import { FontIcon } from 'react-toolbox/lib/font_icon';
import { LINK } from 'react-toolbox/lib/identifiers';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

export interface LinkProps extends React.HTMLAttributes<RouterLink> {
	to: Router.RoutePattern | Router.LocationDescriptor | ((...args: any[]) => Router.LocationDescriptor);
	count?: number;
	icon?: string;
	label?: string;
	onlyActiveOnIndex?: boolean;
	theme?: LinkTheme;
}

const Link: React.SFC<LinkProps> =
	({to, count, icon, label, onlyActiveOnIndex, children, theme, className, ...others}) => {
		let classes = className;
		if (theme) {
			classes = classnames(theme.link, className);
		}
		return (
			<RouterLink onlyActiveOnIndex={onlyActiveOnIndex}
				to={to}
				activeClassName={theme && theme.active}
				className={classes}
				{...others} >
				{icon && icon.length ? <FontIcon className={theme && theme.icon} value={icon} /> : null}
				{label ? <abbr title={label}>{label}</abbr> : null}
				{count && count !== 0 ? <small>{count}</small> : null}
				{children}
			</RouterLink>
		)
	}
Link.displayName = 'RouterLink';

export default themr<LinkProps>(LINK)(Link);
export { Link };
