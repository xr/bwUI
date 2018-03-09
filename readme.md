## Principles

Build a modern UI library that cares about:

	- responsive
		- suitable for all countries (widths, different languages etc)
		- fluid layout
		- media queries (adaptive/desktop-first)
		- relative units

	- maintainable, scalable, reliable
		- guidance
		- architecture
		- reusable
		- growth
		- naming
		- clean code
		- autoprefixer
	
	- performance
		- only built what we need
		- less redundant vendors
		- less images (build process, base64 for small images)
		- uglify


##  Architecture (6-1 patterns which derived from 7-1 patterns)

- folder/file naming prefer plural
- partial file start with _
- be aware of the cascading order when import the partial files

```
sass/
|
|– abstracts/
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _variables.scss   # Sass Variables
|
|– base/
|   |– _base.scss        # Reset/normalize
|   |– _typography.scss  # Typography rules
|   |– _animations.scss  # animations
|   ...                  # Etc…
|
|– components/
|   |– _button.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layouts/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– main.scss             # Main Sass file
```
## Demo
	Please check the `index.html` page in the repo. (not responsive, please check via desktop)

## CSS guidelines
	[Airbnb](https://github.com/airbnb/css)

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
	
   - use mixins, functions or create helper for general problems (Ref: `abstracts/_minxins.scss`)

### Use Colors properly

 - Please always use `color($color-name, $color-variations)` to get the correct color, available colors and variations are available at `abstracts/_abstracts.scss`.
 - use `colorfy($property-name)` to support color variations for different elements, such as: `class="bg navy-light"`, Ref: `base/_utilities.scss`.



## Project status checklist

> "marked" means both design and implementation are done.

- [x] Archetecture
- [x] Guidelines
- [x] Grid system (http://gridlex.devlint.fr/)
- [x] Icon system
- [x] Color palette
- [ ] Typography
- [ ] Card
- [ ] Alert
- [ ] Button
- [ ] Form
- [ ] Utility
- [ ] Animations

## TODO
- color background activator


## Designs

![#1](designs/ui-1.png)