/**
 * @file
 * Simple helpers for the ${name} theme.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Core/Misc behaviours.
   */
  Drupal.behaviors.pvrMisc = {
    attach: function (context, settings) {

    }
  };

  Drupal.behaviors.showLang = {
    attach: function (context, settings) {
      $('.block-language option').each(function () {
        if ($(this).hasClass('is-active')) {
          $(this).prop("selected", true);
        }
      });
    }
  };

  Drupal.behaviors.fondyAmount = {
    attach: function (context, settings) {
      $('#amount_user').change(function() {
        $('#amount').val($(this).val() * 100);
        console.log($(this).val() * 100);
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
