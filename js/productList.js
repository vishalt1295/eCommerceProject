/*var foo = 'foo'; // Variables declared outside of any function are considered global variables.
                 // These variables can be found on the window object.
*/
(function () {

    var mtDatabase = [
        {name: 'Huawei P20 Pro', price: '$478.88', img: 'img/android_image/huawei_p20_pro.jpg'},
        {name: 'LG G7 ThinQ', price: '$159.00', img: 'img/android_image/lg-g7-thinq-64gb-black.jpg'},
        {name: 'Sony Xperia XZ2', price: '$949.99', img: 'img/android_image/sony-xperia-xz2-compact-dual-h8324.jpg'},
        {name: 'Samsung Galaxy Note 9', price: '$339.00', img: 'img/android_image/samsung-galaxy-note-9-n960-6gb-128gb-dual-sim-purple.jpg'},
        {name: 'OnePlus 6T', price: '$235.00', img: 'img/android_image/oneplus-6t-a6013-256gb-8gb-ram-dual-sim-black.jpg'},
        {name: 'LG V30', price: '$249.00', img: 'img/android_image/lg-v30-h930-64gb-4g-pink.jpg'},
        //{name: '304', price: '$'},
        //{name: '729', price: '$'},
        //{name: '734', price: '$'},
    ];

    function renderList(results) {
        var productsList = document.querySelector('#addProducts');

        // clear out inner HTML to get rid of any older results
        productsList.innerHTML = '';
        // Map each database record to a string containing the HTML for it's row
        var tableRows = results.map(function (result, index) {
            /* return (
                '<tr>' +
                '<td>' + index + '</td>' +
                '<td>' + result.name + '</td>' +
                '<td>' + result.price + '</td>' +
                '<td>' + result.image + '</td>' +
                '</tr>'); */

            return '<div class="col-md-4 mt-4">' + '<div class="card">' + '<img src=' + result.img + ' class="card-img-top">' + '<div class="card-body">' +
                '<h5 class="card-title">' + result.name + '</h5>' + '<a href="#" class="btn btn-primary">' + result.price + '</a>' + '</div>' + '</div>' + '</div>';
        });
        // Set the contents of the table body to the new set of rendered HTML rows
        tableRows.forEach(function (row) {
            productsList.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
        });

        // Lower level scope once again overwrites what's above it.
        var foo = 'renderList';
        console.log(foo); // 'renderList'
    }

    renderList(mtDatabase);

    // Function to Order results list
    function orderBy(sortValue) {
        // Sort method varies based on what type of value we're sorting
        var sortedResults = (sortValue === 'name') ?
            mtDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                // Sorts alphabetically.  -1 puts it before. 1 puts it after
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            mtDatabase.sort(function (a, b) { // Numbers a booleans are much simpler.
                // Just need postive or negative number
                // Object properties can be accessed through a string representing their name
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }

    // Change events trigger after the value of a form input changes
    document.querySelector('#orderBy').addEventListener('change', function (event) {
        // Event is the JavaScript event that transpired, in our change a CHANGE event.
        // Target is the element it was performed on, useful for when the event targets
        // multiple elements.
        // Value has the name implies is the current value of the input element, if there is one
        orderBy(event.target.value);
    });

    // Function to filter out unpublished results
    function togglePublished(showPublished) {
        // If showPublished is TRUE, only display published results
        // Filter will only inclue objects that return TRUE from it's query
        var filteredResults = mockDatabase.filter(function (result) {
            // If showPublished is TRUE, always show.
            // Otherweise only show if published is TRUE
            return showPublished || result.published;
        });
        renderList(filteredResults);
    }

    // Change events trigger after the value of a form input changes
    document.querySelector('#published').addEventListener('change', function (event) {
        // in this case value is a string that we need to convert to a boolean
        var value = event.target.value === 'true';
        togglePublished(value);
    });

})();
