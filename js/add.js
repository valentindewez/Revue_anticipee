let addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", function() {
  let postit = document.getElementById("postit");
  let clone = postit.cloneNode(true);
  postit.appendChild(clone);
  
});

