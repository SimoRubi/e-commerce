odoo.define('website_sale_partner_address_autocomplete.website_sale_partner_address_autocomplete', function (require) {
    "use strict";

    require('website_sale.website_sale');
    var ajax = require('web.ajax');
    var base = require('web_editor.base');

    if(!$('.oe_website_sale').length) {
        return $.Deferred().reject("DOM doesn't contain '.oe_website_sale'");
    }

    $('.oe_website_sale').each(function () {
        var oe_website_sale = this;

        // Dynamically show/hide birth state selection
        $(oe_website_sale).on('change', 'select.js_birth_country_change', function (ev) {
            var birth_country_id = $(ev.target).val();
            $(".div_birth_state").css("display", "none");
            // Keep the birth_state div hidden if no birth_country is selected
            if (!birth_country_id) {
                return false;
            }
            var birth_state_select = $("[name = 'birth_state_id']");
            var domain = "[('country_id', '=', " + country_id + ")]"

            // Call the backend in order to retrieve the states of selected countries
            ajax.jsonRpc("/web/dataset/search_read", 'call', {
                    model: 'res.country.state',
                    fields: ['name'],
                    domain: [['country_id', '=', parseInt(birth_country_id)]]
                })
            .then(function(res) {
                if (res.length == 0) {
                    return false;
                }
                // If there is some state to choose, populate the selection and show the div_birth_state
                var states = res.records;
                birth_state_select.find('option').remove();
                var state_options = '';
                $.each(states, function(id, state){
                    state_options += '<option value=' + state.id + '>' + state.name + '</option>';
                });
                birth_state_select.append(state_options);
                $(".div_birth_state").css("display", "");
            });
        });
    });
});
