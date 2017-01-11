// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

declare module 'markdown-to-react-components' {
	export interface MRTCResult {
		tree: any;
		toc: any;
	}

	const MRTC: {
		(content: string): MRTCResult;
		configure(config: any);
	}

	export default MRTC;
}
