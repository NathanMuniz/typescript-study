

function doSomething(callback, callbackfail) {
  if (callback) {
    return callback("First")
  }
  callbackfail()

}

function doSomethingElse(res, callback, callbackfail) {

  if (res) {
    res = res + " Second "
    return callback(res)
  }

  callbackfail()

}

function doThirdThing(res, callback, callbackfail) {
  if (res) {
    res = res + " Third "
    return callback(res)
  }
  callbackfail()
}

function falireCallback() {
  return "fail, not work"
}



doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResulst) {
      console.log(`Got ht final resulst: ${finalResulst}`)
    }, falireCallback)
  }, falireCallback)
}, falireCallback) 
