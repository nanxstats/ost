# Cascadia Code

<https://github.com/microsoft/cascadia-code/releases/tag/v2111.01>

Specimen

::: {.rmdnote}
```r
# Version number comparison utilities
is_leq <- function(x, y) {
  z <- compareVersion(x, y)
  z == 0 | z == -1
}

is_geq <- function(x, y) {
  z <- compareVersion(x, y)
  z == 0 | z == 1
}
```
:::

<style type="text/css">
@import url("assets/fonts/cascadia-code/cascadia-code.css");
.rmdnote code { font-family: "Cascadia Code", monospace; }
</style>