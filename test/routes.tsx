// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import { Router, PlainRoute, InjectedRouter, createMemoryHistory } from 'react-router';

export const mockRouterContext: InjectedRouter = {
	// tslint:disable-next-line:no-empty
	push(_: any) {},
	// tslint:disable-next-line:no-empty
	replace(_: any) {},
	// tslint:disable-next-line:no-empty
	go(_: number) {},
	// tslint:disable-next-line:no-empty
	goBack() {},
	// tslint:disable-next-line:no-empty
	goForward() {},
	// tslint:disable-next-line:no-empty
	setRouteLeaveHook(_: any, __: any) {},
	// tslint:disable-next-line:no-empty
	createPath(_: any, __: any): any {},
	// tslint:disable-next-line:no-empty
	createHref(_: any, __: any): any {},
	// tslint:disable-next-line:no-empty
	isActive(_: any, __any): any {}
}

export const createRoutes: (C: React.ReactType) => PlainRoute[] = (C) => {
	const A: React.SFC<any> = () => (<div>a</div>);

	const routes: PlainRoute[] = [
		{ path: '/', component: C },
		{ path: 'a', component: A }
	]

	return routes;
}

export const createRouter: (routes: PlainRoute | PlainRoute[]) => JSX.Element = (routes) => (
	<Router history={createMemoryHistory('/')} routes={routes} />
)
