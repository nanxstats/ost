# Source Serif Pro

## Specimen

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

<style type="text/css">
.live { font-family: "Source Serif Pro", sans-serif; }
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
        style="font-weight: 700; font-size: 60px; line-height: 0.72; letter-spacing: -0.02em;" contenteditable="">
        Martian™<br>Language Systems Inc.
    </livesample>
    <div class="mb-5"></div>
    <livesample data-ctxedit="sample-400-1" spellcheck="false"
        style="font-weight: 400; font-size: 22px; line-height: 1;" contenteditable="">
        Interfacing mechanisms are <i>periodically sequencing state</i>
    </livesample>
    <div class="mb-5"></div>
    <livesample data-ctxedit="sample-400-2" spellcheck="false"
        style="font-weight: 400; font-size: 85px; line-height: 1; letter-spacing: -0.05em; background: #FFF310; display: inline-block; padding: 0.2em 0.3em; text-align: center; width: 100%"
        contenteditable="">
        XP–45 SERVICE
    </livesample>
    <div class="mb-5"></div>
    <livesample data-ctxedit="sample-700-2" spellcheck="false"
        style="font-weight: 700; font-size: 120px; line-height: 1;" contenteditable="">
        Manifolds
    </livesample>
    <div class="mb-5"></div>
    <livesample data-ctxedit="sample-700-3" spellcheck="false"
        style="font-weight: 700; font-size: 24px; line-height: 1.1; letter-spacing: -0.03em;" contenteditable="">
        Production filaments are awaiting 340-type transportation<br>in docking bay 6–B
    </livesample>
    <div class="mb-5"></div>
    <hr>
    <div class="mb-5"></div>
    <livesample contenteditable="" data-ctxedit="sample1" spellcheck="false"
        style="font-weight: 700; font-size: 60px; line-height: 1.1">
        Fabulous typography encountering spring
    </livesample>
    <div class="mb-5"></div>
    <livesample contenteditable="" data-ctxedit="sample2" spellcheck="false">
        The user interface (UI), in the industrial design field of<br>
        human-computer interaction, is the space where<br>
        interactions between humans and machines occur.
    </livesample>
    <div class="mb-1"></div>
    <livesample contenteditable="" data-ctxedit="sample3" spellcheck="false">
<p><strong>Florentine painting</strong> between Giotto and Michelangelo
contains the names of such artists as Orcagna, Masaccio, Fra Filippo,
Pollaiuolo, Verrocchio, Leonardo, and Botticelli. Put beside these the
greatest names in Venetian art, the Vivarini, the Bellini, Giorgione,
Titian, and Tintoret. The difference is striking. The significance of
the Venetian names is exhausted with their significance as painters. Not
so with the Florentines. Forget that they were painters, they remain
great sculptors; forget that they were sculptors, and still they remain
architects, poets, and even men of science. They left no form of
expression untried, and to none could they say, “This will perfectly
convey my meaning.” Painting, therefore, offers but a partial and not
always the most adequate manifestation of their personality, and we feel
the artist as greater than his work, and the man as soaring above the
artist.</p>
<p>The immense superiority of the artist even to his greatest
achievement in any one art form, means that his personality was but
slightly determined by the particular art in question, that he tended to
mould it rather than let it shape him. It would be absurd, therefore, to
treat the Florentine painter as a mere link between two points in a
necessary evolution. The history of the art of Florence never can be, as
that of Venice, the study of a placid development. Each man of genius
brought to bear upon his art a great intellect, which, never
condescending merely to please, was tirelessly striving to reincarnate
what it comprehended of life in forms that would fitly convey it to
others; and in this endeavour each man of genius was necessarily
compelled to create forms essentially his own. But because Florentine
painting was pre-eminently an art formed by great personalities, it
grappled with problems of the highest interest, and offered solutions
that can never lose their value. What they aimed at, and what they
attained, is the subject of the following essay.</p>
<p>The first of the great personalities in Florentine painting was
Giotto. Although he affords no exception to the rule that the great
Florentines exploited all the arts in the endeavour to express
themselves, he, Giotto, renowned as architect and sculptor, reputed as
wit and versifier, differed from most of his Tuscan successors in having
peculiar aptitude for the essential in painting <em>as an art</em>.</p>
<p>But before we can appreciate his real value, we must come to an
agreement as to what in the art of figure-painting—the craft has its own
altogether diverse laws—<em>is</em> the essential; for figure-painting,
we may say at once, was not only the one pre-occupation of Giotto, but
the dominant interest of the entire Florentine school.</p>
<p>Psychology has ascertained that sight alone gives us no accurate
sense of the third dimension. In our infancy, long before we are
conscious of the process, the sense of touch, helped on by muscular
sensations of movement, teaches us to appreciate depth, the third
dimension, both in objects and in space.</p>
<p>In the same unconscious years we learn to make of touch, of the third
dimension, the test of reality. The child is still dimly aware of the
intimate connection between touch and the third dimension. He cannot
persuade himself of the unreality of Looking-Glass Land until he has
touched the back of the mirror. Later, we entirely forget the
connection, although it remains true, that every time our eyes recognise
reality, we are, as a matter of fact, giving tactile values to retinal
impressions.</p>
<p>Now, painting is an art which aims at giving an abiding impression of
artistic reality with only two dimensions. The painter must, therefore,
do consciously what we all do unconsciously,—construct his third
dimension. And he can accomplish his task only as we accomplish ours, by
giving tactile values to retinal impressions. His first business,
therefore, is to rouse the tactile sense, for I must have the illusion
of being able to touch a figure, I must have the illusion of varying
muscular sensations inside my palm and fingers corresponding to the
various projections of this figure, before I shall take it for granted
as real, and let it affect me lastingly.</p>
<p>It follows that the essential in the art of painting—as distinguished
from the art of colouring, I beg the reader to observe—is somehow to
stimulate our consciousness of tactile values, so that the picture shall
have at least as much power as the object represented, to appeal to our
tactile imagination.</p>
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
