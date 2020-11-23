// let colorMap = new Map()
// colorMap['wo']
// let jsonfile = require('data.json');
// console.log(jsonfile, 'the json obj');

// console.log(123);
// aka = ['apple']


// async function get_data() {
//   const response = await fetch('data_small.json');
//   const data = await response.json();
//   // return data[word];
//   return data;
// }

// async function get_data_2() {
//   const data = await get_data()
//   console.log(data)
//   return data;
// }

// console.log(get_data_2())
// console.log(data['apple'])

// function get_code(word) {
//   return get_data().then(function(data) {
//     // console.log(car)
//     return data[word];

//   });
// }

// console.log(get_code('murakami'))
// console.log(car)

// const colormap = get_color_code('murakami');
// console.log(aka)
// console.log(code.then())
// let colormap;
// fetch('data_small.json').then(response => {
//   colormap = response.json()
//   console.log(colormap)
// });

// const colormap = get_color_code('murakami');
// console.log(colormap)
// console.log(colormap)
// console.log(colormap['mama'])
// console.log(colormap['mama'])
// console.log(colormap['mama'])

function get_rbg_code(word) {
  long_code = data[word]
  
  r = (long_code%64)*3
  // console.log(r)
  long_code = Math.floor(long_code/64)
  g = (long_code%64)*3
  // console.log(g)
  long_code = Math.floor(long_code/64)
  b = (long_code%64)*3
  // console.log(b)
  return `(${r}, ${g}, ${b})`
}
let container = {'content' : ''}
function handleInput(e) {
  currentText = e.target.value.toLowerCase()
  // log.textContent = e.target.value
  // console.log(currentText)
  const text_split = currentText.split(" ")
  const block = []
  // console.log(text_split)

  text_split.forEach((element) => {
    if (element.match("^.*[\n]")){
      extracted = element.match("([a-z]*)[\n]")[1]
      block.push("<span style='color:rgb"+get_rbg_code(extracted)+";'>█</span>")
      block.push("<br>")
    } else{
      block.push("<span style='color:rgb"+get_rbg_code(element)+";'>█</span>")
    }

  })
  // console.log(block)
  // console.log(block.join(''))
  container['content'] = block.join('')
  document.getElementById("content").innerHTML = container['content']
}
// console.log(container['content'])

function submit() {
  db.collection('posts').add({
      post: container['content'],
  });
  console.log(container['content'])
}
// console.log(container)

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   db.collection('cafes').add({
//       post: form.name.value,
//   });
//   form.name.value = '';
//   form.city.value = '';
// });

// const txtarea = document.getElementById("myTextarea")
// console.log(document.getElementById("myTextarea").value)

