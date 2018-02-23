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


## Plan

### Architecture (6-1 patterns which derived from 7-1 patterns)

- folder naming all plural
- partial file naming all singular
- be aware of the cascading order

```
sass/
|
|– abstracts/
|   |– _reset.scss       # Reset/normalize
|   |– _variables.scss   # varialbes
|   |– _typography.scss  # Typography rules
|   |– _animations.scss   # animations
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
|– utils/
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– main.scss             # Main Sass file
```

### CSS guidelines
	[Airbnb](https://github.com/airbnb/css)

### naming convention
	[BEM — Block Element Modifier](http://getbem.com/)

### desktop first adaptive design
	- start writing css for desktop: large screen
    - then shrink design to smaller screen
        @media(max-width: 600px)
    - max-width media queries

#### Breakpoints
	Based on the data [here](http://gs.statcounter.com/screen-resolution-stats) as well as our own data, we would go with the following breakpoints.

	```
	< 600px phone
    600px - 900px  tablet portrait
    900px - 1200px tablet landscape
    1200px - 1800px desktop
    1800px - big desktop
	```


### Project status checklist

> "marked" means both design and implementation are done.

- [x] Archetecture
- [x] Guidelines
- [ ] Grid system
- [ ] Icon system
- [ ] Color palette
- [ ] Typography
- [ ] Card
- [ ] Alert
- [ ] Button
- [ ] Form
- [ ] Utility
- [ ] Animations


### Designs

![#1](designs/ui-1.png)