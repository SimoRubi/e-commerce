# -*- coding: utf-8 -*-
# Copyright 2018 Simone Rubino - Agile Business Group
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).
{
    "name": "Website sale partner address autocomplete",
    "summary": "Autocomplete partner address during checkout",
    "version": "10.0.1.0.0",
    "category": "e-commerce",
    "website": "https://github.com/OCA/e-commerce/tree/10.0/"
               "website_sale_partner_address_autocomplete",
    "author": "Agile Business Group, Odoo Community Association (OCA)",
    "license": "AGPL-3",
    "application": False,
    "installable": True,
    "depends": [
        "base_location",
    ],
    "data": [
        "views/templates.xml"
    ]
}
