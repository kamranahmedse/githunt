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

            hubStorage.persistFilters('.options');
            setBgColor();
            $('.quote-item').html('Woohoo! Token saved, happy hunting.');
        });
    }

    function setBgColor() {
        var bgColor = hubStorage.getStorage().getItem('background-color');
        $('body').css('background-color', bgColor);
    }

    return {

        /**
         * Initializes the options page
         */
        init: function () {
            var tokenPopulated = hubStorage.populateFilters('.options');
            setBgColor();
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
