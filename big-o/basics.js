const data = ["Memo", "Memo", "Memo"];

//O(n)
function findMemo(array) {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Memo") {
      console.log("Memo found!");
    }
  }
  const t1 = performance.now();
  console.log("Call to find memo took " + (t1 - t0) + " milliseconds");
}

// O(1)
function findFirstElement(array) {
  console.log(array[0]);
}

findMemo(data);
