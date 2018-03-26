;(function ($, window, document, undefined) {
'use strict';

window = (typeof window != 'undefined' && window.Math == Math)
  ? window
  : (typeof self != 'undefined' && self.Math == Math)
    ? self
    : Function('return this')();
    

$.fn.dropdown = function (parameters) {
    var $allModules = $(this),
    $document = $(document);

    var time = new Date().getTime();
    var performance = [];

    $allModules
    .each(function(elementIndex) {

        var settings = ( $.isPlainObject(parameters) )
          ? $.extend(true, {}, $.fn.dropdown.settings, parameters)
          : $.extend({}, $.fn.dropdown.settings);

        var namespace = settings.namespace,
        eventNamespace = '.' + namespace,
        moduleNamespace = 'module-' + namespace;

        var selector = settings.selector;
        var $module = $(this);
        
        var $text = $module.children(selector.text);
        var $menu = $module.children(selector.menu);
        var $items = $menu.children(selector.item);

        var element = this;

        var elementNamespace,
        id;

        $text.val(222);

        $items.each(function () {
            $(this).on('click touch', function () {
                $text.val($(this).text());
            });
            //console.log($(this).text());
        });

        var instance = $module.data(moduleNamespace);
        console.log('instance', instance);


        var module = {
            initialize: function () {
                module.debug('initializing dropdown', settings);
                module.instantiate();
            },
            instantiate: function() {
                module.debug('Storing instance of dropdown', module);
                instance = module;
                $module.data(moduleNamespace, module);
            },
            destroy: function () {
                //module.debug('Destroying previous dropdown', $module);
                $module
                    .off(eventNamespace)
                    .removeData(moduleNamespace);

                $menu.off(eventNamespace);
                $document.off(elementNamespace);
            },
            create: {
                id: function() {
                    id = (Math.random().toString(16) + '000000000').substr(2, 8);
                    elementNamespace = '.' + id;
                    module.debug('Creating unique id for element', id);
                }
            },
            debug: function() {
                if(!settings.silent && settings.debug) {
                    if(settings.performance) {
                        module.performance.log(arguments);
                    }
                    else {
                    module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
                    module.debug.apply(console, arguments);
                    }
                }
            },
            performance: {
                log: function(message) {
                  var
                    currentTime,
                    executionTime,
                    previousTime
                  ;
                  if(settings.performance) {
                    currentTime   = new Date().getTime();
                    previousTime  = time || currentTime;
                    executionTime = currentTime - previousTime;
                    time          = currentTime;
                    performance.push({
                      'Name'           : message[0],
                      'Arguments'      : [].slice.call(message, 1) || '',
                      'Element'        : element,
                      'Execution Time' : executionTime
                    });
                  }
                  clearTimeout(module.performance.timer);
                  module.performance.timer = setTimeout(module.performance.display, 500);
                },
                display: function() {
                  var
                    title = settings.name + ':',
                    totalTime = 0
                  ;
                  time = false;
                  clearTimeout(module.performance.timer);
                  $.each(performance, function(index, data) {
                    totalTime += data['Execution Time'];
                  });
                  title += ' ' + totalTime + 'ms';
                  if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
                    console.groupCollapsed(title);
                    if(console.table) {
                      console.table(performance);
                    }
                    else {
                      $.each(performance, function(index, data) {
                        console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                      });
                    }
                    console.groupEnd();
                  }
                  performance = [];
                }
              }
        }
        // initialize
        if (instance !== undefined) {
            // todo
            //instance.destroy();
        }
        module.initialize();
    });

    return $allModules;
};

$.fn.dropdown.settings = {
    name: 'Dropdown',
    silent: false,
    debug: true,
    performance: true,
    namespace: 'dropdown',
    keys: {
        backspace: 8,
        delimiter: 188, // comma
        deleteKey: 46,
        enter: 13,
        escape: 27,
        pageUp: 33,
        pageDown: 34,
        leftArrow: 37,
        upArrow: 38,
        rightArrow: 39,
        downArrow: 40
    },
    selector: {
        'text': '.dropdown__text',
        'menu': '.dropdown__menu',
        'item': '.dropdown__item'
    }
}

})(jQuery, window, document);