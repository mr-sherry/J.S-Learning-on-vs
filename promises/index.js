let promise1 = new Promise(function (resolve, reject) {
  let hello = true;
  if (!hello) {
    // console.log("hello");
    let obj = { name: "Ahmed", sirName: "Raza" };
    resolve(obj);
  } else {
    reject();
  }
})
  .then((a) => {
    console.log(a);
  })
  .catch(() => {
    console.log("hello 222");
  })
  .finally(() => {
    console.log("Promis completed successfully");
  });
