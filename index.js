function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const array = ["bat", "cat", "ball"]

  array.forEach(callback)

  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
