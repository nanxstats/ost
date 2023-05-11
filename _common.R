options(width = 60)

knitr::opts_chunk$set(
  comment = "#>",
  collapse = TRUE,
  echo = FALSE
)

btn_link <- function(href, label) {
  htmltools::tags$a(
    href = href,
    class = "btn btn-outline-secondary",
    role = "button",
    target = "_blank",
    htmltools::tags$i(class = "bi bi-box-arrow-up-right"),
    label
  )
}
