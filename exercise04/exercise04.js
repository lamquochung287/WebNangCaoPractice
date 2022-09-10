function saveLocalStorage(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    
    let data_storage = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [];
    data_storage.push({
        name: name,
        age: age
    })
    localStorage.setItem('student',JSON.stringify(data_storage));
    console.log(localStorage.getItem('student'));
    /*var data_saved = JSON.parse(localStorage.getItem('student'));
    data_saved.push([JSON.stringify({data:[{id: new String(localStorage.getItem('id')),name: new String(name),age: new String(age)}]})])*/
}

// this function display data through html table
function displayTable(){
        
                var table = $('#student_table > tbody');
                var data = localStorage.getItem('student');
                console.log(data);
                //table.find('tr').remove(); // remove the old row to prevent when click many time to button it will load that data again and have many similar data
                var table_data;
                if(data){
                        data = JSON.parse(data);
                        data.forEach((value,index)=>{
                            table_data = table_data + `<tr><td> ${index+1}</td><td>${value.name}</td><td> ${value.age}</td></tr>`;    
                        })
                        /*
                        data.map(({value,index}) => {

                        table_data = table_data + `<tr><td>+ ${index+1}+</td><td>+${value.name}+</td><td>+ ${value.age}+</td></tr>`;
                    })*/
                    table.append(table_data);
                }
                
                    /*
                    table_data = table_data + '<tr>';
                    table_data = table_data + '<td>' + ${index +1} + '</td>';
                    table_data = table_data + '<td>' + ${value.name} + '</td>';
                    table_data = table_data + '<td>' + data.data[i].age + '</td>';
                    table_data = table_data + '</tr>';*/
                
                /*
                for(let i = 0; i < data.data.length; i++) {
                    table_data = table_data + '<tr>';
                    table_data = table_data + '<td>' + data.data[i].id + '</td>';
                    table_data = table_data + '<td>' + data.data[i].name + '</td>';
                    table_data = table_data + '<td>' + data.data[i].age + '</td>';
                    table_data = table_data + '</tr>';
                }
                table.append(table_data);*/
        
            
}

function saveSessionStorage(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    
    let data_storage = sessionStorage.getItem('studentSession') ? JSON.parse(sessionStorage.getItem('studentSession')) : [];
    data_storage.push({
        name: name,
        age: age
    })
    sessionStorage.setItem('studentSession', JSON.stringify(data_storage));
    console.log(sessionStorage.getItem('studentSession'));
}

function displaySessionTable(){
    var table = $('#student_session_table > tbody');
    var data = sessionStorage.getItem('studentSession');
    console.log(data);
    //table.find('tr').remove(); // remove the old row to prevent when click many time to button it will load that data again and have many similar data
    var table_data;
    if(data){
        data = JSON.parse(data);
        data.forEach((value,index)=>{
        table_data = table_data + `<tr><td> ${index+1}</td><td>${value.name}</td><td> ${value.age}</td></tr>`;    
        })
    table.append(table_data);
    }
}

//<!---Lam Quoc Hung - 519H291-->