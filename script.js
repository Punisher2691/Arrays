//var names = ["Bob", "Alice", "Ceaser", "David"];
//
//function showArray() {
//    names.sort();
//    document.querySelector("#divA").innerHTML = names.join(" ");
//}
//
//showArray();
//
//function deleteFirst() {
//    names.shift();
//    document.querySelector("#divA").innerHTML = names;
//    
//}
//function deleteLast() {
//    names.pop();
//    document.querySelector("#divA").innerHTML = names;
//    
//}
//
//function addLast() {
//    var x = document.querySelector("#pushLast").value;
//    names.push(x)
//    document.querySelector("#divA").innerHTML = names;
//    
//}
//function addFirst() {
//    var x = document.querySelector("#unshiftFirst").value;
//    names.unshift(x)
//    document.querySelector("#divA").innerHTML = names;
//    
//}
//
//
var names = ["Bob", "Alice", "Ceaser", "David"];

const Array = { 
    
    

    showArray() {
        names.sort();
        document.querySelector("#divA").textContent = names.join(" ");
    },


    deleteFirst() {
        document.querySelector("#btnDeleteFirst").addEventListener("click", function(){
        names.shift();
        document.querySelector("#divA").textContent = names;
        
        });
        
      },
    deleteLast(){
            document.querySelector("#btnDeleteLast").addEventListener("click", function(){
            names.pop();
            document.querySelector("#divA").textContent = names;
            
        });   
    },
    addLast() {
            
            document.querySelector("#add2").addEventListener("click", function(){
            var x = document.querySelector("#text2").value;
            names.push(x)
            document.querySelector("#divA").textContent = names;    
        });
        
    },
    addFirst() {
        document.querySelector("#add1").addEventListener("click", function(){
        var x = document.querySelector("#text1").value;
        names.unshift(x)
        document.querySelector("#divA").textContent = names;
        });
        
    },
    
                                                                


          init(){
              this.showArray();
              this.deleteFirst();
              this.deleteLast();
              this.addLast();
              this.addFirst();

          }



}
Array.init();