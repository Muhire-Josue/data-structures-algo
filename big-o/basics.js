const data = ['Memo']

function findMemo(array) {
  const t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Memo') {
      console.log('Memo found!')
    }
  }
  const t1 = performance.now()
  console.log('Call to find memo took ' + (t1 - t0) + ' milliseconds')
}

findMemo(data)