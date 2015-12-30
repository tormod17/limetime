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

    initialize: function() {
        var self = this;
        this.detailsURL = /^#employees\/(\d{1,})/;
        this.registerEvents();

        self.renderHomeView();


    },

    renderHomeView: function() {
         var html =
            "<div class='header'><h1>Lime Time</h1>" +
            "<div><button onclick='app.renderAddEvent()'>Add Event</button></div>" +
            "<div>" +
            "<ul class='menuButtons'><li><a>This Week</a></li>" +
            "<li><a>This Weekend</a></li>" +
            "<li><a>The future </a></li>" +
            "</ul>";
        MemoryStore.forEach(function(event) {
            html +=
                '<ul>' +
                '<li>' + event.eventName + '<li>' +
                '<li>' + event.area + '</li>' +
                '<li><a class="infoButton" onclick="app.renderEvent()">Info</a></li>' +
                '</ul>';
        });
        html += "</div>";
        $('body').html(html);
    },

    renderEvent: function(){

        var html = 
           "<div class='header'><h1>Lime Time</h1>" +
            "<div><button onclick='app.renderAddEvent()'>Add Event</button></div>" +
            "<div>" +
            "<ul class='menuButtons'><li><a>This Week</a></li>" +
            "<li><a>This Weekend</a></li>" +
            "<li><a>The future </a></li>" +
            "</ul>"+
            "<div class=' eventWrapper'>"+
            "<h3>"+ MemoryStore[0].eventName + "</h3>"+
            "<img src='http://blog.nomorefashionvictims.com/wp-content/uploads/2013/01/phagwa.jpg' alt='partyPic' width='100px' height='100px'>"+
                '<ul>' +
                 '<li>' + MemoryStore[0].eventName + '<li>' +
                 '<li>' + MemoryStore[0].area + '</li>' +
                '</ul>'+
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
            '<input type="text id="eventName" placeholder="Event Name">' +
            '<br>'+
            '<label for="Address">Address</label>' +
            '<input type="text id="address" placeholder="address">' +
            '<br>'+
            '<label for="Music">Music</label>' +
            '<input type="text id="music" placeholder="music">' +
            '<br>'+
           '<label for="door policy">door policy</label>' +
            '<input type="text id="doorPolicy" placeholder="door policy">' +
            '<br>'+
            '<label for="price">price</label>' +
            '<input type="text id="price" placeholder="price">' +
            '<br>'+
            '<label for="host">host</label>' +
            '<input type="text id="host" placeholder="host">' +
            '<br>'+
            '<label for="cellPhone">cellPhone</label>' +
            '<input type="text id="cellPhone" placeholder="cellPhone">' +
            '<br>'+
            '<label for="email">email</label>' +
            '<input type="text id="email" placeholder="email">' +
            '<br>'+
            '<input type="submit">' +
            '</form>';


        html += "</div>";
        $('body').html(html);

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
