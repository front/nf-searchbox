#nf-searchbox

A jQuery expandable and customizable search box.

**Example html:**

```
<form id="form1" class="nf-sbform" action="/" method="get">
	<input type="text" name="q" placeholder="Enter search here...">
	<input type="submit" value="">
</form>
```

### nfSearchBox

```
$('#form1').nfSearchBox();
```

### Styling

This plugin uses the `nf-form` class for styling the form (even if the javascript is disabled) and includes 3 css files.

 * `base.css` - the generic rules css
 * `layout.css` - the layout for the form: position and dimensions.
 * `theme.css` - theming attributes: colors and fonts.  

## Demo

[http://front.github.io/nf-searchbox/](http://front.github.io/nf-searchbox/)

***Please note:*** The last button on the demo page is just there for testing purposes.

## License

[MIT](https://github.com/front/nf-searchbox/blob/master/LICENSE)