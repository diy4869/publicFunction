class Test {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target:any, name:string, descriptor:any) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

const a = new Test()

// passed parameters should get logged now
a.add(2, 4);