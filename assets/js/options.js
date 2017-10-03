/**
 * Options module to manage the options
 * @returns {{init: init}}
 * @constructor
 */
function HubOptions() {

    var hubStorage = new HubStorage();

    /**
     * Performs the UI bindings
     */
    function bindUI() {
        $(document).on('click', '.save-token', function (e) {
            e.preventDefault();

            var resultMessage = 'Woohoo! Token saved, happy hunting.';
            if ($('.githunt_token').val()) {
                hubStorage.persistFilters('.githunt_token');
            }
            else {
               resultMessage = 'Add API Token below.';
            }
             $('.quote-item').html(resultMessage);
        });
    }

    return {

        /**
         * Initializes the options page
         */
        init: function () {
            var tokenPopulated = hubStorage.populateFilters('.githunt_token');
            if (tokenPopulated) {
                $('.quote-item').html('Token already saved. Better go for the hunt!');
            }

            bindUI();
        }
    };
}

$(function () {
    var hubOptions = new HubOptions();
    hubOptions.init();
});
