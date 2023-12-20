let name = prompt("Halo, siapakah anda?", "");
document.getElementById("name").innerHTML = name

// function replaceName() {
//     let name = prompt("Halo, siapakah anda?", "");
//     document.getElementById("name").innerHTML = name
// }

// let tombol = document.getElementById('tombol')
// tombol.addEventListener("click", function() {
//     replaceName()
// })
// replaceName();

// Prevent the default behavior of anchor links to avoid page jump
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         smoothScroll(this.getAttribute('href').substring(1));
//     });
// });

function smoothScroll(targetId) {
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
        var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        var startPosition = window.scrollY;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var progress = Math.min(timeElapsed / 800, 1); // Adjust the duration here (800ms in this case)

            window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

            if (timeElapsed < 800) {
                requestAnimationFrame(animation);
            }
        }

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }

        requestAnimationFrame(animation);
    }
}

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    } else {
        // Display "Data tersubmit" alert after a delay
        setTimeout(function() {
            alert("Data tersubmit");
        }, 100); // Adjust the delay time (in milliseconds) as needed
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    // Format the birth date
    const formattedBirthDate = formatDate(birthDate);

    // Display the data
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = formattedBirthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;

    // Get the current time
    var currentTime = new Date();
    
    // Format the time as day/month/year HH:mm:ss GMT
    var options = { 
        day: 'numeric', 
        month: 'numeric', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        timeZoneName: 'short',
    };

    var formattedTime = currentTime.toLocaleString('en-GB', options);

    // Display the current time in the submission-time span
    document.getElementById("submission-time").innerText = formattedTime;
}

function formatDate(dateString) {
    // Parse the input date string
    const dateObject = new Date(dateString);

    // Format the date as day/month/year
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-GB', options);

    return formattedDate;
}




// function setSenderUI(name, birthDate, gender, messages) {
//     document.getElementById("sender-full-name").innerHTML = name;
//     document.getElementById("sender-birth-date").innerHTML = birthDate;
//     document.getElementById("sender-gender").innerHTML = gender;
//     document.getElementById("sender-messages").innerHTML = messages;

//     // Get the current time
//     var currentTime = new Date();
    
//     // Format the time as day/month/year HH:mm:ss GMT
//     var options = { 
//         day: 'numeric', 
//         month: 'numeric', 
//         year: 'numeric', 
//         hour: 'numeric', 
//         minute: 'numeric', 
//         second: 'numeric', 
//         timeZoneName: 'short',
//     };

//     var formattedTime = currentTime.toLocaleString('en-GB', options);

//     // Display the current time in the submission-time span
//     document.getElementById("submission-time").innerText = formattedTime;
// }