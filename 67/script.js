//these should be writen in console
  document.body.firstElementChild  //this is for avoiding the textNodes
  document.body.firstchild // this is for bothe text node and element nodes
  document.body.firstElementChild[3]// 0,1,2,3,4,5,....likewise
  document.body.firstElementChild.childrens
a=document.body.firstElementChild // possible to assign it to any variable 
a.style.backgroundColor="black"  // likewise changes are possible 

document.body.childNodes.parentNodes // for accessing the parent of the child 
document.body.nextElementSibling // or nextsibling but will include the textNodes too
document.body.previousElementSibling // or previoussibling but will include the textNodes too 
