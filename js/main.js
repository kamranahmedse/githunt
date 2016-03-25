var GH_DATE_JUMP = 'date_jump',
    GH_LANGUAGE = 'gh_language';

function renderRepositories(repositories, lowerDate, upperDate) {
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

var trendingRequest = false;
function fetchTrendingRepos() {

    if (trendingRequest !== false) {
        return false;
    }

    var lastFetched = $('.content-batch').last().find('.date-head').data('date');
    var lowerDate = '',
        upperDate = '';

    if (lastFetched) {
        upperDate = lastFetched;
        lowerDate = moment(lastFetched).subtract(1, $('#date-jump').val()).format('YYYY-MM-DD');
    } else {
        upperDate = moment().format('YYYY-MM-DD');
        lowerDate = moment().subtract(1, $('#date-jump').val()).format('YYYY-MM-DD');
    }

    var token = '6d36200a868dab6bab6ad74123ae8d705f0f5691';
    var language = $('#language').val();
    var langCondition = '';

    if (language) {
        langCondition = 'language:' + language + ' ';
    }

    var url = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=' + langCondition + 'created:"' + lowerDate + ' .. ' + upperDate + '"&access_token=' + token;

    trendingRequest = $.ajax({
        url: url,
        method: 'get',
        beforeSend: function () {
            $('.loading-more').removeClass('hide');
        },
        success: function (data) {
            var html = '';

            var data = data.items;
            var finalHtml = renderRepositories(data, lowerDate, upperDate);

            $('.main-content').append(finalHtml);
        },
        complete: function () {
            trendingRequest = false;
            $('.loading-more').addClass('hide');
        }
    });
}

function persistFilters() {

    if (!localStorage) {
        return false;
    }

    localStorage.setItem(GH_DATE_JUMP, $('#date-jump').val());
    localStorage.setItem(GH_LANGUAGE, $('#language').val());
}

function applyFilters() {
    var dateJump = localStorage.getItem(GH_DATE_JUMP),
        language = localStorage.getItem(GH_LANGUAGE);

    if (dateJump) {
        $('#date-jump').val(dateJump);
    }

    if (language) {
        $('#language').val(language);
    }
}

$(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            fetchTrendingRepos();
        }
    });

    $(document).on('change', '.repos-filter', function () {
        $('.content-batch').remove();
        persistFilters();
        fetchTrendingRepos();
    });

    fetchTrendingRepos();
    applyFilters();
});
