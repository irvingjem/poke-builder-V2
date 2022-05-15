/* link this to dashboard hbrs
 event listener for delete call on btn click
 fetch request finds pokemon by id */

console.log('Hello World!')

const clicked = function(event) {
    event.preventDefault();
    console.log("clicked")
        // get the id from btn
    const id = this.value
        // debugger
        // console.log('/api/users/pokemon/user/' + id)
    fetch('/api/users/' + id, {
        method: 'DELETE'
    }).then(() => document.location.replace("/dashboard"))
}

$(document).on('click', '.deletelistener', clicked)