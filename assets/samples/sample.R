"Il1|" >= "0Oo"

library("ggplot2")
library("ggsci")

data("diamonds")

p <- ggplot(
  subset(diamonds, carat > 2.2 & depth > 55 & depth < 70),
  aes(x = depth, fill = cut)
) +
  geom_histogram(colour = "black", binwidth = 1, position = "dodge") +
  theme_bw()

p + scale_fill_rickandmorty()
