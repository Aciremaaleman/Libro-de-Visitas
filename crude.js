// Se crea objeto de arrays vacio para guardar los datos.
var commentsData = [
  {
  content:'hola',
  style : {
    color: 'white',
    background: 'pink',
    fontSize: '40px',
    textAlign: 'center'
  }
},
  {
    content:'adios',
    style : {
      color: 'pink',
      background: 'purple',
      fontSize: '15px',
      textAlign: 'center'
    }
  },
];

var commentsContainer = document.getElementById('print');
var btn = document.getElementById('submit');
// btn.addEventListener("click",addComment);

function drawComment() {
  // commentsContainer.innerHTML = "";
  for (var i = 0; commentsData.length; i++){
    var sectionDom = createCommentFromData(commentsData[i]);
    commentsContainer.appendChild(sectionDom);
  };
};

function createCommentFromData() {
  var commentContent = commentsData.content;
  // console.log(commentContent);
  var commentDom = document.createElement("p");
  commentDom.innerHTML = commentContent;
  Object.assign(commentDom.style, commentsData.style);
  return commentDom;
};
drawComment();

// function addComment() {
//   var commentPreview = document.getElementById('print');
//   console.log(commentPreview);
//   var newCommentText = commentPreview.innerHTML;
//   console.log(newCommentText);
//   var newComment = { content: "", style: {} };
//   console.log(newComment);
//   newComment.content = newCommentText;
//   Object.assign(newComment.style, commentPreview.style);
//   commentsData.unshift(newComment);
//   drawComment();
// };
