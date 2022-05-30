# ET Book

<https://github.com/edwardtufte/et-book>

## Specimen

<style type="text/css">
@import url("assets/fonts/et-book/et-book.css");
.live { font-family: "ET Book", serif; }
</style>


```{=html}
<style type="text/css">:root {
  --strip-height: 55px;
}

#ctxedit-ui {
  z-index: 999;

  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 0;
  height: var(--strip-height);

  background: #002FA7;
  color: #ccc;
  font-size: 12px;
  /*border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;*/

  padding: 0 50px;
  display: flex;
  justify-content: center;

  opacity: 0;
  transition: 90ms all cubic-bezier(0.25, 0.47, 0.44, 0.93);
  transform: translate(0, var(--strip-height));

  outline: none;
  pointer-events: none;
}

#ctxedit-ui.visible {
  opacity: 1;
  transform: translate(0, 0);
  pointer-events: initial;
}

#ctxedit-ui .wrapper {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 888px;
  /* same as base.css .row > * */
  flex: 1 0 100%;
}

#ctxedit-ui .control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  min-height: 30px;
  margin: 0 16px;
}

#ctxedit-ui .control:first-child {
  margin-left: 0;
}

#ctxedit-ui .control.range {
  flex: 1 1 auto;
  max-width: 200px;
}

#ctxedit-ui .control>* {
  flex: 1 1 auto;
  margin: 0;
  box-sizing: border-box;
}

#ctxedit-ui .control> :last-child {
  margin-right: 0;
}

#ctxedit-ui .control>select {
  min-width: 8em;
  flex: 0 1 auto;
  align-items: center;
  justify-content: center;
}

#ctxedit-ui .control>input,
#ctxedit-ui .control>select {
  width: 0;
  outline: none;
  color: inherit;
}

#ctxedit-ui .control.popup {
  margin-right: 0px;
}

#ctxedit-ui .control>select {
  font: inherit;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background-color: #002FA7;
  margin: 0;
  padding: 0;
  height: var(--strip-height);
  background-image: url(popup.svg);
  background-repeat: no-repeat;
  background-position: left center;
  width: 120px;
  color: white;
  opacity: 0.6;
  padding-left: 20px;
  line-height: var(--strip-height);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

#ctxedit-ui .control>select::-ms-expand {
  display: none;
}

#ctxedit-ui .control>select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #fff;
  background-color: #002FA7;
  font: inherit;
  font-size: inherit;
}

#ctxedit-ui .control>select:hover {
  opacity: 1;
}

#ctxedit-ui .control>input[type="number"],
#ctxedit-ui .control>input[type="text"] {
  background: none;
  border: none;
  padding: 4px 0;
  font-size: inherit;
  /*border-radius: 2px;*/
}

#ctxedit-ui .control>input[type="number"] {
  max-width: 48px;
  text-align: left;
  -moz-appearance: textfield;
  -moz-font-feature-settings: 'tnum' 1;
  -ms-font-feature-settings: 'tnum' 1;
  -o-font-feature-settings: 'tnum' 1;
  -webkit-font-feature-settings: 'tnum' 1;
  font-feature-settings: 'tnum' 1;
}

#ctxedit-ui .control>input[type=number]::-webkit-inner-spin-button,
#ctxedit-ui .control>input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#ctxedit-ui .control>input[type="range"] {
  /*max-width: 80%;*/
  flex: 1 1 auto;
  display: block;
}

#ctxedit-ui .control>input[type="color"] {
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
}

#ctxedit-ui .control>img.icon,
#ctxedit-ui .control>label {
  user-select: none;
  font-family: georgia, serif;
  font-style: italic;
  color: white;
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  margin-right: 16px;
  opacity: 0.6;
}

#ctxedit-ui .button {
  width: var(--strip-height);
  height: var(--strip-height);
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  margin: 0;
}

#ctxedit-ui .button:hover {
  opacity: 1;
  background-color: #292929;
}

#ctxedit-ui .button:active {
  background-color: #444;
}

#ctxedit-ui .button.features-button {
  background-image: url("assets/ctxedit/res/settings.svg");
}

#ctxedit-ui .button.reset-button {
  background-image: url("assets/ctxedit/res/reset.svg");
}

#ctxedit-ui .button.dismiss-button {
  background-image: url("assets/ctxedit/res/dismiss.svg");
}



/* narrow viewports */
@media only screen and (max-width: 639px) {
  #ctxedit-ui {
    background: black;
    height: calc(var(--strip-height) * 4);
  }

  #ctxedit-ui .wrapper {
    flex-direction: column;
    flex-wrap: wrap;
  }
}


.font-preload {
  position: fixed;
  display: block;
  opacity: 0;
  pointer-events: none;
}


.slider-value-tip {
  pointer-events: none;
  opacity: 0;
  position: fixed;
  text-align: center;
  width: 100px;
  /*background: hotpink;*/
  left: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9;
  transition: opacity 120ms ease-out;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.2));
  --fgcolor: #fff;
  --bgcolor: #444;
}

.slider-value-tip .value {
  padding: 4px 10px;
  border-radius: 2px;
  font-size: 11px;
  /* letter-spacing: 0.013em; */
  color: var(--fgcolor);
  background: var(--bgcolor);
  -moz-font-feature-settings: 'tnum' 1;
  -ms-font-feature-settings: 'tnum' 1;
  -o-font-feature-settings: 'tnum' 1;
  -webkit-font-feature-settings: 'tnum' 1;
  font-feature-settings: 'tnum' 1;
  z-index: 1;
}

.slider-value-tip .callout {
  background: var(--bgcolor);
  width: 10px;
  height: 10px;
  transform: translate(0, -6px) rotate(45deg);
  z-index: 0;
}

.slider-value-tip.visible {
  opacity: 1;
}

.styled-inputs-neg {
  --track-thickness: 2px;
  --track-color: rgba(255, 255, 255, 0.3);

  --thumb-outline-thickness: 2px;
  --thumb-outline-color: #002FA7;
  /* match control strip */
  --thumb-diameter: 10px;
  --thumb-color: white;

  --active-color: rgb(95, 170, 255);
}

.styled-inputs-neg input[type=range] {
  -webkit-appearance: none;
  margin: 0;
  width: 100%;
  height: var(--strip-height);
  background: transparent;
}

.styled-inputs-neg input[type=range]:focus {
  outline: none;
}

.styled-inputs-neg input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  margin: 0;
  animate: 0.2s;
  background: var(--track-color);
  height: var(--track-thickness);
}

.styled-inputs-neg input[type=range]:focus::-webkit-slider-runnable-track {
  background: var(--active-color);
}

.styled-inputs-neg input[type=range]::-moz-range-track {
  width: 100%;
  margin: 0;
  animate: 0.2s;
  background: var(--track-color);
  height: var(--track-thickness);
}

.styled-inputs-neg input[type=range]:focus::-moz-range-track {
  background: var(--active-color);
}

.styled-inputs-neg input[type=range]::-webkit-slider-thumb {
  --thumb-diameter2: calc(var(--thumb-diameter) + var(--thumb-outline-thickness) * 2);
  width: var(--thumb-diameter2);
  height: var(--thumb-diameter2);
  border: var(--thumb-outline-thickness) solid var(--thumb-outline-color);
  border-radius: 100%;
  background: var(--thumb-color);
  -webkit-appearance: none;
  margin-top: calc(((var(--thumb-diameter2) / 2) - (var(--track-thickness) / 2)) * -1);
}

.styled-inputs-neg input[type=range]::-moz-range-thumb {
  width: var(--thumb-diameter);
  height: var(--thumb-diameter);
  border: var(--thumb-outline-thickness) solid var(--thumb-outline-color);
  border-radius: 100%;
  background: var(--thumb-color);
  margin-top: calc(((var(--thumb-diameter) / 2) - (var(--track-thickness) / 2)) * -1);
}

/* MS Edge -- note that we can't use CSS variables here */
.styled-inputs-neg input[type=range]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 0 0;
  color: transparent;
  /* markings */
  height: 2px;
  animate: 0.2s;
  margin: 0;
}

.styled-inputs-neg input[type=range]::-ms-fill-lower,
.styled-inputs-neg input[type=range]::-ms-fill-upper {
  background: white;
  opacity: 0.3;
}

.styled-inputs-neg input[type=range]::-ms-thumb {
  width: 9px;
  height: 9px;
  /*border: 2px solid rgba(0,0,0,0.8);*/
  box-shadow: 0px 0px 0px 2px #002FA7;
  border-radius: 100%;
  background: white;
}

/* Note: :focus selectors are buggy in Edge, so we skip that */

/* Remove focus-visible outline */

.live :focus-visible {
  outline: none;
}</style>
```

```{=html}
<!-- Convert to html: `pandoc sample.md -o sample.html` -->
<!-- Text sample source: https://www.gutenberg.org/ebooks/17408 -->
<div class="live">
    <livesample data-ctxedit="sample-700-1" spellcheck="false"
        style="font-weight: 700; font-size: 60px; line-height: 0.9; letter-spacing: -0.03em;" contenteditable="">
        Sensible Defaults™<br>Reproducible Research
    </livesample>
    <div class="mb-5"></div>
    <livesample data-ctxedit="sample-400-1" spellcheck="false"
        style="font-weight: 400; font-size: 22px; line-height: 1;" contenteditable="">
        Deep neural networks as <i>recursive generalized linear models</i>
    </livesample>
    <div class="mb-5"></div>
    <livesample data-ctxedit="sample-400-2" spellcheck="false"
        style="font-weight: 400; font-size: 85px; line-height: 1; letter-spacing: -0.05em; background: #FFF310; display: inline-block; padding: 0.2em 0.3em; text-align: center; width: 100%"
        contenteditable="">
        PROJECT I18N
    </livesample>
    <div class="mb-5"></div>
    <livesample data-ctxedit="sample-700-2" spellcheck="false"
        style="font-weight: 700; font-size: 112px; line-height: 1;" contenteditable="">
        Aspirations
    </livesample>
    <div class="mb-5"></div>
    <livesample data-ctxedit="sample-700-3" spellcheck="false"
        style="font-weight: 700; font-size: 24px; line-height: 1.1; letter-spacing: -0.03em;" contenteditable="">
        Functions written in continuation-passing style take an<br>
        extra argument: an explicit “continuation”:<br>
        a function of one argument.
    </livesample>
    <div class="mb-5"></div>
    <hr>
    <div class="mb-5"></div>
    <livesample contenteditable="" data-ctxedit="sample1" spellcheck="false"
        style="font-weight: 700; font-size: 60px; line-height: 1.1">
        Finding your flow:<br>
        mastery, mindfulness,<br>
        and mattering
    </livesample>
    <div class="mb-5"></div>
    <livesample contenteditable="" data-ctxedit="sample2" spellcheck="false">
        From a Bayesian point of view, this corresponds to the expected<br>
        value of the posterior distribution, using a symmetric Dirichlet<br>
        distribution with parameter α as a prior distribution.
    </livesample>
    <div class="mb-1"></div>
    <livesample contenteditable="" data-ctxedit="sample3" spellcheck="false"
        style="font-size: 20px; line-height: 1.5;">
<p><strong>Emma Woodhouse</strong>, handsome, clever, and rich, with a
comfortable home and happy disposition, seemed to unite some of the best
blessings of existence; and had lived nearly twenty-one years in the
world with very little to distress or vex her.</p>
<p>She was the youngest of the two daughters of a most affectionate,
indulgent father; and had, in consequence of her sister’s marriage, been
mistress of his house from a very early period. Her mother had died too
long ago for her to have more than an indistinct remembrance of her
caresses; and her place had been supplied by an excellent woman as
governess, who had fallen little short of a mother in affection.</p>
<p>Sixteen years had Miss Taylor been in Mr. Woodhouse’s family, less as
a governess than a friend, very fond of both daughters, but particularly
of Emma. Between <em>them</em> it was more the intimacy of sisters. Even
before Miss Taylor had ceased to hold the nominal office of governess,
the mildness of her temper had hardly allowed her to impose any
restraint; and the shadow of authority being now long passed away, they
had been living together as friend and friend very mutually attached,
and Emma doing just what she liked; highly esteeming Miss Taylor’s
judgment, but directed chiefly by her own.</p>
<p>The real evils, indeed, of Emma’s situation were the power of having
rather too much her own way, and a disposition to think a little too
well of herself; these were the disadvantages which threatened alloy to
her many enjoyments. The danger, however, was at present so unperceived,
that they did not by any means rank as misfortunes with her.</p>
<p>Sorrow came—a gentle sorrow—but not at all in the shape of any
disagreeable consciousness.—Miss Taylor married. It was Miss Taylor’s
loss which first brought grief. It was on the wedding-day of this
beloved friend that Emma first sat in mournful thought of any
continuance. The wedding over, and the bride-people gone, her father and
herself were left to dine together, with no prospect of a third to cheer
a long evening. Her father composed himself to sleep after dinner, as
usual, and she had then only to sit and think of what she had lost.</p>
</livesample>
</div>
```

```{=html}
<div id="ctxedit-ui" class="styled-inputs-neg" contenteditable="false" tabindex="1">
    <div class="wrapper">
<!--         <div class="control popup">
            <select data-binding="style">
                <option value="thin">Thin</option>
                <option value="extra-light">Extra Light</option>
                <option value="light">Light</option>
                <option value="regular" default="" selected="">Regular</option>
                <option value="medium">Medium</option>
                <option value="semi-bold">Semi Bold</option>
                <option value="bold">Bold</option>
                <option value="extra-bold">Extra Bold</option>
                <option value="black">Black</option>
                <option disabled="">————————————</option>
                <option value="thin-italic">Thin Italic</option>
                <option value="extra-light-italic">Extra Light Italic</option>
                <option value="light-italic">Light Italic</option>
                <option value="italic">Italic</option>
                <option value="medium-italic">Medium Italic</option>
                <option value="semi-bold-italic">Semi Bold Italic</option>
                <option value="bold-italic">Bold Italic</option>
                <option value="extra-bold-italic">Extra Bold Italic</option>
                <option value="black-italic">Black Italic</option>
            </select>
        </div> -->
        <div class="control range">
            <img title="Size" class="icon" src="assets/ctxedit/icons/font-size.svg">
            <input type="range" min="8" max="150" step="1" data-binding="size">
        </div>
        <div class="control range">
            <img title="Tracking/letter-spacing in EM" class="icon" src="assets/ctxedit/icons/letter-spacing.svg">
            <input type="range" min="-0.1" max="0.1" step="0.001" data-binding="tracking">
        </div>
        <div class="control range">
            <img title="Line height" class="icon" src="assets/ctxedit/icons/line-height.svg">
            <input type="range" value="1.2" min="0.7" max="2" step="0.01" data-binding="lineHeight">
        </div>
        <!-- <div class="control color">
<input type="color" value="#111" data-binding="color">
</div> -->
        <!-- <div class="control button features-button" title="Features..."></div> -->
        <div class="control button reset-button" title="Reset"></div>
        <div class="control button dismiss-button" title="Close editor"></div>
    </div>
</div>
```

```{=html}
<script src="assets/ctxedit/base.js"></script>
<script src="assets/ctxedit/bindings.js"></script>
<script src="assets/ctxedit/ctxedit.js"></script>
<script type="text/javascript">(function(){ window.ctxedit = new CtxEdit() })();</script>
```
