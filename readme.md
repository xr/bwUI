## An utility, atomic design based css library

Starting from the atomic elements and build molecules, organisms, pages on top of it, please refer to the available elments and classes from this full page.

## Demo

[Click here](https://s3-eu-west-1.amazonaws.com/bonusway-ui/index.html)

##  Architecture 

- folder/file naming prefer plural
- partial file start with _
- be aware of the cascading order when import the partial files

```
sass/
|
|– base/
|   |– _variables.scss   # Independent variables
|   |– _helpers.scss     # Independent Functions & Mixins
|   |– _index.scss       # Main scss rules
|
|– atoms/
|   |– colors
|   |– typography
|   |– icons
|   |– buttons
|   |– quotes
|   |– tooltips
|   ...                  # TODO
|
|– molecules/
|   ...                  # TODO
|
|– organisms/
|   ...                  # TODO…
|
|– vendors/
|   |– fonts
|   |– grid
|
|
`– main.scss             # Main sass entry file
```

## naming convention
- [BEM](http://getbem.com/) (`.block__element-name--modifier`)
- no camelcase AT ALL!

For example:

	```
	<div class="color-box bg grey--dark">grey--dark</div>
	<div class="color-box bg light-grey--dark">light-grey--dark</div>
	<input class="form__input--lg">
	```

## desktop first adaptive design

- start writing css for desktop: large screen
- then shrink design to smaller screen
	@media(max-width: 600px)
- max-width media queries

## Grid System

http://gridlex.devlint.fr

## Buttons

To use buttons, you need to specify background color AND text color e.g. 'class="btn white bg--blue"', this will enable the darken background feature. But if you want to customize the `on-hover` state, you can simply do: `on-hover-bg--red` to change the background or `on-hover--red` to change the text.

## Breakpoints

Based on the data [here](http://gs.statcounter.com/screen-resolution-stats) as well as our own data, we would go with the following breakpoints.

	```
	< 600px phone
    600px - 900px  tablet portrait
    900px - 1200px tablet landscape
    1200px - 1800px desktop
    1800px - big desktop
	```

## Development guides

### DRY
	
- use mixins, functions or create helper for common problems

### Use minxin, functions properly

 - Please check `doc/index.html` for documentation.