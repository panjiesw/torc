// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { themr } from 'react-css-themr';
import { LINK } from 'react-toolbox/lib/identifiers';
import { Link, LinkProps } from './Link';
import * as theme from 'react-toolbox/lib/link/theme.css';

const ThemedLink = themr<LinkProps>(LINK, theme)(Link);

export default ThemedLink;
export { ThemedLink as Link, LinkProps };
