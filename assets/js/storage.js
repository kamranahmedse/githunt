/**
 * Hub Storage to assist in storing the filter to localStorage
 * and retrieving to populate back
 *
 * @returns {{persistFilters: persistFilters, populateFilters: populateFilters}}
 * @constructor
 */
function HubStorage() {

    /**
     * Returns the storage object if available, otherwise
     * a polyfill
     * @returns {*}
     */
    var getStorage = function () {
        if (window.localStorage) {
            return window.localStorage;
        }

        return {
            setItem: function () {},
            getItem: function () {}
        }
    };

    /**
     * Persists the values of the provided input input selector
     * @param selector`
     */
    var persistFilters = function (selector) {
        var storage = getStorage();

        $(selector).each(function(index, input){
            var $input = $(input),
                name = $input.attr('name');

            storage.setItem(name, $input.val());
        });
    };

    /**
     * Retrieves the values for the provided selector from localstorage
     * and populates the fields back
     * @param selector
     */
    var populateFilters = function (selector) {
        var storage = getStorage(),
            anyPopulated = false;

        $(selector).each(function(index, input){
            var $input = $(input),
                name = $input.attr('name'),
                value = storage.getItem(name);

            if (value) {
                $input.val(value);
                anyPopulated = true;
            }
        });

        return anyPopulated;
    };

    return {
        /**
         * Persist the fields matching the provided selector to local storage
         * @param selector
         */
        persistFilters: function (selector) {
            persistFilters(selector);
        },

        /**
         * Populates the filters using the values stored in the localstorage
         * @param selector
         */
        populateFilters: function (selector) {
            return populateFilters(selector);
        },

        /**
         * Returns the localStorageObject
         * @returns {{setItem, getItem}}
         */
        getStorage: function () {
            return getStorage();
        }
    };
}
