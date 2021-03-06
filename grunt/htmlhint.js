(function() {
    'use strict';

    module.exports = {
        build: {
            options: {
                'tag-pair': true,
                'tagname-lowercase': true,
                'attr-lowercase': true,
                'attr-value-double-quotes': true,
                'doctype-first': true,
                'spec-char-escape': true,
                'id-unique': true,
                'style-disabled': true
            },
            src: 'src/index.html'
        }
    };
})();