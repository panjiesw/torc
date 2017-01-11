// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { render } from 'react-dom';
import { Router, PlainRoute, useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import { Root } from './components/Root';
import { Home } from './components/Home';
import { DummyBlog } from './components/DummyBlog';

const browserHistory = useRouterHistory(createBrowserHistory)({ basename: '/' })

const routes: PlainRoute = {
	path: '/',
	component: Root,
	indexRoute: {
		component: Home
	},
	childRoutes: [
		{
			path: 'blog',
			component: DummyBlog
		}
	]
}

render((
	<Router history={browserHistory} routes={routes} />
), document.getElementById('app'))
