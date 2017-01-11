// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { FontIcon } from 'react-toolbox/lib/font_icon';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import { ButtonLink as RawButtonLink, ButtonLinkProps } from 'torc/button_link/ButtonLink';
import { ButtonLink as ThemedButtonLink } from 'torc/button_link';
import { createRouter, createRoutes, mockRouterContext } from '../routes';

describe('ButtonLink', () => {
	const wrapperFactory: (props: ButtonLinkProps) => React.SFC<any> = (props) =>
		() => (
			<div>
				<RawButtonLink {...props} />
			</div>
		)

	beforeEach(() => {
		jasmineEnzyme();
	});

	describe('Raw', () => {
		it('Must render properly', () => {
			const wrapper = mount(<RawButtonLink to='a' label='a' icon='menu' />, {
				context: {
					router: mockRouterContext
				}
			});
			expect(wrapper.find('button')).toBePresent();
			expect(wrapper.find('button').first()).toHaveText('menua');
			expect(wrapper.find(RawButtonLink)).not.toHaveProp('theme');
			expect(wrapper).toContainReact(<FontIcon value='menu' />);
		});

		it('Must be able to render as anchor', () => {
			const wrapper = mount(<RawButtonLink to='a' label='a' type='a' />, {
				context: {
					router: mockRouterContext
				}
			});
			expect(wrapper.find('a')).toBePresent();
			expect(wrapper.find('a').first()).toHaveProp('href', 'a');
		});

		it('Must navigate to route', () => {
			const wrapper = mount(createRouter(createRoutes(wrapperFactory({
				to: 'a', label: 'a'
			}))));
			wrapper.find('button').simulate('click', { button: 0 });
			expect(wrapper).toContainReact(<div>a</div>);
		});

		it('Must navigate to computed route', () => {
			const toProvider = jasmine.createSpy('toProvider').and.returnValue('a')
			const wrapper = mount(createRouter(createRoutes(wrapperFactory({
				to: toProvider, label: 'a'
			}))));
			wrapper.find('button').simulate('click', { button: 0 });
			expect(wrapper).toContainReact(<div>a</div>);
			expect(toProvider).toHaveBeenCalled();
		});

		it('Must navigate to replaced route', () => {
			const wrapper = mount(createRouter(createRoutes(wrapperFactory({
				to: 'a', label: 'a', replace: true
			}))));
			wrapper.find('button').simulate('click', { button: 0 });
			expect(wrapper).toContainReact(<div>a</div>);
		});

		it('Must not navigate if onClick provided and defaultPrevented ', () => {
			const onClick = jasmine.createSpy('onClick').and.callFake((event: any) => {
				event.preventDefault();
			});
			const wrapper = mount(createRouter(createRoutes(wrapperFactory({
				onClick, to: 'a'
			}))));
			wrapper.find('button').simulate('click', { button: 0 });
			expect(wrapper).not.toContainReact(<div>a</div>);
			expect(onClick).toHaveBeenCalled();
		});

		it('Must not navigate if modified click event', () => {
			const wrapper = mount(createRouter(createRoutes(wrapperFactory({
				to: 'a'
			}))));
			wrapper.find('button').simulate('click', { button: 0, metaKey: true });
			expect(wrapper).not.toContainReact(<div>a</div>);
		});

		it('Must not navigate if not left click', () => {
			const wrapper = mount(createRouter(createRoutes(wrapperFactory({
				to: 'a'
			}))));
			wrapper.find('button').simulate('click', { button: 1 });
			expect(wrapper).not.toContainReact(<div>a</div>);
		});
	});

	describe('Themed', () => {
		it('Must inject theme', () => {
			const wrapper = mount(<ThemedButtonLink to='a' />, {
				context: {
					router: mockRouterContext
				},
				childContextTypes: {
					router: mockRouterContext
				}
			});
			expect(wrapper.ref('wrappedInstance')).toHaveProp('theme');
		});
	});
});
