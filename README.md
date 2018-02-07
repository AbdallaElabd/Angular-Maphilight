# angular-maphilight
An Angular Directive that adds highlights to image maps.

![alt text](https://cdn-images-1.medium.com/max/800/1*NyFdxMXz9E2iDdinzMh-LQ.png "Example 2 in the docs")

## Usage

In your module:
```
import { MaphilightModule } from 'ng-maphilight'
```
and add `MaphilightModule` to the `imports` array.

In your component class, define a `config` property.

In your template:
```
        <maphilight
          id="statesMap"
          [config]="config"
        >
        <img src="assets/states_imgmap.gif">

        <map>
          <area shape="poly" ...>
        </map>
```


## Examples and Documentation:
- [Website and Docs](http://tylerrick.github.io/angular-maphilight/)
- [Example: Map of United States](http://tylerrick.github.io/angular-maphilight/#/Example2)

## Dependencies
- jQuery (tested with 3.1.1)
- [David Lynch](https://github.com/kemayo)'s [Maphilight](https://github.com/kemayo/maphilight) jQuery plugin

Both are currently assumed/required to be available in the global namespace (`window.jQuery`) but a
pull request that makes it use `import` and npm packages would be gladly accepted if you can get
that to work.

## Development

Uses the [Angular CLI](https://github.com/angular/angular-cli). See [README.ng.md](README.ng.md) for more information.

