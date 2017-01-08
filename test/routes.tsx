// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import { Router, PlainRoute, createMemoryHistory } from 'react-router';

export const createRouter: (routes: PlainRoute | PlainRoute[]) => JSX.Element = (routes) => (
	<Router history={createMemoryHistory('/')} routes={routes} />
)
