jquery-foldout
==============

Make any image look like a folded brochure with javascript and css3 transformation.

Adding jquery foldout to you site
==============

Add the css and javascript to your page
```html    
<script src="jquery.js">
<script src="jquery-foldout.js"/>
<link rel="stylesheet" href="foldout.css">
```
Add an image, this must be in a wrapper (eg. div or figure element)
```html
<figure class="foldout" data-folds="2" data-folded="true" style="width: 200px; height: 100px;">
    <img src="image.jpg">
</figure>
```
Enable the foldout
```html
<script type="text/javascript">
    $(function(){
        $('.foldout').foldout();
    });
</script>
```

Building jquery-foldout
==============

Run mvn compile in the root.
