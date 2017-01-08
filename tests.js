// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

[
	require.context('./test', true, /\.ts(x?)$/),
	require.context('./src', true, /\.ts(x?)$/)
].forEach(function(context) {
	context.keys().forEach(context);
});

//# sourceMappingURL=tests.js.map
