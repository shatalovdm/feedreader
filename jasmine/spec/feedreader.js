/* feedreader.js
 *
*/

$(function() {
    describe('RSS Feeds', function() {
        /* Make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Ensure each feed in the allFeeds object has a URL defined
         * and that the URL is not empty.
         */
        it('urls are difined', function() {
            var feed;
            for (var i = 0; i < allFeeds.length; i++) {
                feed = allFeeds[i];
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* Ensure each feed in the allFeeds object has a name defined
         * and that the URL is not empty.
         */
         it('names are defined', function() {
            var feed;
            for (var i = 0; i < allFeeds.length; i++) {
                feed = allFeeds[i];
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });
    });

    describe('The menu', function() {
        /* Ensure the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* Ensure the menu changes
          * visibility when the menu icon is clicked. 
          */
          it('changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    describe('Initial Entries', function() {
        /* Ensure when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('have at least a single .entry element',function () {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function() {
        /* Ensure when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var header1;
        var header2;
        beforeEach(function (done) {
            loadFeed(0, function() {
                header1 = $('h2:first').text();
                done();
            });
        });
        beforeEach(function (done) {
             loadFeed(1, function() {
                header2 = $('h2:first').text();
                done();
            });
        });

        it('is different from the old one',function () {
            expect(header1).not.toBe(header2);
        });
    });
}());
