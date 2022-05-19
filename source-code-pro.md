# (PART\*) Monospace {-}

# Source Code Pro

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

<!-- font -->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

<style type="text/css">
.rmdnote code { font-family: "Source Code Pro", monospace; }
</style>
