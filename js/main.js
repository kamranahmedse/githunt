function FilterStorage() {

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
    }

    /**
     * Retrieves the values for the provided selector from localstorage
     * and populates the fields back
     * @param selector
     */
    var populateFilters = function (selector) {
        var storage = getStorage();

        $(selector).each(function(index, input){
            var $input = $(input),
                name = $input.attr('name'),
                value = storage.getItem(name);

            if (value) {
                $input.val(value);
            }
        });
    }

    return {
        /**
         * Persist the fields matching the provided selector to local storage
         * @param fields
         */
        persistFilters: function (selector) {
            persistFilters(selector);
        },

        /**
         * Populates the filters using the values stored in the localstorage
         * @param fieldNames
         */
        populateFilters: function (selector) {
            return populateFilters(selector);
        }
    }
}

function HubTab() {

    var trendingRequest = false,            // To make sure that there are no parallel requests
        repoGroupSelector = '.content-batch',      // Batch of repositories
        filterSelector = '.repos-filter',   // Selector that matches every repo filter on page
        mainContainer= '.main-content',     // Main container div
        dateHead = '.date-head',            // Heading item for the batch of repositories
        dateAttribute = 'date',             // Date attribute on the date head of batch
        token = '6d36200a868dab6bab6ad74123ae8d705f0f5691',     // API token to increase the rate limit
        languageFilter = '#language',       // Filter for repositories language
        dateFilter = '#date-jump',            // Date jump filter i.e. weekly, monthly or yearly
        reposApiUrl = 'https://api.github.com/search/repositories'; // URL for the repos

    var filterStorage = new FilterStorage();

    /**
     * Generates the HTML for batch of repositories
     * @param repositories
     * @param lowerDate
     * @param upperDate
     * @returns {string}
     */
    function generateReposHtml(repositories, lowerDate, upperDate) {
        var html = '';

        $(repositories).each(function (index, repository) {

            html += '<div class="content-item">' +
                '<div class="header"><a href="' + repository.html_url + '">' + repository.full_name + '</a></div>' +
                '<p class="tagline">' + repository.description + '</p>' +
                '<div class="footer">' +
                '<span class="footer-stat">' +
                '<i class="fa fa-code-fork"></i>' +
                repository.forks_count +
                '</span>' +
                '<span class="footer-stat">' +
                '<i class="fa fa-commenting-o"></i>' +
                repository.open_issues +
                '</span>' +
                '<span class="footer-stat">' +
                '<i class="fa fa-star-o"></i>' +
                repository.stargazers_count +
                '</span>' +
                '</div>' +
                '</div>';
        });

        var humanDate = moment(lowerDate).fromNow(),
            formattedLower = moment(lowerDate).format('ll'),
            formattedUpper = moment(upperDate).format('ll');
        var finalHtml = '<div class="content-batch"><h1 class="date-head" data-date="' + lowerDate + '">' + humanDate + ' - ' + formattedLower + ' &ndash; ' + formattedUpper + '</h1>' + html + '<div class="clearfix"></div></div></div>';
        return finalHtml;
    }

    /**
     * Gets the next date range for which repositories need to be fetched
     * @returns {{}}
     */
    var getNextDateRange = function () {

        // Lower limit for when the last repos batch was fetched
        var lastFetched = $(repoGroupSelector).last().find(dateHead).data(dateAttribute),
            dateRange = {},
            dateJump = $(dateFilter).val();

        if (lastFetched) {
            dateRange.upper = lastFetched;
            dateRange.lower = moment(lastFetched).subtract(1, dateJump).format('YYYY-MM-DD');
        } else {
            dateRange.upper = moment().format('YYYY-MM-DD');
            dateRange.lower = moment().subtract(1, dateJump).format('YYYY-MM-DD');
        }

        return dateRange;
    }

    /**
     * Gets the filters to be passed to API
     * @returns {{queryParams: string, dateRange: {}}}
     */
    var getApiFilters = function () {
        var dateRange = getNextDateRange(),
            language = $(languageFilter).val(),
            langCondition = '';

        // If language filter is applied, populate the language
        // chunk to put in URL
        if (language) {
            langCondition = 'language:' + language + ' ';
        }

        return {
            queryParams: '?sort=stars&order=desc&q=' + langCondition + 'created:"' + dateRange.lower + ' .. ' + dateRange.upper  + '"&access_token=' + token,
            dateRange: dateRange
        };
    }

    /**
     * Fetches the trending repositories based upon the filters applied
     * @returns {boolean}
     */
    var fetchTrendingRepos = function () {

        // If there is some request, already in progress
        if (trendingRequest !== false) {
            return false;
        }

        var filters = getApiFilters(),
            url = reposApiUrl + filters.queryParams;

        trendingRequest = $.ajax({
            url: url,
            method: 'get',
            beforeSend: function () {
                $('.loading-more').removeClass('hide');
            },
            success: function (data) {
                var finalHtml = generateReposHtml(data.items, filters.dateRange.lower, filters.dateRange.upper);
                $(mainContainer).append(finalHtml);
            },
            complete: function () {
                trendingRequest = false;
                $('.loading-more').addClass('hide');
            }
        });
    }

    /**
     * Perform all the UI bindings
     */
    var bindUI = function () {

        // Bind the scroll to fetch repositories when bottom reached
        $(window).on('scroll', function () {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                fetchTrendingRepos();
            }
        });

        // On change of repository filters
        $(document).on('change', filterSelector, function () {
            // Remove the existing fetches repositories
            $(repoGroupSelector).remove();
            // Persist the filters
            filterStorage.persistFilters(filterSelector);
            // Refresh the repositories
            fetchTrendingRepos();
        });
    };

    return {

        /**
         * initialize the hub page
         */
        init: function () {
            bindUI();
            this.refresh();
        },

        /**
         * Refresh the listing and filters
         */
        refresh: function () {
            filterStorage.populateFilters(filterSelector);
            fetchTrendingRepos();
        }
    };
}

$(function () {
    var hubTab = new HubTab();
    hubTab.init();
});
