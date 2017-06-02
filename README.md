### Project setup

![alt tag](https://raw.githubusercontent.com/gyandeeps/webpack-split-dynamic-common/master/docs/main.png)

### Output with `npm run webpack`

![alt tag](https://raw.githubusercontent.com/gyandeeps/webpack-split-dynamic-common/master/docs/actual.png)

### Expected output

![alt tag](https://raw.githubusercontent.com/gyandeeps/webpack-split-dynamic-common/master/docs/expected.png)

### Notes

* `npm run webpack` runs webpack with no plugins
* `npm run webpack:common` runs webpack with `CommonChunkPlugin`.
    * `async: true`
    * `children: true`

ANSWER: Issue filled with webpack - https://github.com/webpack/webpack/issues/4572
