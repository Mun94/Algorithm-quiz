function getApple(){
  return new Promise( (resolve, reject) => {
    setTimeout(() => resolve("apple"), 1000);
  })
}

function getBanana(){
  return new Promise( (resolve, reject) => {
    setTimeout(() => resolve("banana"), 2000);
  })
}

async function getFruites(){

  console.time()
  let getApplePromise = getApple(); // async함수를 미리 논블록킹으로 실행한다. 
  let getBananaPromise = getBanana(); // async함수를 미리 논블록킹으로 실행한다. 

  // 이렇게 하면 각각 백단에서 독립적으로 거의 동시에 실행되게 된다.
  console.log(getApplePromise)
  console.log(getBananaPromise)

  let a = await getApplePromise; // 위에서 받은 프로미스객체 결과 변수를 await을 통해 꺼낸다.
  let b = await getBananaPromise; // 위에서 받은 프로미스객체 결과 변수를 await을 통해 꺼낸다.

  console.log(`${a} and ${b}`); // 본래라면 1초+1초 를 기다려야 하는데, 위에서 1초기다리는 함수를 바로 연속으로 비동기로 불려왔기 때문에, 대충 1.01초만 기다리면 처리된다.
  console.timeEnd()
}

getFruites();