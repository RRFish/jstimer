// ./src/index.test.js
// 匯入剛剛寫的套件
const timer = require('./index');


describe('test function-benchmarker', () => {
  // 檢驗函式回傳的 returnVal 是數值格式
  it('run', () => {
    return timer(function(){
      return 1
    }, 1000).then(data => {
      expect(data).toEqual(expect.any(Number))
    })
  });

  // 檢驗當參數不是函數時會拋出錯誤
  it('throw error when not provide a function', () => {
    const mockFn = 'THIS_IS_NOT_A_FUNCTION';
    expect(() => timer(mockFn)).toThrow();
  });
});