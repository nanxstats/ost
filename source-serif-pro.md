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
        style="font-weight: 700; font-size: 140px; line-height: 1; letter-spacing: -0.05em;" contenteditable="">
        Melvetica
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
        <p>
            <b>Fire Island Beach</b> is a barrier of sand, stretching for twenty miles
            along the south coast of Long Island, and separating the Great South Bay
            from the Atlantic ocean.
        </p>
        <p>
            To reach it, you must make a sail of from three to seven miles, and once
            upon it, you find it a wild, desolate, solitary spot, wind-searched and
            surf-pounded.
        </p>
        <p>
            Its inner shore is covered with a growth of tide-wet sedge, with here
            and there a spot where dry meadow comes down to make a landing-place.
        </p>
        <p>
            The outline of this inner shore is most irregular, curving and bending
            in and out and back upon itself, making coves and points and creeks and
            channels, and often pushing out in flats with not water enough on them
            at low tide to wet your ankles.
        </p>
        <p>
            A third of the distance across the Beach, the meadow ends and sand
            begins. This slopes gradually up for another third of the distance, to
            the foot of the sand hills, which seem tumbled into their places by some
            mighty power, sometimes three tiers of them deep, sometimes two, and
            sometimes only one.
        </p>
        <p>
            These sand hills are the most striking features of the Beach. The
            biggest of them are not more than sixty feet high, yet so hard a feat is
            it to climb to the top, and so extended is the view below you—on one
            side the wide Bay, on the other, the ocean stretching its restless
            surface to the horizon—that you feel yourself upon an elevation tenfold
            as high.
        </p>
        <p>
            Through these hills the wind makes a great galloping, whirling out deep
            bowl-shape hollows among them, and piling the shifting sand upon their
            summits. Now and then you will notice a hill with its shoulder knocked
            off by the wind, and a ton of sand gone no one can tell where. In every
            storm their contour changes, and yet their general formation is so
            similar at all times that the change is seldom thought of. A coarse
            spear-like grass finds a sparse growth upon them, and does what it can
            to hold the sand in place; but it has a hard time of it, as its blades
            buried to their tips or its naked roots often testify.
        </p>
        <p>
            But there is one part of this Beach that is ever much the same. It is a
            broad, shelving strip of sand between the hills and the sea, where the
            tide rises and falls, pounding and grinding, year in and year out—the
            play-ground and the battle-ground of the surf.
        </p>
        <p>
            On a summer's day, I have seen this surf so low and quiet that one could
            launch a sharpie upon it, single-handed, and come ashore again without
            shipping a quart of water. At other times it is a terror to look at—a
            steady break of waves upon the outer bar, with row after row coming in,
            rearing and plunging as they strike the shore. In such a sea there is no
            launching yawl or surf-boat, and no coming ashore.
        </p>
        <p>
            When the tide is on the right moon and the wind has blown a gale from
            the southeast, the strand is entirely submerged, and people upon the
            main shore three miles away can see the surf breaking over the Beach
            hills.
        </p>
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
