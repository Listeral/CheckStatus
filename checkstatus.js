	function checkStatus (item, index){
        console.log(item.getAttribute("alt"));
        if (item.getAttribute("alt") == "Open"){
            //notify user
            notifyMe(); 
        }
    }

    // request permission on page load
    document.addEventListener('DOMContentLoaded', function () {
        if (Notification.permission !== "granted")
            Notification.requestPermission();
    });

    function notifyMe() {
        //enables permission for browser notifications
        if (!Notification) {
            alert('Desktop notifications not available in your browser.'); 
            return;
        }
        //if permission is granted
        if (Notification.permission !== "granted")
            Notification.requestPermission();
        else {
            var notification = new Notification('Notification title', {
                body: "One of your classes is open!",
            });

            notification.onclick = function () {
                window.open("https://css.adminapps.cornell.edu/psc/cuselfservice/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ACAD_CAREER=UG&EMPLID=3745998&ENRL_REQUEST_ID=&INSTITUTION=CUNIV&STRM=2643");      
            };
        }
    }

    function pause() {
        var elems = window.document.getElementsByClassName("SSSIMAGECENTER");
        for (var i = 0; i < elems.length; i++){
            checkStatus(elems[i], i);
        }
        window.setTimeout(reload,3000);
    }

    function reload() {
        window.location.reload(); //reload page
    }
    pause();

