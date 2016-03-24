var url = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=language:php created:">=2016-01-01"';
var template = '';

$(function () {
    //$.ajax({
    //    url: url,
    //    method: 'get',
    //    success: function (data) {
    //        var html = '';
    //
    //        var data = data.items;
    //
    //        $(data).each(function (index, repository) {
    //            html+= '<div class="product clickable">' +
    //                    '<div class="container">' +
    //                        '<h3><a href="' + repository.html_url + '">' + repository.full_name + '</a></h3>'+
    //                        '<p>' + repository.description + '</p>' +
    //                        '<p>' + repository.homepage + '</p>' +
    //                        '<p><strong>Forks </strong>' + repository.forks_count + '</p>' +
    //                        '<p><strong>Stars </strong>' + repository.stargazers_count + '</p>' +
    //                        '<p><strong>Watchers </strong>' + repository.watchers_count + '</p>' +
    //                        '<p><strong>Issues </strong>' + repository.open_issues + '</p>' +
    //                        '<p><strong>Created </strong>' + repository.created_at + '</p>' +
    //                        '<p><strong>Last Updated </strong>' + repository.updated_at + '</p>' +
    //                    '</div>' +
    //                '</div>';
    //        });
    //
    //        $('.product-items').html(html);
    //    }
    //});
});
