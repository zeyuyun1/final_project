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
  // console.log(long_code)
  // console.log(word)
  // console.log(long_code)
  
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

$(document).ready(function(){
    $("#myTextarea").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();
      	console.log(currentText)
      	const text_split = currentText.split(" ")
        const block = []
        console.log(text_split)
        text_split.forEach(element => block.push("<span style='color:rgb"+get_rbg_code(element)+";'>█</span>"));
        console.log(block)
        
        // Setting the Div content
        //$(".output").text(block.join(''));
        document.getElementById("content").innerHTML = block.join('');
    });
});