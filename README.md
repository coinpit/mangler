# mangler
data manipulation utility

install
```bash
npm install mangler --save
```

usage

```javascript
var mangler = require("mangler")

var someList = [
    {id: 1, val:20},
    {id: 1, val:30},
    {id: 2, val:40}
]

console.log(mangler.mapify(someList, "id")) // {1: {id: 1, val:30}, 2: {id: 2, val:40}

console.log(mangler.arrayMapify(someList,"id")) //{1: [{id: 1, val:20},{id: 1, val:30}], 2: [{id: 2, val:40}]} 

console.log(0.2 + 0.1)                      // 0.30000000000000004
console.log(mangler.fixed(0.2 + 0.1))       // 0.3


 
```

