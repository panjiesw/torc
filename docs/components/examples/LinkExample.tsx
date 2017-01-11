// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { Row, Col } from '../flex';
import { Link } from 'torc/link';

const LinkExample: React.SFC<{}> = () => (
	<Row>
		<Col sm={12} md={6}>
			<nav>
				<Link to='/' onlyActiveOnIndex label='Work' count={4} icon='business' />
				<Link to='/blog' label='Blog' icon='speaker_notes' />
				<Link to='/explore' label='Explore' icon='explore' />
			</nav>
		</Col>
		<Col sm={12} md={6}></Col>
	</Row>
)

export { LinkExample };
