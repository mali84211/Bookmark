var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var boxModal = document.querySelector(".box-info");
var bookmarks = [];
function displayBookmark(){
  if(ValidationURL()===true){var site={
  sname:siteName.value,
  surl:siteURL.value,
  }
  console.log(site)
  bookmarks.push(site)
  console.log(bookmarks)
  clearForm()
  display()
  }else{
 boxModal.classList.remove("d-none");
  }
  }
  
  
  
  function clearForm(){
   siteName.value='';
   siteURL.value='';
   }
   function display(){
     
   var trs=``;
   for(var i=0;i<bookmarks.length;i++){
   trs+=`
   <tr>
                  <td>${i+1}</td>
                  <td>${bookmarks[i].sname}</td>              
                
                  <td><a href="https://${bookmarks[i].surl}" class="btn btn-visit "><i class="fa-solid fa-eye pe-1"></i>Visit</a></td>
                  
                  <td>
                    <button onclick="deleteform(${i})" class="btn btn-delete pe-2" data-index="${i}">
                      <i class="fa-solid fa-trash-can"></i>
                      Delete
                    </button>
                  </td>
              </tr>
              `
   }
   document.getElementById('tableContent').innerHTML=trs;
   }
  
   function deleteform(index){
  bookmarks.splice(index,1);
  localStorage.setItem('list',JSON.stringify(bookmarks));
  display();
  }
  
  function ValidationURL(){
  var URLRegex =/^https?:\/\//g;
  var URLValue=siteURL.value;
  if(URLRegex.test(URLValue) == true){
  return true;
  }else{
  return false
  }
  }
  function closeModal() {
    boxModal.classList.add("d-none");
  }
  closeBtn.addEventListener("click", closeModal);