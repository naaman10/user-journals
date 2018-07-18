$(window).on('load', function(){
  NProgress.start();
  $(document).ready(function() {
    NProgress.done();
  });
});
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
