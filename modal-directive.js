/*!
 * Bedrock Modal.
 *
 * Copyright (c) 2012-2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([], function() {

'use strict';

/* @ngInject */
function factory() {
  return {
    restrict: 'C',
    transclude: true,
    template: '\
      <div br-lazy-compile="br-modal" br-compile-trigger="!stackable || stackable.isOpen"> \
        <div br-alerts br-fixed="true"></div> \
        <div ng-transclude></div> \
      </div>'
  };
}

// replaces bootstrap "modal" class -- intentionally no "br-" prefix
return {modal: factory};

});
