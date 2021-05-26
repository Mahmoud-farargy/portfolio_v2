 $(document).ready(function(){
        $('#send_message').click(function(e){
            
            //Stop form submission & check the validation
            e.preventDefault();
            
            // Variable declaration
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
            var subject = $('#subject').val();
            var message = $('#message').val();
            
         	// Form field validation
            if(name.length == 0){
                var error = true;
                $('#name_error').fadeIn(500);
            }else{
                $('#name_error').fadeOut(500);
            }
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
                $('#email_error').fadeIn(500);
            }else{
                $('#email_error').fadeOut(500);
            }
            // if(subject.length == 0){
            //     var error = true;
            //     $('#subject_error').fadeIn(500);
            // }else{
            //     $('#subject_error').fadeOut(500);
            // }
            if(message.length == 0){
                var error = true;
                $('#message_error').fadeIn(500);
            }else{
                $('#message_error').fadeOut(500);
            }
            
            // If there is no validation error, next to process the mail function
            if(error == false){
               // Disable submit button just after the form processed 1st time successfully.
                $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });
				/* Post form by axios to firebase realtime database*/
                const submittedForm = {
                    name,
                    email,
                    subject,
                    message
                }
                axios.post("https://mahmoudvue.firebaseio.com/portfolio.json", submittedForm).then((res) => {
                        // If the email is sent successfully, remove the submit button
                         $('#submit').remove();
                        //Display the success message
                        $('#mail_success').fadeIn(500);
                        //Reset form inputs
                        $('#name').val("");
                        $('#email').val("");
                        $('#subject').val("");
                        $('#message').val("");
                }).catch((err) => {
                    //Display the error message
                    $('#mail_fail').fadeIn(500);
                    // Enable the submit button again
                    $('#mail_err').fadeIn(500);
                    err && err.message && $('#mail_err').text(err?.message);
                    $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                });
            }

        });    
    });