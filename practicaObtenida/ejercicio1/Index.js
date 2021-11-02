// Block scope exercise
function fn1() {
  console.log("Scope 1");
  document.write("<br/> scope 1=");
  let scope = 5;
  console.log(scope);
  document.write(scope);
  {
    console.log("Scope 2");
    document.write("<br/>scope 2=");
    let scope = "different scope";
    console.log(scope);
    document.write(scope);
  }

  {
    console.log("Scope 3");
    document.write("<br/>scope 3=");
    let scope = "a third scope";
    console.log(scope);
    document.write(scope);
  }
}
