[![Circle CI](https://circleci.com/gh/coinpit/mangler.svg?style=shield)](https://circleci.com/gh/coinpit/mangler)
# mangler
data manipulation utility

## install
```bash
npm install mangler --save
```

## usage

### importing module 

```javascript
var mangler = require("mangler")
```
### mangler.mapify (arrayOfObject, key)
converts an array of objects into a map with key present in those objects  

#### example
```javascript
var input = [
    {id: 1, val:20},
    {id: 1, val:30},
    {id: 2, val:40}
]

mangler.mapify(input, "id") 
```
#### output
```
{
    1: {id: 1, val:30}, 
    2: {id: 2, val:40}
}
```

### mangler.arrayMapify (arrayOfObject, key)
clusters objects with the same keys into arrays 

#### example
```javascript
var input = [
    {id: 1, val:20},
    {id: 1, val:30},
    {id: 2, val:40}
]

mangler.arrayMapify(input, "id") 
```
#### output
```
{
    1: [
        {id: 1, val:20}, 
        {id: 1, val:30}
       ],
    2: [{id: 2, val:40}]
}
```

### mangler.fixed(number)
removes floating point rounding error
#### example
```javascript
console.log(0.2 + 0.1)                      // 0.30000000000000004
console.log(mangler.fixed(0.2 + 0.1))       // 0.3
```

### mangler.delProps(arrayOfObjects, arrayOfPropertiesToBeRemoved)
removes properties from an array of objects

#### example
```javascript
var input = [
            {
              "object": "value",
              "killme": true,
              "zapme": "yes"
            },
            {
              "object": "value",
              "killme": true
            }
          ]
var result = mangler.delProps(input, ["killme", "zapme"])
```
#### output
```
[
    {"object": "value"},
    {"object": "value"}
]
```

### mangler.sanitizeString(string)
returns sanitized string

#### example 
```javascript
var result = mangler.sanitizeString("<script>alert(' c&tch n\"')</script>");
```
#### output
```javascript
"&lt;script&gt;alert(&#x27; c&amp;tch n&quot;&#x27;)&lt;&#x2F;script&gt;"
```

### mangler.unsanitizeString(string)
returns unsanitized string

#### example 
```javascript
var result = mangler.unsanitizeString("&lt;script&gt;alert(&#x27; c&amp;tch n&quot;&#x27;)&lt;&#x2F;script&gt;");
```
#### output
```javascript
"<script>alert(' c&tch n\"')</script>"
```
