;(function (window, document, undefined) {

  'use strict';

  var main = (function () {

    var _toggleBoxShadowHeader = function () {
      window.addEventListener('scroll', function (event) {
        var presentation = document.getElementById('presentation');
        if (presentation.getBoundingClientRect().top < 0) {
          document.querySelector('header').setAttribute('data-box', 'true');
        } else {
          document.querySelector('header').setAttribute('data-box', 'false');
        }
      });
    };

    var _eventSubmit = function () {
      var form = document.querySelector('form');
      form.addEventListener('submit', function (e) {

        e.preventDefault();

        var urlAjax = this.action;

        var buttonSubmit = document.getElementById('submit');

        $.ajax({
          url: urlAjax,
          type: 'POST',
          data: $('form').serialize(),
          beforeSend: function () {
            buttonSubmit.innerHTML = _createLoader().outerHTML;
          },
          success: function( data ) {
            document.getElementById('result').setAttribute('data-show', 'true');
          },
          complete: function () {
            buttonSubmit.innerHTML = 'Inscrever-se';
            _clearMessage();
          }
        });
        
      }, false);
    };

    var _clearMessage = function () {
      setTimeout(function () {
        document.getElementById('result').setAttribute('data-show', 'false');
      }, 3000);
    };

    var _createLoader = function () {
      var div = document.createElement('div');
      div.className = 'loader';
      return div;
    };

    var _init = function () {
      _toggleBoxShadowHeader();
      _eventSubmit();
    };

    return {
      init: _init
    }

  })();

  main.init();

})(window, document);