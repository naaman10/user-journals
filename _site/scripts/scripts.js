$(window).on('load', function(){
  NProgress.start();
  $(document).ready(function() {
    NProgress.done();
  });
});
$("#addUserImage").dropzone({ url: "http://user-journals.appspot.com/images/" });
Dropzone.options.addUserImage = {
  method: "put",
  dictDefaultMessage: "Drag and drop of click to add image (recommended 300x300px)",
  acceptedFiles: ".jpg,.jpeg,.png"
}
$('#projectButton').click(function(event) {
  var naaman = $(this).attr('data-projectid');
  console.log("naaman: " + naaman);
});

$(document).ready(function() {
  $(".projectLink").click(function() {
    var naaman = $(this).attr('id');
    console.log(naaman);
  });

});
$(".storyTabsItem").click(function() {
  $(".storyTabsItem.activeTab").removeClass('activeTab');
  $(this).addClass('activeTab');
});

// Sign up

$("#signupSubmit").on('click', function() {
          event.preventDefault();
          var signupUrl = ("https://user-journals.firebaseio.com/Signups.json");
          var signupName = $("#signupName").val();
          var signupEmail = $("#signupEmail").val();
          var signupDate = new Date();
          var signupFull = {
            "signupName": signupName,
            "signupEmail": signupEmail,
            "signupDate": signupDate
          }
          $.ajax({
            url: signupUrl,
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(signupFull)
          })
          .done(function() {
            console.log("success");
            Command: toastr["success"]("We will contact you shortly when your early access is ready.", "Sign up Complete")
            toastr.options = {
              "closeButton": true,
              "debug": false,
              "newestOnTop": false,
              "progressBar": false,
              "positionClass": "toast-top-center",
              "preventDuplicates": false,
              "onclick": null,
              "showDuration": "300",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
            }
          })
          .fail(function() {
            console.log("error");
              Command: toastr["error"]('Looks like we have run in to an issue, please contact <a href="#" id="idLink">support</a><br /><br /><button type="button" class="btn clear btn-primary ">Okay</button>', "Uh oh!")

                toastr.options = {
                  "closeButton": true,
                  "debug": false,
                  "newestOnTop": false,
                  "progressBar": false,
                  "positionClass": "toast-top-center",
                  "preventDuplicates": false,
                  "onclick": null,
                  "timeOut": 0,
                  "extendedTimeOut": 0,
                  "showEasing": "swing",
                  "hideEasing": "linear",
                  "showMethod": "fadeIn",
                  "hideMethod": "fadeOut",
                  "tapToDismiss": false
                }
          })
          .always(function() {
            console.log("complete");
          });

        });

// signup end
// contact form
$("#contactSubmit").on('click', function() {
          event.preventDefault();
          var contactUrl = ("https://user-journals.firebaseio.com/contacts.json");
          var contactName = $("#contactName").val();
          var contactEmail = $("#contactEmail").val();
          var contactSubject = $("#contactSubject").val();
          var contactMessage = $("#contactMessage").val();
          var contactDate = new Date();
          var contactFull = {
            "contactName": contactName,
            "contactEmail":contactEmail,
            "contactSubject":contactSubject,
            "contactMessage":contactMessage,
            "contactDate":contactDate
          }
          $.ajax({
            url: contactUrl,
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(contactFull)
          })
          .done(function() {
            console.log("success");
            Command: toastr["success"]("Thanks for getting in touch, we will get back to you as soon as possible.", "Sent")
            toastr.options = {
              "closeButton": true,
              "debug": false,
              "newestOnTop": false,
              "progressBar": false,
              "positionClass": "toast-top-center",
              "preventDuplicates": false,
              "onclick": null,
              "showDuration": "300",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
            }
          })
          .fail(function() {
            console.log("error");
              Command: toastr["error"]('Looks like we have run in to an issue, please contact <a href="#" id="idLink">support</a><br /><br /><button type="button" class="btn clear btn-primary ">Okay</button>', "Uh oh!")

                toastr.options = {
                  "closeButton": true,
                  "debug": false,
                  "newestOnTop": false,
                  "progressBar": false,
                  "positionClass": "toast-top-center",
                  "preventDuplicates": false,
                  "onclick": null,
                  "timeOut": 0,
                  "extendedTimeOut": 0,
                  "showEasing": "swing",
                  "hideEasing": "linear",
                  "showMethod": "fadeIn",
                  "hideMethod": "fadeOut",
                  "tapToDismiss": false
                }
          })
          .always(function() {
            console.log("complete");
          });

        });

// contact form end

// cookies
$(document).ready(function() {
    var cookieAccept = $.cookie("cookieAccept");
    if (cookieAccept === "") {
      Command: toastr["info"]('We use cookies to enhance your experience, if you would like to find out more please view our <a href="/policies" id="idLink">privacy and cookies policy.</a><br><button class="btn btn-primary btn-sm" id="cookieAccept">Accept</button>', "About Cookies on User Journals",{"positionClass": 'toast-bottom-full-width', timeOut: 0,"extendedTimeOut": 0})
      toastr.options = {
        "closeButton": true,
        "debug": true,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": 'toast-bottom-full-width',
        "preventDuplicates": false,
        "onclick": null,
        "timeOut": 0,
        "showDuration": "0",
        "hideDuration": "0",
        "extendedTimeOut": 0,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "tapToDismiss": true
      }
      $("#cookieAccept").on('click', function() {
        event.preventDefault();
        $.cookie("cookieAccept", "true", { expires: 20, path: '/' });
        cookieAccept = "true"
      });
    } if (cookieAccept === "true") {
      toastr.remove();
    }
  });
  // cookies end
  $(document).ready(function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]

    firebase.auth().onAuthStateChanged(function(user) {
      // [START_EXCLUDE silent]

      // [END_EXCLUDE]
      if (user) {
        // User is signed in.
        $("#signInOut").html('<i class="fas fa-sign-in-alt"></i> Sign Out');
      } else {
        $("#signInOut").html('<i class="fas fa-sign-in-alt"></i> Sign In');
      }
    })
  });
  function activeEpic(identifier) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var database = firebase.database();
        var uid = user.uid;
        var selectedProject = $.cookie("ujapid");
        var selectedEpic = $(identifier).data('epicid');
        $.cookie("ujaeid", selectedEpic);
        var epicRef = firebase.database().ref('users/' + uid + '/projects/' + selectedProject + "/epics/" + selectedEpic);
				return epicRef.once('value').then(function(snapshot) {
					var epicName = (snapshot.val().EpicName);
					var epicDescription = (snapshot.val().epicDescription);
					$("#epicTitle").text(epicName);
          $("#viewEpicModal").modal('show')
				})
  }
})
}
function createPersona() {
  firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      var database = firebase.database();
      var uid = user.uid;
      var personaName = $("#newPersonaName").val();
      var personaAge = $("#newPersonaAge").val();
      var personaSalary = $("#newPersonaSalary").val();
      var personaGender = $("#newPersonaGender input:radio:checked").val();
      var d = new Date();
      if (personaName === "") {Command: toastr["info"]("Please enter a name for your persona ", "Oops", {
        "positionClass": "toast-bottom-left"
      })
    }
    else {
      var personaPath = firebase.database().ref('users/' + uid + '/personas/');
      var newPersona = personaPath.push();
      newPersona.set({
        personaName: personaName,
        personaAge: personaAge,
        personaSalary: personaSalary,
        personaGender: personaGender,
        DateCreate: Date(),
        DateClose: ""
      }, function(error) {
        if (error) {
          Command: toastr["warning"]("Error code: " + error.code, "An error occurred ", {"positionClass": "toast-bottom-left"})
        }
        else {
          Command: toastr["success"](" ", "Persona Created", {
            "positionClass": "toast-bottom-left"
          })
          $('#newProjectPersona').modal('hide');
          $("#newPersonaName").val(null);
          $("#newPersonaAge").val(null);
          $("#newPersonaSalary").val(null);
          $("#newPersonaGender").val(null);
        }
      })
    }
    }
  })
}
function viewPersona(identifier) {
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var database = firebase.database();
        var uid = user.uid;
        var selectedPersona = $(identifier).data('personaid');
        $.cookie("ujaperid", selectedPersona);
        var personaRef = firebase.database().ref('users/' + uid + '/personas/' + selectedPersona);
        return personaRef.once('value').then(function(snapshot) {
            var personaName = (snapshot.val().personaName);
            var personaAge = (snapshot.val().personaAge);
            var personaSalary = (snapshot.val().personaSalary);
            console.log(personaName)
            // var personaDescription = (snapshot.val().epicDescription);
            $("#viewPersonaModal .modal-title").text(personaName);
            $("#viewPersonaAge").val(personaAge);
            $("#viewPersonaAge").siblings('label').addClass('active');
            $("#viewPersonaSalary").val(personaSalary);
            $("#viewPersonaSalary").siblings('label').addClass('active');
            $("#viewPersonaModal").modal('show')
          })
        }
      })
  }
