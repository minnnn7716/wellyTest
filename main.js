// 【題目一】JavaScript: 字串反轉
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”



// 【題目二】JavaScript: 陣列過濾
// 寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。 
function filterNumbersGreaterThanFive(numbers) {
  return numbers.filter(item => item > 5);
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]



// 【題目三】JavaScript: 重構
// 重構這段程式碼並說明原因
// 以下為已重構程式碼
// 原始程式碼主要想判斷使用者輸入的姓名取真值組合字串。我重構為以下寫法的原因是，直接將參數展開並篩選真值，簡化撰寫行數並增加參數彈性，例如往後想增加中間名參數變不須修改。篩選陣列後再組合的方式也可避免原先寫法僅有 lastName 沒有 firstName 時，會產生多餘的空白字元。
function formatName(firstName, lastName) {
  let formatAry = [...arguments];
  formatAry = formatAry.filter(item => item);

  return formatAry.join(' ');
}


// 【題目四】React: 條件渲染
const { useState } = React;

function ConditionalRendering({ isLoggedIn }) {
  const [logStatus, setLogStatus] = useState(isLoggedIn);
  
  return (
    <div>
      <h3>【題目四】React: 條件渲染</h3>
      <div className="d-flex align-items-center">
        <p className="me-2">{ logStatus ? '已登入' : '未登入' }</p>
        <button type="button" onClick={ () => setLogStatus(!logStatus) }>
          { logStatus ? '登出' : '登入' }
        </button>
      </div>
    </div>
  )
}


// 【題目五】React: 組件
function Counter() {
  const [num, setNum] = useState(0);
  
  return (
    <div>
      <h3>【題目五】React: 組件</h3>
      <div className="d-flex align-items-center">
        <button type="button" onClick={ () => setNum(num - 1) }>－</button>
        <p className="mx-2">{num}</p>
        <button type="button" onClick={ () => setNum(num + 1) }>＋</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <ConditionalRendering isLoggedIn={ false } />
      <Counter />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
