console.log("notes");
showNotes();
let add = document.getElementById('addNoteBtn');
add.addEventListener('click',function(){
    let note = document.getElementById('text-note');
    console.log(note);

    if(note.value.trim().length>0)
    {  let noteObj;
       let notes = localStorage.getItem('notes');
       if(notes === null)
       {
           noteObj = [];
       }else{
           noteObj = JSON.parse(notes);
       }
       noteObj.push(note.value.trim());
       localStorage.setItem('notes',JSON.stringify(noteObj));
       showNotes();
       note.value ="";

    }
});

function showNotes(){
    let card = document.getElementById('notes-container');
    let noteObj = JSON.parse(localStorage.getItem('notes'));
    let html = "";
   noteObj.forEach(function(element,index) {
       html += `<div class="card-content">
       <h3>NOTE ${index+1}</h3>
       <hr>
       <p>${element}</p>
       <hr>
       <div class="btn-group">
       <button>delete note</button>
        <button>edit note</button>
       </div>
   </div>`;
   });
   card.innerHTML = html;
}
