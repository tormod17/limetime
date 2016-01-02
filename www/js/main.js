MemoryStore = [];
var firebaseDb = new Firebase("https://limetime.firebaseio.com/");

var app = {

    registerEvents: function() {
        $(window).on('hashchange', $.proxy(this.route, this));
        $('body').on('mousedown', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $('body').on('mouseup', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
    },


    getFirebase: function() {

        var MemoryStore = [];

        firebaseDb.on('value', function(snapshot) {
            MemoryStore = snapshot.val();
            console.log(MemoryStore);
            return MemoryStore;

        });

    },

    initialize: function() {
        var self = this;
        this.detailsURL = /^#employees\/(\d{1,})/;
        //this.registerEvents();
        self.renderHomeView();


    },

    renderHomeView: function() {

        var firebaseDb = new Firebase("https://limetime.firebaseio.com/");

        firebaseDb.on('value', function(snapshot) {
            MemoryStore = snapshot.val();
            console.log(MemoryStore);

            var html =
                "<div class='header'><h1>Lime Time</h1>" +
                "<div>" +
                "<ul class='menuButtons'><li><button onclick='app.thisWk()'>This Week</button></li>" +
                "<li><button onclick='app.thisWknd()'>This Weekend</button></li>" +
                "<li><button onclick='app.renderAll()()'>All </a></li>" +
                "</ul>";
            MemoryStore.forEach(function(event) {
                html +=
                    '<ul>' +
                    '<li>' + event.eventName + '<li>' +
                    '<li>' + event.address + '</li>' +
                    '<li><a class="infoButton" onclick="app.renderEvent()">Info</a></li>' +
                    '</ul>';

            });
            html += "</div><div><button onclick='app.renderAddEvent()'>Add Event</button></div>";
            $('body').html(html);

        });
    },

    sortByTimeFunction: function(a, b) {
        var dateA = new Date(a.dateTime).getTime();
        var dateB = new Date(b.dateTime).getTime();
        return dateA > dateB ? 1 : -1;

    },

    thisWk: function() {
        MemoryStore.sort(this.sortByTimeFunction);
        console.log('WK', MemoryStore);

        var thisWk = MemoryStore.slice(0, 7);

        var html =
            "<div class='header'><h1>Lime Time</h1>" +
            "<div>" +
            "<button onclick='app.renderHomeView()'>Back</button>" +
            "<div>" +
            "<ul class='menuButtons'><li><button onclick='app.thisWk()'>This Week</button></li>" +
            "<li><button onclick='app.thisWknd()'>This Weekend</button></li>" +
            "<li><button onclick='app.renderAll()'>All </a></li>" +
            "</ul>";

        thisWk.forEach(function(event) {
            html +=
                '<ul>' +
                '<li>' + event.eventName + '<li>' +
                '<li>' + event.address + '</li>' +
                '<li><a class="infoButton" onclick="app.renderEvent()">Info</a></li>' +
                '</ul>';
        });
        html += "</div>";
        $('body').html(html);
    },

    thisWknd: function() {
        MemoryStore.sort(this.sortByTimeFunction);
        var thisWk = MemoryStore.slice(0, 7);
        var wknd = thisWk.filter(function(event) {
            // var day = new Date(event.dateTime).getDay();
            return event.dateTime.indexOf('Fri') > -1 || event.dateTime.indexOf('Sat') > -1 || event.dateTime.indexOf('Sun') > -1;
        });

        var html =
            "<div class='header'><h1>Lime Time</h1>" +
            "<div>" +
            "<button onclick='app.renderHomeView()'>Back</button>" +
            "<div>" +
            "<ul class='menuButtons'><li><button onclick='app.thisWk()'>This Week</button></li>" +
            "<li><button onclick='app.thisWknd()'>This Weekend</button></li>" +
            "<li><button onclick='app.renderAll()()'>All </a></li>" +
            "</ul>";

        wknd.forEach(function(event) {
            html +=
                '<ul>' +
                '<li>' + event.eventName + '<li>' +
                '<li>' + event.address + '</li>' +
                '<li><a class="infoButton" onclick="app.renderEvent()">Info</a></li>' +
                '</ul>';
        });
        html += "</div>";
        $('body').html(html);





    },

    renderAll: function() {
        MemoryStore.sort(this.sortByTimeFunction);

        var html =
            "<div class='header'><h1>Lime Time</h1>" +
            "<div>" +
            "<button onclick='app.renderHomeView()'>Back</button>" +
            "<div>" +
            "<ul class='menuButtons'><li><button onclick='app.thisWk()'>This Week</button></li>" +
            "<li><button onclick='app.thisWknd()'>This Weekend</button></li>" +
            "<li><button onclick='app.renderAll()'>All </a></li>" +
            "</ul>";

        MemoryStore.forEach(function(event) {
            html +=
                '<ul>' +
                '<li>' + event.eventName + '<li>' +
                '<li>' + event.address + '</li>' +
                '<li><a class="infoButton" onclick="app.renderEvent()">Info</a></li>' +
                '</ul>';
        });
        html += "</div>";
        $('body').html(html);


    },

    renderEvent: function() {

        var html =
            "<div class='header'><h1>Lime Time</h1>" +
            "<div><button onclick='app.renderHomeView()''>Back</button></a></div>" +
            "<div>" +
            "<ul class='menuButtons'><li><a>This Week</a></li>" +
            "<li><a>This Weekend</a></li>" +
            "<li><a>All </a></li>" +
            "</ul>" +
            "<div class=' eventWrapper'>" +
            "<h3>" + MemoryStore[0].eventName + "</h3>" +
            "<img src='http://blog.nomorefashionvictims.com/wp-content/uploads/2013/01/phagwa.jpg' alt='partyPic' width='250px' height='250px'>" +
            '<ul>' +
            '<li>' + MemoryStore[0].eventName + '<li>' +
            '<li>' + MemoryStore[0].address + '</li>' +
            '</ul>' +
            "</div>";
        $('body').html(html);
    },

    renderAddEvent: function() {
        var html =
            "<div class='header'><h1>Lime Time</h1>" +
            "<div><button onclick='app.renderHomeView()''>Back</button></a></div>" +
            "</div>" +


            '<form role="form">' +
            '<label for="EventName">Event Name</label>' +
            '<input type="text" id="eventName" placeholder="Event Name" value="Pier one">' +
            '<br>' +
            '<label for="Address">Address</label>' +
            '<input type="text" id="address" placeholder="address" value="chagaramus" >' +
            '<br>' +
            '<label for="Music">Music</label>' +
            '<input type="text" id="music" placeholder="music" value="soca">' +
            '<br>' +
            '<label for="door policy">door policy</label>' +
            '<input type="text" id="doorPolicy" placeholder="door policy" value="cooler">' +
            '<br>' +
            '<label for="price">price</label>' +
            '<input type="text" id="price" placeholder="price" value="300">' +
            '<br>' +
            '<label for="host">host</label>' +
            '<input type="text" id="host" placeholder="host" value="Big Mumma">' +
            '<br>' +
            '<label for="cellPhone">cellPhone</label>' +
            '<input type="text" id="cellPhone" placeholder="cellPhone" value="555-7777">' +
            '<br>' +
            '<label for="email">email</label>' +
            '<input type="email" id="email" placeholder="email" value="lets@gmail.com">' +
            '<br>' +
            '<button type="button" onclick="app.sendFormData()">Submit</button>' +
            '</form>';
        html += "</div>";
        $('body').html(html);

    },

    sendFormData: function() {
        var eventName = document.getElementById('eventName').value;
        var address = document.getElementById('address').value;
        var music = document.getElementById('music').value;
        var doorPolicy = document.getElementById('doorPolicy').value;
        var price = document.getElementById('price').value;
        var host = document.getElementById('host').value;
        var cellPhone = document.getElementById('cellPhone').value;
        var email = document.getElementById('email').value;


       //var firebaseDb = new Firebase("https://limetime.firebaseio.com/");


        firebaseDb.push({
            'eventName': eventName,
            'address': address,
            'music': music,
            'doorPolicy': doorPolicy,
            'price': price,
            'host': host,
            'cellPhone': cellPhone,
            'dateTime': 'Fri Jan 1 2015 19:30:10',  //new Date(),
            'email': email

        }, console.log('sending'));

    },

    sendToDB: function() {


    },

    showAlert: function(message, title) {
        if (navigator.notification) {
            navigator.notification.alert(
                message,
                null, // callback
                title,
                'OK' // Button label
            );
        } else {
            alert(title + ": " + message);
        }
    },


    slidePage: function(page) {

        var currentPageDest,
            self = this;

        // If there is no current page (app just started) -> No transition: Position new page in the view port
        if (!this.currentPage) {
            $(page.el).attr('class', 'page stage-center');
            $('body').append(page.el);
            this.currentPage = page;
            return;
        }

        // Cleaning up: remove old pages that were moved out of the viewport
        $('.stage-right, .stage-left').not('.homePage').remove();

        if (page === app.homePage) {
            // Always apply a Back transition (slide from left) when we go back to the search page
            $(page.el).attr('class', 'page stage-left');
            currentPageDest = "stage-right";
        } else {
            // Forward transition (slide from right)
            $(page.el).attr('class', 'page stage-right');
            currentPageDest = "stage-left";
        }

        $('body').append(page.el);

        // Wait until the new page has been added to the DOM...
        setTimeout(function() {
            // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
            $(self.currentPage.el).attr('class', 'page transition ' + currentPageDest);
            // Slide in the new page
            $(page.el).attr('class', 'page stage-center transition');
            self.currentPage = page;
        });

    }

};

app.initialize();
