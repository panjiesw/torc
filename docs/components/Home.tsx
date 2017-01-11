// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { withRouter, RouteComponentProps, InjectedRouter } from 'react-router';
import { Tabs, Tab } from 'react-toolbox/lib/tabs';
import MRTC from 'markdown-to-react-components';
import { LinkExample } from './examples/LinkExample';

const home: any = require('../mds/home.md');
const link: any = require('../mds/link.md');

const TABS = ['Link', 'ButtonLink'];

export interface HomeParams {
	t?: string;
}

export interface HomeProps extends RouteComponentProps<HomeParams, {}> {
	router: InjectedRouter;
	setTitle(title: string);
}

export interface HomeState {
	tab: number;
}

@withRouter
export class Home extends React.PureComponent<HomeProps, {}> {
	state: HomeState = {
		tab: 0
	}

	handleTabChange = (tab: number) => {
		const {router, location} = this.props;
		this.setTab(tab);
		if (location) {
			router.push({
				pathname: location.pathname,
				query: {
					t: TABS[tab]
				}
			});
		}
	}

	constructor(props?: HomeProps, context?: any) {
		super(props, context);
	}

	componentWillReceiveProps(next: HomeProps) {
		const {location} = next;
		if (location) {
			const tabs = (location.query as any).t;
			if (tabs && tabs.length > 0 && TABS.indexOf(tabs) >= 0) {
				this.setTab(TABS.indexOf(tabs));
			}
		}
	}

	componentDidMount() {
		const {setTitle} = this.props;
		setTitle('HOME');
	}

	render(): JSX.Element | null {
		const {tab} = this.state;
		return (
			<article>
				<section style={{textAlign: 'center'}}>
					{MRTC(home).tree}
				</section>
				<section style={{marginTop: '20px'}}>
					<Tabs index={tab} onChange={this.handleTabChange}>
						<Tab label={TABS[0]}>
							{MRTC(link).tree}
							<h4>Basic Link</h4>
							<LinkExample></LinkExample>
						</Tab>
						<Tab label={TABS[1]}>ButtonLink</Tab>
					</Tabs>
				</section>
			</article>
		)
	}

	private setTab(tab: number) {
		this.setState({ tab });
		this.props.setTitle(`${TABS[tab]} Component`);
	}
}
