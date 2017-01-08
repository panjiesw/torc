// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/// <reference types="jasmine" />
/// <reference types="react" />

declare module 'jasmine-enzyme' {
	export default function jasmineEnzyme(): void;
}

declare namespace jasmine {
	interface Matchers {
		toBeChecked(): boolean;
		toBeDisabled(): boolean;
		toBeEmpty(): boolean;
		toBePresent(): boolean;
		toContainReact(elem: JSX.Element): boolean;
		toHaveClassName(): boolean;
		toHaveHTML(): boolean;
		toHaveProp(key: string, value?: any): boolean;
		toHaveRef(): boolean;
		toHaveState(): boolean;
		toHaveStyle(): boolean;
		toHaveTagName(): boolean;
		toHaveText(text: string): boolean;
		toHaveValue(): boolean;
		toMatchSelector(): boolean;
	}
}
