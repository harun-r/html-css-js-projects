// get all list item
// get left and right box
// loop for all list event

let lists = document.getElementsByClassName('list-item');
let leftBox = document.getElementById('leftBox');
let rightBox = document.getElementById('rightBox');

for(list of lists){
    list.addEventListener('dragstart', function (e) {
        let selected = e.target;
        console.log(selected)

        rightBox.addEventListener('dragover', function (e){
            e.preventDefault()
        });
        rightBox.addEventListener('drop', function (e){
            rightBox.appendChild(selected);
            selected = null
        })

        leftBox.addEventListener('dragover', function (e){
            e.preventDefault()
        });
        leftBox.addEventListener('drop', function (e){
            leftBox.appendChild(selected);
            selected = null
        })

    })
}