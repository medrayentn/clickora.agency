//Contact sending mail
function Email() {
    let emailsParms = {
        name: document.getElementById('Name').value.trim(),
        email: document.getElementById('Email').value.trim(),
        service: document.getElementById('Service').value,
        package: document.getElementById('Package').value, // Add Package field
        message: document.getElementById('Message').value.trim(),
    };

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks for all fields
    let errorMessage = '';
    if (!emailsParms.name) {
        errorMessage = 'Please enter your name.';
    } else if (!emailsParms.email) {
        errorMessage = 'Please enter your email address.';
    } else if (!emailRegex.test(emailsParms.email)) {
        errorMessage = 'Please enter a valid email address.';
    } else if (!emailsParms.service) {
        errorMessage = 'Please select a service.';
    } else if (!emailsParms.package) {
        errorMessage = 'Please select a package.';
    } else if (!emailsParms.message) {
        errorMessage = 'Please enter your message.';
    }

    // If there's an error, show notification and stop execution
    if (errorMessage) {
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${errorMessage}`;
        document.body.appendChild(errorNotification);

        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
        return;
    }

    const service_ID = 'service_tbqgkcq';
    const temp_ID = 'template_3m1us9n';

    emailjs.send(service_ID, temp_ID, emailsParms).then(
        (res) => {
            document.getElementById('Name').value = '';
            document.getElementById('Email').value = '';
            document.getElementById('Service').selectedIndex = 0;
            document.getElementById('Package').selectedIndex = 0; // Reset Package field
            document.getElementById('Message').value = '';
            console.log(res);

            // Create success notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = '<i class="fas fa-check-circle"></i> Message was sent successfully, Thank you!';
            document.body.appendChild(notification);

            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 3000);
        }
    ).catch((err) => {
        console.log(err);
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again.';
        document.body.appendChild(errorNotification);
        
        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
    });
}

//newsletter
function subscribeNewsletter() {
    let email = document.getElementById('email_newsletter').value;
    let params = {
        email: email,
    };

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailRegex.test(params.email)) {
        // Show error notification for invalid email
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter a valid email address.';
        document.body.appendChild(errorNotification);

        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
        return; // Stop execution if email is invalid
    }

    const service_ID = 'service_tbqgkcq'; // Reuse the same service ID or create a new one
    const temp_ID = 'template_xkbjvbt'; // Replace with your EmailJS newsletter template ID

    emailjs.send(service_ID, temp_ID, params).then(
        (res) => {
            document.getElementById('email_newsletter').value = '';
            console.log(res);

            // Create success notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = '<i class="fas fa-check-circle"></i> Subscribed successfully! Check your email.';
            document.body.appendChild(notification);

            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 3000);
        }
    ).catch((err) => {
        console.log(err);
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to subscribe. Please try again.';
        document.body.appendChild(errorNotification);

        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
    });
}
