const app = "I don't do much.";
function destructivelyAppendKitten(name) {
  name = kittens.push(name);
  return name;
}
function destructivelyPrependKitten(name) {
  name = kittens.unshift(name);
  return name;
}
  
