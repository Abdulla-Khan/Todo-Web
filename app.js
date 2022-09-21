var btn = document.getElementById('add-todo')
var input = document.getElementById('todo-input')

var liText;


function addTodo() {


    var list = document.getElementById('list')
    var li = document.createElement('li')

    var delBtn = document.createElement('button')
    var delText = document.createTextNode('Delete')

    var updateBtn = document.createElement('button')
    var updateText = document.createTextNode('Update')

    liText = document.createTextNode(input.value)
    delBtn.setAttribute('class', 'del-btn')
    updateBtn.setAttribute('class', 'del-btn')

    delBtn.setAttribute('onclick', 'delTodo(this)')
    updateBtn.setAttribute('onclick', 'updateTodo(this)')



    if (input.value == '') {

    }
    else {
        delBtn.appendChild(delText)
        updateBtn.appendChild(updateText)
        li.appendChild(liText)
        li.appendChild(delBtn)
        li.appendChild(updateBtn)

        list.appendChild(li)
        input.value = ''
    }


}

function delTodo(x) {
    x.parentNode.remove()
    // li.value
}

function deleteAll(x) {
    x.nextElementSibling.remove()

}

function updateTodo(x) {

    var updatedValue = prompt('Update your task', '')

    x.parentNode.firstChild.nodeValue = updatedValue
}
