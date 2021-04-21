var contacts=[{
         "id": 1,
         "firstName": "Dominic",
         "lastName": "Varden",
         "email": "dvarden0@slideshare.net",
         "gender": "Agender"
       }, {
         "id": 2,
         "firstName": "Adolphus",
         "lastName": "Yeardsley",
         "email": "ayeardsley1@marketwatch.com",
         "gender": "Genderqueer"
       }, {
         "id": 3,
         "firstName": "Deny",
         "lastName": "Barnish",
         "email": "dbarnish2@vkontakte.ru",
         "gender": "Genderqueer"
       }, {
         "id": 4,
         "firstName": "Stanfield",
         "lastName": "Chesson",
         "email": "schesson3@desdev.cn",
         "gender": "Male"
       }, {
         "id": 5,
         "firstName": "Valaria",
         "lastName": "Candish",
         "email": "vcandish4@networksolutions.com",
         "gender": "Genderqueer"
       }, {
         "id": 6,
         "firstName": "Avivah",
         "lastName": "Eads",
         "email": "aeads5@artisteer.com",
         "gender": "Non-binary"
       }, {
         "id": 7,
         "firstName": "Abran",
         "lastName": "Veldman",
         "email": "aveldman6@usnews.com",
         "gender": "Genderqueer"
       }, {
         "id": 8,
         "firstName": "Emma",
         "lastName": "Weth",
         "email": "eweth7@yandex.ru",
         "gender": "Agender"
       }, {
         "id": 9,
         "firstName": "Jeddy",
         "lastName": "Teece",
         "email": "jteece8@mysql.com",
         "gender": "Agender"
       }, {
         "id": 10,
         "firstName": "Virgina",
         "lastName": "Karpushkin",
         "email": "vkarpushkin9@ed.gov",
         "gender": "Non-binary"
       }]
       buildTable(contacts)
                  // using map() function     
         function buildTable(data) {
              var table= document.getElementById('myTable');
              var row = data.map((contacts)=>{
                       return `<tr>
                              <td>${contacts.firstName}</td>
                              <td>${contacts.lastName}</td>
                              <td>${contacts.email}</td>
                              <td>${contacts.gender}</td>
                              </tr>`
                           
              });
              table.innerHTML+=row;    
         }

         //**********using for loop ************/
         /*
         function buildTable(data) {
           var table = document.getElementById('myTable');
            for(let i=0; i<data.length;i++){
             var row= `<tr>
                          <td>${data[i].firstName}</td>
                          <td>${data[i].lastName}</td>
                          <td>${data[i].email}</td>
                          <td>${data[i].gender}</td>
                        </tr>`;
            table.innerHTML+=row;
           }
         }*/

         // using while loop 
         /*
         function buildTable(data) {
          var table = document.getElementById('myTable');
          let i=0;
           while(i<data.length){
            var row= `<tr>
                         <td>${data[i].firstName}</td>
                         <td>${data[i].lastName}</td>
                         <td>${data[i].email}</td>
                         <td>${data[i].gender}</td>
                       </tr>`;
                       i++;
           table.innerHTML+=row;
          }
        }
        */

        
         

