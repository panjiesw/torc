// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { FontIcon } from 'react-toolbox/lib/font_icon';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import { Link as RawLink } from 'torc/link/Link';
import { Link as ThemedLink } from 'torc/link';
import { createRouter, createRoutes } from '../routes';

describe('Link', () => {
	const TestLink: React.SFC<any> = () => (
		<div>
			<RawLink to='a' label='a' icon='menu' count={1} />
		</div>
	);

	beforeEach(() => {
		jasmineEnzyme();
	});

	describe('Raw', () => {
		it('Must render properly', () => {
			const wrapper = mount(<TestLink />);
			expect(wrapper.find('a')).toBePresent();
			expect(wrapper.find('abbr').first()).toHaveText('a');
			expect(wrapper.find('small').first()).toHaveText('1');
			expect(wrapper.find(RawLink)).not.toHaveProp('theme');
			expect(wrapper).toContainReact(<FontIcon value='menu' />);
		});

		it('Must navigate to route', () => {
			const wrapper = mount(createRouter(createRoutes(TestLink)));
			wrapper.find('a').simulate('click', { button: 0 });
			expect(wrapper).toContainReact(<div>a</div>);
		});
	});

	describe('Themed', () => {
		it('Must inject theme', () => {
			const wrapper = mount(<ThemedLink to='a' />);
			expect(wrapper.find(RawLink)).toHaveProp('theme');
		});
	});
});
