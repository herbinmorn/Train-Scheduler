$(document).ready(function() {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyD3IXF0FunsNtI03SisUEIv24MvO3UfITc",
        authDomain: "herbinmorn-070619.firebaseapp.com",
        databaseURL: "https://herbinmorn-070619.firebaseio.com",
        projectId: "herbinmorn-070619",
        storageBucket: "",
        messagingSenderId: "740316620897",
        appId: "1:740316620897:web:32d61899062cee48"
          };
        
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    $('#submit-btn').on('click',function(event){
        event.preventDefault();
        var dataInputs = {
            trainName:$('#trainName').val(),
            destination:$('#destination').val(),  
            firstTrainTime:$('#firstTrainTime').val(),
            frequency:$('#frequency').val()
        };
        database.ref().push(dataInputs);
    });
   
    function displayFirebaseValues(){
        database.ref().on('child_added',function(snapshot){
            $('#show-firebase-info').append(
               '<tr>' + '<td>' + snapshot.val().trainName + '</td>' + '<td>'+ snapshot.val().destination +'</td>'+ '<td>'+ snapshot.val().firstTrainTime +'</td>'+ '<td>'+ snapshot.val().frequency +'</td>'+ '</tr>'
            );
        
        });
    }

    displayFirebaseValues();
});
