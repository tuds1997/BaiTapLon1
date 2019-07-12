$(document).ready(function() {
              $('#showAlert').click(function(event) {
                /* Act on the event */
                $('.show').fadeIn(400);
              });
              $('.bgshow , .alert-success i').click(function(event) {
                /* Act on the event */
                $('.show').fadeOut(400);
              });
        });