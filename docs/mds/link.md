#### Properties

It uses the same properties for [React Toolbox Link](http://react-toolbox.com/#/components/link)
but without the `href` (replace by `to`) and `active` (handled by `react-router`). These are the additional properties
available

Name | Type | Default | Description
---------|----------|---------|---------
 to | Object | | **Required**. Passed to react-router's Link. See the docs [here](https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link)
 onlyActiveOnIndex | Boolean | false | Passed to react-router's Link. see the docs above.
