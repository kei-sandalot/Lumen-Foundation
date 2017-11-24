import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';

import scrollto from 'jquery.scrollto';



$(document).ready(function(){
  $(this).foundation();

  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else{
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });
  $('#link-to-last').click(function() {
    $.scrollTo('#last', 800);
  });
  $('#link-to-top').click(function() {
    $.scrollTo(30, 800);
  });
});
