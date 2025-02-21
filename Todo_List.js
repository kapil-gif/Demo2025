// // html tag read 
// let input_task=document.getElementById("task_input");
// let btn=document.getElementById("add_btn");
// let list_value=document.getElementById("tasl_list");

// // console.log(input_task);
// // console.log(btn);
// // console.log(list_value);

// // read input data from input_task and add to task list

// btn.addEventListener("click", function(){
// console.log("button clicked");

// var data =input_task.value;
// console.log(data);

// const list =document.createElement("li");
// console.log(list);

// list.innerText=data;
// list_value.appendChild(list);

// // input_task.value= "";
// input_task.value = ""; // Fixed clearing input (removed extra space)


// })


// html tag read 
let input_task = document.getElementById("task_input");
let btn = document.getElementById("add_btn");
let list_value = document.getElementById("task_list"); // Fixed ID typo

// read input data from input_task and add to task list
btn.addEventListener("click", function(){
    console.log("button clicked");

    var data = input_task.value;
    console.log(data);

    const list = document.createElement("li");
    console.log(list);

    list.innerText = data;
    list_value.appendChild(list);

    input_task.value = ""; // Fixed clearing input (removed extra space)
});
