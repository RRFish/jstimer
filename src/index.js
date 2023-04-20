function timer(cb, time){
  if(typeof(cb) != "function") throw Error('please send cb')
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(cb())
    }, time);
  })
}

// 匯出函式
module.exports = timer;
//