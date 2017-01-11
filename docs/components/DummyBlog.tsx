// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { InjectedRouter, withRouter } from 'react-router';
import { Button } from 'react-toolbox/lib/button';

export interface DummyBlogProps {
	router: InjectedRouter;
	setTitle(title: string);
}

@withRouter
class DummyBlog extends React.PureComponent<DummyBlogProps, {}> {
	getBack = () => {
		this.props.router.goBack();
	}

	componentDidMount() {
		this.props.setTitle('Dummy Blog Route');
	}

	render(): JSX.Element | null {
		return (
			<section>
				<Button primary raised onClick={this.getBack}>Go Back</Button>
			</section>
		)
	}
}

export { DummyBlog };
