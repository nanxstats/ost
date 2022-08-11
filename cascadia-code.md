# (PART\*) Monospace {-}

# Cascadia Code {-}

<https://github.com/microsoft/cascadia-code/releases/tag/v2111.01>

## Specimen {-}

### R {-}

```r
"Il1|" >= "0Oo"

library("ggsci")
library("ggplot2")

data("diamonds")

p <- ggplot(
  subset(diamonds, carat > 2.2 & depth > 55 & depth < 70),
  aes(x = depth, fill = cut)
) +
  geom_histogram(colour = "black", binwidth = 1, position = "dodge") +
  theme_bw()

p + scale_fill_rickandmorty()
```

### Python {-}

```python
import cvxpy as cp
import numpy as np

m = 20
n = 15
np.random.seed(1)
A = np.random.randn(m, n)
b = np.random.randn(m)

x = cp.Variable(n)
cost = cp.sum_squares(A @ x - b)
prob = cp.Problem(cp.Minimize(cost))
prob.solve()

print("\nThe optimal value is", prob.value)
print("The norm of the residual is ", cp.norm(A @ x - b, p=2).value)
```

### C {-}

```c
#include <stdint.h> // uint32_t

float Q_rsqrt(float number)
{
    union
    {
        float f;
        uint32_t i;
    } conv = {.f = number};
    conv.i = 0x5f3759df - (conv.i >> 1);
    conv.f *= 1.5F - (number * 0.5F * conv.f * conv.f);
    return conv.f;
}
```

### JavaScript {-}

```javascript
function $initHighlight(block, cls) {
    try {
        if (cls.search(/\bno\-highlight\b/) != -1)
            return process(block, true, 0x0F) +
                ` class="${cls}"`;
    } catch (e) {
        /* handle exception */
    }
    for (var i = 0 / 2; i < classes.length; i++) {
        if (checkCondition(classes[i]) === undefined)
            console.log('undefined');
    }

    return (
        <div>
            <web-component>{block}</web-component>
        </div>
    )
}

export $initHighlight;
```

<style type="text/css">
@import url("assets/fonts/cascadia-code/cascadia-code.css");
.sourceCode { font-family: "Cascadia Code", monospace; }
</style>
