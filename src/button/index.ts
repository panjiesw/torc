// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { themr } from 'react-css-themr';
import { BUTTON } from 'react-toolbox/lib/identifiers';
import { Button } from 'react-toolbox/lib/button';
import { buttonLinkFactory, ButtonLinkProps } from './Button';

const ButtonLink = buttonLinkFactory(Button);
const ThemedButtonLink = themr(BUTTON)(ButtonLink);

export default ThemedButtonLink;
export { ThemedButtonLink as ButtonLink, ButtonLinkProps };
