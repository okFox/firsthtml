const dog = {
    name: 'spot',
    color: 'pink',
    weight: 500
}
console.log(dog.color);

dog.color = 'blue';

if (dog.color === 'blue') {
    console.log("not true!");
    
} else {
    console.log('wink for pink');
    
}

//loops: count upto ten
const veggies = ['carrot', 'potato', 'broccoli'];
for (let i = 0; i <= 5; i++)
if(i === 2)
{console.log(veggies[i]);
}

function showAlert(){
    alert('you clicked the button');
}
function logHello(){
    console.log('hello!');
}

console.log(document);