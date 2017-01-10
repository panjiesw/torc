// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Layout, Panel } from 'react-toolbox/lib/layout';
import * as styles from './styles.css';

export interface RootState {
	title: string;
}

export class Root extends React.PureComponent<{}, RootState> {
	mainTitle = 'TORC';

	state: RootState = {
		title: 'TORC'
	}

	setTitle = (_title) => {
		const title = `${this.mainTitle} - ${_title}`;
		this.setState({ title });
	}

	constructor(props?: {}, context?: any) {
		super(props, context);
	}

	render(): JSX.Element | null {
		const {title} = this.state;

		return (
			<Layout>
				<AppBar fixed title={title}></AppBar>
				<Panel className={styles.docPanel}>
					{
						this.props.children && React.cloneElement(this.props.children as any, {
							setTitle: this.setTitle
						})
					}
				</Panel>
			</Layout>
		)
	}
}
