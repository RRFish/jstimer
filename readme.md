jstimer


```
const jstimer = require('@yotsai/jstimer')


jstimer(function(){
  console.log("print this line after 1 seconed")
}, 1000)

const result = jstimer(function(){
  return "or use in async"
}, 1000)
console.log(result)
```