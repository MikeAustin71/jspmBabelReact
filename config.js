System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "lib/github/*",
    "npm:*": "lib/npm/*"
  },

  depCache: {
    "build/main.js": [
      "npm:react@0.14.3",
      "npm:react-dom@0.14.3"
    ],
    "npm:react-dom@0.14.3": [
      "npm:react-dom@0.14.3/index"
    ],
    "npm:react@0.14.3": [
      "npm:react@0.14.3/react"
    ],
    "npm:react-dom@0.14.3/index": [
      "npm:react@0.14.3/lib/ReactDOM"
    ],
    "npm:react@0.14.3/react": [
      "npm:react@0.14.3/lib/React"
    ],
    "npm:react@0.14.3/lib/ReactDOM": [
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/ReactDOMTextComponent",
      "npm:react@0.14.3/lib/ReactDefaultInjection",
      "npm:react@0.14.3/lib/ReactInstanceHandles",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:react@0.14.3/lib/ReactReconciler",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/ReactVersion",
      "npm:react@0.14.3/lib/findDOMNode",
      "npm:react@0.14.3/lib/renderSubtreeIntoContainer",
      "npm:fbjs@0.3.2/lib/warning",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/React": [
      "npm:react@0.14.3/lib/ReactDOM",
      "npm:react@0.14.3/lib/ReactDOMServer",
      "npm:react@0.14.3/lib/ReactIsomorphic",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:react@0.14.3/lib/deprecated"
    ],
    "npm:react@0.14.3/lib/ReactDOMTextComponent": [
      "npm:react@0.14.3/lib/DOMChildrenOperations",
      "npm:react@0.14.3/lib/DOMPropertyOperations",
      "npm:react@0.14.3/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:react@0.14.3/lib/escapeTextContentForBrowser",
      "npm:react@0.14.3/lib/setTextContent",
      "npm:react@0.14.3/lib/validateDOMNesting",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactDefaultInjection": [
      "npm:react@0.14.3/lib/BeforeInputEventPlugin",
      "npm:react@0.14.3/lib/ChangeEventPlugin",
      "npm:react@0.14.3/lib/ClientReactRootIndex",
      "npm:react@0.14.3/lib/DefaultEventPluginOrder",
      "npm:react@0.14.3/lib/EnterLeaveEventPlugin",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:react@0.14.3/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.3/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.3/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.3/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.3/lib/ReactDOMComponent",
      "npm:react@0.14.3/lib/ReactDOMTextComponent",
      "npm:react@0.14.3/lib/ReactEventListener",
      "npm:react@0.14.3/lib/ReactInjection",
      "npm:react@0.14.3/lib/ReactInstanceHandles",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactReconcileTransaction",
      "npm:react@0.14.3/lib/SelectEventPlugin",
      "npm:react@0.14.3/lib/ServerReactRootIndex",
      "npm:react@0.14.3/lib/SimpleEventPlugin",
      "npm:react@0.14.3/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.3/lib/ReactDefaultPerf",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactInstanceHandles": [
      "npm:react@0.14.3/lib/ReactRootIndex",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactMount": [
      "npm:react@0.14.3/lib/DOMProperty",
      "npm:react@0.14.3/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.3/lib/ReactInstanceHandles",
      "npm:react@0.14.3/lib/ReactInstanceMap",
      "npm:react@0.14.3/lib/ReactMarkupChecksum",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:react@0.14.3/lib/ReactReconciler",
      "npm:react@0.14.3/lib/ReactUpdateQueue",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/emptyObject",
      "npm:fbjs@0.3.2/lib/containsNode",
      "npm:react@0.14.3/lib/instantiateReactComponent",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:react@0.14.3/lib/setInnerHTML",
      "npm:react@0.14.3/lib/shouldUpdateReactComponent",
      "npm:react@0.14.3/lib/validateDOMNesting",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactPerf": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactReconciler": [
      "npm:react@0.14.3/lib/ReactRef"
    ],
    "github:jspm/nodelibs-process@0.1.2": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:react@0.14.3/lib/findDOMNode": [
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/ReactInstanceMap",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.3.2/lib/warning": [
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/renderSubtreeIntoContainer": [
      "npm:react@0.14.3/lib/ReactMount"
    ],
    "npm:react@0.14.3/lib/ReactUpdates": [
      "npm:react@0.14.3/lib/CallbackQueue",
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:react@0.14.3/lib/ReactReconciler",
      "npm:react@0.14.3/lib/Transaction",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/deprecated": [
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactIsomorphic": [
      "npm:react@0.14.3/lib/ReactChildren",
      "npm:react@0.14.3/lib/ReactComponent",
      "npm:react@0.14.3/lib/ReactClass",
      "npm:react@0.14.3/lib/ReactDOMFactories",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactElementValidator",
      "npm:react@0.14.3/lib/ReactPropTypes",
      "npm:react@0.14.3/lib/ReactVersion",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:react@0.14.3/lib/onlyChild",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactDOMServer": [
      "npm:react@0.14.3/lib/ReactDefaultInjection",
      "npm:react@0.14.3/lib/ReactServerRendering",
      "npm:react@0.14.3/lib/ReactVersion"
    ],
    "npm:react@0.14.3/lib/DOMChildrenOperations": [
      "npm:react@0.14.3/lib/Danger",
      "npm:react@0.14.3/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:react@0.14.3/lib/setInnerHTML",
      "npm:react@0.14.3/lib/setTextContent",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/setTextContent": [
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:react@0.14.3/lib/escapeTextContentForBrowser",
      "npm:react@0.14.3/lib/setInnerHTML"
    ],
    "npm:react@0.14.3/lib/DOMPropertyOperations": [
      "npm:react@0.14.3/lib/DOMProperty",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:react@0.14.3/lib/quoteAttributeValueForBrowser",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/validateDOMNesting": [
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/DefaultEventPluginOrder": [
      "npm:fbjs@0.3.2/lib/keyOf"
    ],
    "npm:react@0.14.3/lib/ReactComponentBrowserEnvironment": [
      "npm:react@0.14.3/lib/ReactDOMIDOperations",
      "npm:react@0.14.3/lib/ReactMount",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/HTMLDOMPropertyConfig": [
      "npm:react@0.14.3/lib/DOMProperty",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.3/lib/BeforeInputEventPlugin": [
      "npm:react@0.14.3/lib/EventConstants",
      "npm:react@0.14.3/lib/EventPropagators",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:react@0.14.3/lib/FallbackCompositionState",
      "npm:react@0.14.3/lib/SyntheticCompositionEvent",
      "npm:react@0.14.3/lib/SyntheticInputEvent",
      "npm:fbjs@0.3.2/lib/keyOf"
    ],
    "npm:react@0.14.3/lib/EnterLeaveEventPlugin": [
      "npm:react@0.14.3/lib/EventConstants",
      "npm:react@0.14.3/lib/EventPropagators",
      "npm:react@0.14.3/lib/SyntheticMouseEvent",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:fbjs@0.3.2/lib/keyOf"
    ],
    "npm:react@0.14.3/lib/ReactBrowserComponentMixin": [
      "npm:react@0.14.3/lib/ReactInstanceMap",
      "npm:react@0.14.3/lib/findDOMNode",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactDefaultBatchingStrategy": [
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/Transaction",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/emptyFunction"
    ],
    "npm:react@0.14.3/lib/ReactEventListener": [
      "npm:fbjs@0.3.2/lib/EventListener",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/ReactInstanceHandles",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:react@0.14.3/lib/getEventTarget",
      "npm:fbjs@0.3.2/lib/getUnboundedScrollPosition",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactInjection": [
      "npm:react@0.14.3/lib/DOMProperty",
      "npm:react@0.14.3/lib/EventPluginHub",
      "npm:react@0.14.3/lib/ReactComponentEnvironment",
      "npm:react@0.14.3/lib/ReactClass",
      "npm:react@0.14.3/lib/ReactEmptyComponent",
      "npm:react@0.14.3/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.3/lib/ReactNativeComponent",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:react@0.14.3/lib/ReactRootIndex",
      "npm:react@0.14.3/lib/ReactUpdates"
    ],
    "npm:react@0.14.3/lib/ReactReconcileTransaction": [
      "npm:react@0.14.3/lib/CallbackQueue",
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.3/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.3/lib/ReactInputSelection",
      "npm:react@0.14.3/lib/Transaction",
      "npm:react@0.14.3/lib/Object.assign"
    ],
    "npm:react@0.14.3/lib/ChangeEventPlugin": [
      "npm:react@0.14.3/lib/EventConstants",
      "npm:react@0.14.3/lib/EventPluginHub",
      "npm:react@0.14.3/lib/EventPropagators",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/SyntheticEvent",
      "npm:react@0.14.3/lib/getEventTarget",
      "npm:react@0.14.3/lib/isEventSupported",
      "npm:react@0.14.3/lib/isTextInputElement",
      "npm:fbjs@0.3.2/lib/keyOf",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/SimpleEventPlugin": [
      "npm:react@0.14.3/lib/EventConstants",
      "npm:fbjs@0.3.2/lib/EventListener",
      "npm:react@0.14.3/lib/EventPropagators",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/SyntheticClipboardEvent",
      "npm:react@0.14.3/lib/SyntheticEvent",
      "npm:react@0.14.3/lib/SyntheticFocusEvent",
      "npm:react@0.14.3/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.3/lib/SyntheticMouseEvent",
      "npm:react@0.14.3/lib/SyntheticDragEvent",
      "npm:react@0.14.3/lib/SyntheticTouchEvent",
      "npm:react@0.14.3/lib/SyntheticUIEvent",
      "npm:react@0.14.3/lib/SyntheticWheelEvent",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "npm:react@0.14.3/lib/getEventCharCode",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/keyOf",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactDefaultPerf": [
      "npm:react@0.14.3/lib/DOMProperty",
      "npm:react@0.14.3/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:fbjs@0.3.2/lib/performanceNow"
    ],
    "npm:react@0.14.3/lib/SelectEventPlugin": [
      "npm:react@0.14.3/lib/EventConstants",
      "npm:react@0.14.3/lib/EventPropagators",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:react@0.14.3/lib/ReactInputSelection",
      "npm:react@0.14.3/lib/SyntheticEvent",
      "npm:fbjs@0.3.2/lib/getActiveElement",
      "npm:react@0.14.3/lib/isTextInputElement",
      "npm:fbjs@0.3.2/lib/keyOf",
      "npm:fbjs@0.3.2/lib/shallowEqual"
    ],
    "npm:react@0.14.3/lib/SVGDOMPropertyConfig": [
      "npm:react@0.14.3/lib/DOMProperty"
    ],
    "npm:react@0.14.3/lib/ReactDOMComponent": [
      "npm:react@0.14.3/lib/AutoFocusUtils",
      "npm:react@0.14.3/lib/CSSPropertyOperations",
      "npm:react@0.14.3/lib/DOMProperty",
      "npm:react@0.14.3/lib/DOMPropertyOperations",
      "npm:react@0.14.3/lib/EventConstants",
      "npm:react@0.14.3/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.3/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.3/lib/ReactDOMButton",
      "npm:react@0.14.3/lib/ReactDOMInput",
      "npm:react@0.14.3/lib/ReactDOMOption",
      "npm:react@0.14.3/lib/ReactDOMSelect",
      "npm:react@0.14.3/lib/ReactDOMTextarea",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactMultiChild",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:react@0.14.3/lib/ReactUpdateQueue",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:react@0.14.3/lib/canDefineProperty",
      "npm:react@0.14.3/lib/escapeTextContentForBrowser",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:react@0.14.3/lib/isEventSupported",
      "npm:fbjs@0.3.2/lib/keyOf",
      "npm:react@0.14.3/lib/setInnerHTML",
      "npm:react@0.14.3/lib/setTextContent",
      "npm:fbjs@0.3.2/lib/shallowEqual",
      "npm:react@0.14.3/lib/validateDOMNesting",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.3.2/lib/invariant": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactBrowserEventEmitter": [
      "npm:react@0.14.3/lib/EventConstants",
      "npm:react@0.14.3/lib/EventPluginHub",
      "npm:react@0.14.3/lib/EventPluginRegistry",
      "npm:react@0.14.3/lib/ReactEventEmitterMixin",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:react@0.14.3/lib/ViewportMetrics",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:react@0.14.3/lib/isEventSupported",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/DOMProperty": [
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactUpdateQueue": [
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactInstanceMap",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactElement": [
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:react@0.14.3/lib/canDefineProperty",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.3.2/lib/emptyObject": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/setInnerHTML": [
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/instantiateReactComponent": [
      "npm:react@0.14.3/lib/ReactCompositeComponent",
      "npm:react@0.14.3/lib/ReactEmptyComponent",
      "npm:react@0.14.3/lib/ReactNativeComponent",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactMarkupChecksum": [
      "npm:react@0.14.3/lib/adler32"
    ],
    "npm:fbjs@0.3.2/lib/containsNode": [
      "npm:fbjs@0.3.2/lib/isTextNode"
    ],
    "npm:react@0.14.3/lib/ReactRef": [
      "npm:react@0.14.3/lib/ReactOwner",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "github:jspm/nodelibs-process@0.1.2/index": [
      "npm:process@0.11.2"
    ],
    "npm:react@0.14.3/lib/PooledClass": [
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/CallbackQueue": [
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/Transaction": [
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactChildren": [
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "npm:react@0.14.3/lib/traverseAllChildren"
    ],
    "npm:react@0.14.3/lib/onlyChild": [
      "npm:react@0.14.3/lib/ReactElement",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactComponent": [
      "npm:react@0.14.3/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.3/lib/canDefineProperty",
      "npm:fbjs@0.3.2/lib/emptyObject",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactClass": [
      "npm:react@0.14.3/lib/ReactComponent",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactPropTypeLocations",
      "npm:react@0.14.3/lib/ReactPropTypeLocationNames",
      "npm:react@0.14.3/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/emptyObject",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/keyMirror",
      "npm:fbjs@0.3.2/lib/keyOf",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactElementValidator": [
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactPropTypeLocations",
      "npm:react@0.14.3/lib/ReactPropTypeLocationNames",
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/canDefineProperty",
      "npm:react@0.14.3/lib/getIteratorFn",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactPropTypes": [
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "npm:react@0.14.3/lib/getIteratorFn"
    ],
    "npm:react@0.14.3/lib/ReactDOMFactories": [
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactElementValidator",
      "npm:fbjs@0.3.2/lib/mapObject",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactServerRendering": [
      "npm:react@0.14.3/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactInstanceHandles",
      "npm:react@0.14.3/lib/ReactMarkupChecksum",
      "npm:react@0.14.3/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.3/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:fbjs@0.3.2/lib/emptyObject",
      "npm:react@0.14.3/lib/instantiateReactComponent",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactMultiChildUpdateTypes": [
      "npm:fbjs@0.3.2/lib/keyMirror"
    ],
    "npm:react@0.14.3/lib/Danger": [
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:fbjs@0.3.2/lib/createNodesFromMarkup",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "npm:fbjs@0.3.2/lib/getMarkupWrap",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/quoteAttributeValueForBrowser": [
      "npm:react@0.14.3/lib/escapeTextContentForBrowser"
    ],
    "npm:react@0.14.3/lib/ReactDOMIDOperations": [
      "npm:react@0.14.3/lib/DOMChildrenOperations",
      "npm:react@0.14.3/lib/DOMPropertyOperations",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/EventConstants": [
      "npm:fbjs@0.3.2/lib/keyMirror"
    ],
    "npm:react@0.14.3/lib/FallbackCompositionState": [
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:react@0.14.3/lib/getTextContentAccessor"
    ],
    "npm:react@0.14.3/lib/EventPropagators": [
      "npm:react@0.14.3/lib/EventConstants",
      "npm:react@0.14.3/lib/EventPluginHub",
      "npm:fbjs@0.3.2/lib/warning",
      "npm:react@0.14.3/lib/accumulateInto",
      "npm:react@0.14.3/lib/forEachAccumulated",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/SyntheticCompositionEvent": [
      "npm:react@0.14.3/lib/SyntheticEvent"
    ],
    "npm:react@0.14.3/lib/SyntheticInputEvent": [
      "npm:react@0.14.3/lib/SyntheticEvent"
    ],
    "npm:react@0.14.3/lib/SyntheticMouseEvent": [
      "npm:react@0.14.3/lib/SyntheticUIEvent",
      "npm:react@0.14.3/lib/ViewportMetrics",
      "npm:react@0.14.3/lib/getEventModifierState"
    ],
    "npm:fbjs@0.3.2/lib/EventListener": [
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactEmptyComponent": [
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.3/lib/ReactReconciler",
      "npm:react@0.14.3/lib/Object.assign"
    ],
    "npm:react@0.14.3/lib/ReactNativeComponent": [
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactComponentEnvironment": [
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/EventPluginHub": [
      "npm:react@0.14.3/lib/EventPluginRegistry",
      "npm:react@0.14.3/lib/EventPluginUtils",
      "npm:react@0.14.3/lib/ReactErrorUtils",
      "npm:react@0.14.3/lib/accumulateInto",
      "npm:react@0.14.3/lib/forEachAccumulated",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactInputSelection": [
      "npm:react@0.14.3/lib/ReactDOMSelection",
      "npm:fbjs@0.3.2/lib/containsNode",
      "npm:fbjs@0.3.2/lib/focusNode",
      "npm:fbjs@0.3.2/lib/getActiveElement"
    ],
    "npm:react@0.14.3/lib/SyntheticEvent": [
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/isEventSupported": [
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.3/lib/SyntheticClipboardEvent": [
      "npm:react@0.14.3/lib/SyntheticEvent"
    ],
    "npm:react@0.14.3/lib/SyntheticDragEvent": [
      "npm:react@0.14.3/lib/SyntheticMouseEvent"
    ],
    "npm:react@0.14.3/lib/SyntheticTouchEvent": [
      "npm:react@0.14.3/lib/SyntheticUIEvent",
      "npm:react@0.14.3/lib/getEventModifierState"
    ],
    "npm:react@0.14.3/lib/SyntheticUIEvent": [
      "npm:react@0.14.3/lib/SyntheticEvent",
      "npm:react@0.14.3/lib/getEventTarget"
    ],
    "npm:react@0.14.3/lib/SyntheticKeyboardEvent": [
      "npm:react@0.14.3/lib/SyntheticUIEvent",
      "npm:react@0.14.3/lib/getEventCharCode",
      "npm:react@0.14.3/lib/getEventKey",
      "npm:react@0.14.3/lib/getEventModifierState"
    ],
    "npm:react@0.14.3/lib/SyntheticFocusEvent": [
      "npm:react@0.14.3/lib/SyntheticUIEvent"
    ],
    "npm:react@0.14.3/lib/SyntheticWheelEvent": [
      "npm:react@0.14.3/lib/SyntheticMouseEvent"
    ],
    "npm:react@0.14.3/lib/ReactDefaultPerfAnalysis": [
      "npm:react@0.14.3/lib/Object.assign"
    ],
    "npm:fbjs@0.3.2/lib/performanceNow": [
      "npm:fbjs@0.3.2/lib/performance"
    ],
    "npm:react@0.14.3/lib/CSSPropertyOperations": [
      "npm:react@0.14.3/lib/CSSProperty",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:fbjs@0.3.2/lib/camelizeStyleName",
      "npm:react@0.14.3/lib/dangerousStyleValue",
      "npm:fbjs@0.3.2/lib/hyphenateStyleName",
      "npm:fbjs@0.3.2/lib/memoizeStringOnly",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/AutoFocusUtils": [
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/findDOMNode",
      "npm:fbjs@0.3.2/lib/focusNode"
    ],
    "npm:react@0.14.3/lib/ReactDOMInput": [
      "npm:react@0.14.3/lib/ReactDOMIDOperations",
      "npm:react@0.14.3/lib/LinkedValueUtils",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactDOMOption": [
      "npm:react@0.14.3/lib/ReactChildren",
      "npm:react@0.14.3/lib/ReactDOMSelect",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactDOMTextarea": [
      "npm:react@0.14.3/lib/LinkedValueUtils",
      "npm:react@0.14.3/lib/ReactDOMIDOperations",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/canDefineProperty": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactDOMSelect": [
      "npm:react@0.14.3/lib/LinkedValueUtils",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactMultiChild": [
      "npm:react@0.14.3/lib/ReactComponentEnvironment",
      "npm:react@0.14.3/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/ReactReconciler",
      "npm:react@0.14.3/lib/ReactChildReconciler",
      "npm:react@0.14.3/lib/flattenChildren",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactEventEmitterMixin": [
      "npm:react@0.14.3/lib/EventPluginHub"
    ],
    "npm:react@0.14.3/lib/EventPluginRegistry": [
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.3.2/lib/isTextNode": [
      "npm:fbjs@0.3.2/lib/isNode"
    ],
    "npm:react@0.14.3/lib/ReactCompositeComponent": [
      "npm:react@0.14.3/lib/ReactComponentEnvironment",
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactInstanceMap",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:react@0.14.3/lib/ReactPropTypeLocations",
      "npm:react@0.14.3/lib/ReactPropTypeLocationNames",
      "npm:react@0.14.3/lib/ReactReconciler",
      "npm:react@0.14.3/lib/ReactUpdateQueue",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/emptyObject",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:react@0.14.3/lib/shouldUpdateReactComponent",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactOwner": [
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:process@0.11.2": [
      "npm:process@0.11.2/browser"
    ],
    "npm:react@0.14.3/lib/ReactPropTypeLocationNames": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/traverseAllChildren": [
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactInstanceHandles",
      "npm:react@0.14.3/lib/getIteratorFn",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactPropTypeLocations": [
      "npm:fbjs@0.3.2/lib/keyMirror"
    ],
    "npm:fbjs@0.3.2/lib/keyMirror": [
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactNoopUpdateQueue": [
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactServerRenderingTransaction": [
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/CallbackQueue",
      "npm:react@0.14.3/lib/Transaction",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:fbjs@0.3.2/lib/emptyFunction"
    ],
    "npm:fbjs@0.3.2/lib/createNodesFromMarkup": [
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:fbjs@0.3.2/lib/createArrayFromMixed",
      "npm:fbjs@0.3.2/lib/getMarkupWrap",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.3.2/lib/getMarkupWrap": [
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/getTextContentAccessor": [
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.3/lib/accumulateInto": [
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactErrorUtils": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/EventPluginUtils": [
      "npm:react@0.14.3/lib/EventConstants",
      "npm:react@0.14.3/lib/ReactErrorUtils",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/getEventKey": [
      "npm:react@0.14.3/lib/getEventCharCode"
    ],
    "npm:react@0.14.3/lib/dangerousStyleValue": [
      "npm:react@0.14.3/lib/CSSProperty"
    ],
    "npm:react@0.14.3/lib/ReactDOMSelection": [
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:react@0.14.3/lib/getNodeForCharacterOffset",
      "npm:react@0.14.3/lib/getTextContentAccessor"
    ],
    "npm:fbjs@0.3.2/lib/hyphenateStyleName": [
      "npm:fbjs@0.3.2/lib/hyphenate"
    ],
    "npm:fbjs@0.3.2/lib/performance": [
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment"
    ],
    "npm:fbjs@0.3.2/lib/camelizeStyleName": [
      "npm:fbjs@0.3.2/lib/camelize"
    ],
    "npm:react@0.14.3/lib/flattenChildren": [
      "npm:react@0.14.3/lib/traverseAllChildren",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/LinkedValueUtils": [
      "npm:react@0.14.3/lib/ReactPropTypes",
      "npm:react@0.14.3/lib/ReactPropTypeLocations",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.3/lib/ReactChildReconciler": [
      "npm:react@0.14.3/lib/ReactReconciler",
      "npm:react@0.14.3/lib/instantiateReactComponent",
      "npm:react@0.14.3/lib/shouldUpdateReactComponent",
      "npm:react@0.14.3/lib/traverseAllChildren",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.3.2/lib/createArrayFromMixed": [
      "npm:fbjs@0.3.2/lib/toArray"
    ],
    "npm:fbjs@0.3.2/lib/toArray": [
      "npm:fbjs@0.3.2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ]
  },

  map: {
    "babel": "npm:babel-core@6.2.1",
    "babel-cli": "npm:babel-cli@6.2.0",
    "babel-core": "npm:babel-core@6.2.1",
    "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.1.18",
    "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.2.0",
    "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.2.0",
    "babel-polyfill": "npm:babel-polyfill@6.1.19",
    "babel-preset-es2015": "npm:babel-preset-es2015@6.1.18",
    "babel-preset-react": "npm:babel-preset-react@6.1.18",
    "babel-preset-stage-0": "npm:babel-preset-stage-0@6.1.18",
    "babel-runtime": "npm:babel-runtime@6.2.0",
    "core-js": "npm:core-js@1.2.6",
    "jquery": "github:components/jquery@2.1.4",
    "lodash": "npm:lodash@3.10.1",
    "react": "npm:react@0.14.3",
    "react-dom": "npm:react-dom@0.14.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:abbrev@1.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:align-text@0.1.3": {
      "kind-of": "npm:kind-of@2.0.1",
      "longest": "npm:longest@1.0.1",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:alter@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "stable": "npm:stable@0.1.5"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ansi-green@0.1.1": {
      "ansi-wrap": "npm:ansi-wrap@0.1.0"
    },
    "npm:ansi@0.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:anymatch@1.3.0": {
      "arrify": "npm:arrify@1.0.0",
      "micromatch": "npm:micromatch@2.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:are-we-there-yet@1.0.4": {
      "delegates": "npm:delegates@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:arr-diff@1.1.0": {
      "arr-flatten": "npm:arr-flatten@1.0.1",
      "array-slice": "npm:array-slice@0.2.3"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-traverse@0.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:async@1.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-cli@6.2.0": {
      "babel-core": "npm:babel-core@6.2.1",
      "babel-polyfill": "npm:babel-polyfill@6.2.0",
      "babel-register": "npm:babel-register@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "bin-version-check": "npm:bin-version-check@2.1.0",
      "chalk": "npm:chalk@1.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "chokidar": "npm:chokidar@1.3.0",
      "commander": "npm:commander@2.9.0",
      "convert-source-map": "npm:convert-source-map@1.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-readdir-recursive": "npm:fs-readdir-recursive@0.1.2",
      "glob": "npm:glob@5.0.15",
      "lodash": "npm:lodash@3.10.1",
      "log-symbols": "npm:log-symbols@1.0.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "output-file-sync": "npm:output-file-sync@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "repl": "github:jspm/nodelibs-repl@0.1.0",
      "request": "npm:request@2.67.0",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.5.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "v8flags": "npm:v8flags@2.0.10",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:babel-code-frame@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "chalk": "npm:chalk@1.1.1",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@1.0.2",
      "line-numbers": "npm:line-numbers@0.2.0",
      "repeating": "npm:repeating@1.1.3"
    },
    "npm:babel-core@6.2.1": {
      "babel-code-frame": "npm:babel-code-frame@6.1.18",
      "babel-generator": "npm:babel-generator@6.2.0",
      "babel-helpers": "npm:babel-helpers@6.1.20",
      "babel-messages": "npm:babel-messages@6.2.1",
      "babel-register": "npm:babel-register@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0",
      "babylon": "npm:babylon@6.2.0",
      "convert-source-map": "npm:convert-source-map@1.1.2",
      "debug": "npm:debug@2.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json5": "npm:json5@0.4.0",
      "lodash": "npm:lodash@3.10.1",
      "minimatch": "npm:minimatch@2.0.10",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shebang-regex": "npm:shebang-regex@1.0.0",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.5.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-generator@6.2.0": {
      "babel-messages": "npm:babel-messages@6.2.1",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "detect-indent": "npm:detect-indent@3.0.1",
      "is-integer": "npm:is-integer@1.0.6",
      "lodash": "npm:lodash@3.10.1",
      "repeating": "npm:repeating@1.1.3",
      "source-map": "npm:source-map@0.5.3",
      "trim-right": "npm:trim-right@1.0.1"
    },
    "npm:babel-helper-bindify-decorators@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.1.18": {
      "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helper-builder-react-jsx@6.2.0": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-helper-call-delegate@6.2.0": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helper-define-map@6.2.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-helper-explode-assignable-expression@6.2.0": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helper-explode-class@6.1.18": {
      "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helper-function-name@6.2.0": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helper-get-function-arity@6.2.0": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helper-hoist-variables@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helper-optimise-call-expression@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helper-regex@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-helper-remap-async-to-generator@6.1.18": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helper-replace-supers@6.2.0": {
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.1.18",
      "babel-messages": "npm:babel-messages@6.2.1",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-helpers@6.1.20": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0"
    },
    "npm:babel-messages@6.2.1": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-check-es2015-constants@6.2.0": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-async-functions@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-class-constructor-call@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-class-properties@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-decorators@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-do-expressions@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-exponentiation-operator@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-export-extensions@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-flow@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-function-bind@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-jsx@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-object-rest-spread@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-syntax-trailing-function-commas@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-async-to-generator@6.1.18": {
      "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.1.18",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-class-constructor-call@6.1.18": {
      "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0"
    },
    "npm:babel-plugin-transform-class-properties@6.2.2": {
      "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-decorators@6.1.18": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.2.0",
      "babel-helper-explode-class": "npm:babel-helper-explode-class@6.1.18",
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-plugin-transform-do-expressions@6.1.18": {
      "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-plugin-transform-es2015-classes@6.2.2": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.2.0",
      "babel-helper-function-name": "npm:babel-helper-function-name@6.2.0",
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.1.18",
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.2.0",
      "babel-messages": "npm:babel-messages@6.2.1",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.1.18": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-for-of@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-function-name@6.1.18": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-literals@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-modules-amd@6.1.18": {
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.2.0": {
      "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0",
      "babel-types": "npm:babel-types@6.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-object-super@6.1.18": {
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-parameters@6.1.18": {
      "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.2.0",
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-template": "npm:babel-template@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-spread@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.1.18": {
      "babel-helper-regex": "npm:babel-helper-regex@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.1.18": {
      "babel-helper-regex": "npm:babel-helper-regex@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "regexpu": "npm:regexpu@1.3.0"
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.1.18": {
      "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.1.18",
      "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-export-extensions@6.1.18": {
      "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-flow-strip-types@6.1.18": {
      "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-function-bind@6.1.18": {
      "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-object-rest-spread@6.1.18": {
      "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-react-display-name@6.1.18": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-react-jsx-source@6.1.18": {
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-react-jsx@6.2.0": {
      "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.2.0",
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0"
    },
    "npm:babel-plugin-transform-regenerator@6.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "babel-core": "npm:babel-core@6.2.1",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.1.18",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.1.18",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.1.18",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0",
      "babylon": "npm:babylon@6.2.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-transform-strict-mode@6.2.0": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0"
    },
    "npm:babel-polyfill@6.1.19": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "core-js": "npm:core-js@1.2.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerator": "npm:regenerator@0.8.42"
    },
    "npm:babel-polyfill@6.2.0": {
      "babel-regenerator-runtime": "npm:babel-regenerator-runtime@6.2.0",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "core-js": "npm:core-js@1.2.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-preset-es2015@6.1.18": {
      "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.2.0",
      "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.1.18",
      "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.1.18",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.1.18",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.2.2",
      "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.1.18",
      "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.1.18",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.1.18",
      "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.1.18",
      "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.1.18",
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.2.0",
      "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.1.18",
      "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.1.18",
      "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.1.18",
      "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.1.18",
      "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.1.18",
      "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.1.18",
      "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.1.18",
      "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.1.18",
      "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.2.0"
    },
    "npm:babel-preset-react@6.1.18": {
      "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.1.18",
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.1.18",
      "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.1.18",
      "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.1.18",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.2.0",
      "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.1.18"
    },
    "npm:babel-preset-stage-0@6.1.18": {
      "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.1.18",
      "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.1.18",
      "babel-preset-stage-1": "npm:babel-preset-stage-1@6.1.18"
    },
    "npm:babel-preset-stage-1@6.1.18": {
      "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.1.18",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.2.2",
      "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.1.18",
      "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.1.18",
      "babel-preset-stage-2": "npm:babel-preset-stage-2@6.1.18"
    },
    "npm:babel-preset-stage-2@6.1.18": {
      "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.1.18",
      "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.1.18",
      "babel-preset-stage-3": "npm:babel-preset-stage-3@6.1.18"
    },
    "npm:babel-preset-stage-3@6.1.18": {
      "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.1.18",
      "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.1.18"
    },
    "npm:babel-regenerator-runtime@6.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-register@6.2.0": {
      "babel-core": "npm:babel-core@6.2.1",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "core-js": "npm:core-js@1.2.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "home-or-tmp": "npm:home-or-tmp@1.0.0",
      "lodash": "npm:lodash@3.10.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map-support": "npm:source-map-support@0.2.10"
    },
    "npm:babel-runtime@6.2.0": {
      "core-js": "npm:core-js@1.2.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-template@6.2.0": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "babel-types": "npm:babel-types@6.2.0",
      "babylon": "npm:babylon@6.2.0",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-traverse@6.2.0": {
      "babel-code-frame": "npm:babel-code-frame@6.1.18",
      "babel-messages": "npm:babel-messages@6.2.1",
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-types": "npm:babel-types@6.2.0",
      "babylon": "npm:babylon@6.2.0",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@8.12.1",
      "invariant": "npm:invariant@2.2.0",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3"
    },
    "npm:babel-types@6.2.0": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "babel-traverse": "npm:babel-traverse@6.2.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@3.10.1",
      "to-fast-properties": "npm:to-fast-properties@1.0.1"
    },
    "npm:babylon@6.2.0": {
      "babel-runtime": "npm:babel-runtime@6.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bin-version-check@2.1.0": {
      "bin-version": "npm:bin-version@1.0.4",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "semver": "npm:semver@4.3.6",
      "semver-truncate": "npm:semver-truncate@1.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bin-version@1.0.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "find-versions": "npm:find-versions@1.2.1"
    },
    "npm:binary-extensions@1.4.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bl@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@2.0.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:block-stream@0.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:brace-expansion@1.1.1": {
      "balanced-match": "npm:balanced-match@0.2.1",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@1.8.2": {
      "expand-range": "npm:expand-range@1.8.1",
      "lazy-cache": "npm:lazy-cache@0.2.4",
      "preserve": "npm:preserve@0.2.0",
      "repeat-element": "npm:repeat-element@1.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:builtin-modules@1.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:camelcase-keys@2.0.0": {
      "camelcase": "npm:camelcase@2.0.1",
      "map-obj": "npm:map-obj@1.0.1"
    },
    "npm:center-align@0.1.2": {
      "align-text": "npm:align-text@0.1.3",
      "lazy-cache": "npm:lazy-cache@0.2.4"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:chokidar@1.3.0": {
      "anymatch": "npm:anymatch@1.3.0",
      "async-each": "npm:async-each@0.1.6",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@1.0.5",
      "glob-parent": "npm:glob-parent@2.0.0",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readdirp": "npm:readdirp@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:cliui@2.1.0": {
      "center-align": "npm:center-align@0.1.2",
      "right-align": "npm:right-align@0.1.3",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.9.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.3.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "recast": "npm:recast@0.10.33",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convert-source-map@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:dashdash@1.10.1": {
      "assert-plus": "npm:assert-plus@0.1.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@0.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deep-extend@0.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:defs@1.1.1": {
      "alter": "npm:alter@0.2.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-traverse": "npm:ast-traverse@0.1.1",
      "breakable": "npm:breakable@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "simple-fmt": "npm:simple-fmt@0.1.0",
      "simple-is": "npm:simple-is@0.2.0",
      "stringmap": "npm:stringmap@0.2.2",
      "stringset": "npm:stringset@0.2.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tryor": "npm:tryor@0.1.2",
      "yargs": "npm:yargs@3.27.0"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detect-indent@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:detective@4.3.1": {
      "acorn": "npm:acorn@1.2.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:ecc-jsbn@0.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "github:rynomad/jsbn@master"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:error-ex@1.3.0": {
      "is-arrayish": "npm:is-arrayish@0.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@2.7.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:expand-range@1.8.1": {
      "fill-range": "npm:fill-range@2.2.2"
    },
    "npm:extglob@0.3.1": {
      "ansi-green": "npm:ansi-green@0.1.1",
      "is-extglob": "npm:is-extglob@1.0.0",
      "success-symbol": "npm:success-symbol@0.1.0"
    },
    "npm:extsprintf@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fbjs@0.3.2": {
      "core-js": "npm:core-js@1.2.6",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "ua-parser-js": "npm:ua-parser-js@0.7.9",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:fill-range@2.2.2": {
      "is-number": "npm:is-number@1.1.2",
      "isobject": "npm:isobject@1.0.2",
      "randomatic": "npm:randomatic@1.1.3",
      "repeat-element": "npm:repeat-element@1.1.2",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:find-up@1.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@2.1.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:find-versions@1.2.1": {
      "array-uniq": "npm:array-uniq@1.0.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "meow": "npm:meow@3.6.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "semver-regex": "npm:semver-regex@1.0.0"
    },
    "npm:for-own@0.1.3": {
      "for-in": "npm:for-in@0.1.4"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@1.0.0-rc3": {
      "async": "npm:async@1.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fs-readdir-recursive@0.1.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fsevents@1.0.5": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.1.0",
      "node-pre-gyp": "npm:node-pre-gyp@0.6.15",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fstream-ignore@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.8",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fstream@1.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "inherits": "npm:inherits@2.0.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.4.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gauge@1.2.2": {
      "ansi": "npm:ansi@0.3.0",
      "has-unicode": "npm:has-unicode@1.0.1",
      "lodash.pad": "npm:lodash.pad@3.1.1",
      "lodash.padleft": "npm:lodash.padleft@3.1.1",
      "lodash.padright": "npm:lodash.padright@3.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:glob-base@0.3.0": {
      "glob-parent": "npm:glob-parent@2.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globals@8.12.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:graceful-fs@4.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:har-validator@2.0.2": {
      "chalk": "npm:chalk@1.1.1",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.12.3",
      "pinkie-promise": "npm:pinkie-promise@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-unicode@1.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@3.1.2": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:home-or-tmp@1.0.0": {
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:hosted-git-info@2.1.4": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:http-signature@1.1.0": {
      "assert-plus": "npm:assert-plus@0.1.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.2.2",
      "sshpk": "npm:sshpk@1.7.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:indent-string@2.1.0": {
      "repeating": "npm:repeating@2.0.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-buffer@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:is-builtin-module@1.0.0": {
      "builtin-modules": "npm:builtin-modules@1.1.0"
    },
    "npm:is-equal-shallow@0.1.3": {
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-glob@2.0.1": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:is-integer@1.0.6": {
      "is-finite": "npm:is-finite@1.0.1"
    },
    "npm:is-my-json-valid@2.12.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-number@2.0.2": {
      "kind-of": "npm:kind-of@1.1.0"
    },
    "npm:is-utf8@0.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jodid25519@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:json5@0.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:jsonpointer@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jsprim@1.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "json-schema": "npm:json-schema@0.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.3.6"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:kind-of@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:kind-of@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-buffer": "npm:is-buffer@1.1.0"
    },
    "npm:lcid@1.0.0": {
      "invert-kv": "npm:invert-kv@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:line-numbers@0.2.0": {
      "left-pad": "npm:left-pad@0.0.3"
    },
    "npm:load-json-file@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "parse-json": "npm:parse-json@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-bom": "npm:strip-bom@2.0.0"
    },
    "npm:lodash._basetostring@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._createpadding@3.6.1": {
      "lodash.repeat": "npm:lodash.repeat@3.0.1"
    },
    "npm:lodash.pad@3.1.1": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._createpadding": "npm:lodash._createpadding@3.6.1"
    },
    "npm:lodash.padleft@3.1.1": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._createpadding": "npm:lodash._createpadding@3.6.1"
    },
    "npm:lodash.padright@3.1.1": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._createpadding": "npm:lodash._createpadding@3.6.1"
    },
    "npm:lodash.repeat@3.0.1": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:log-symbols@1.0.2": {
      "chalk": "npm:chalk@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:loud-rejection@1.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@2.1.2"
    },
    "npm:meow@3.6.0": {
      "camelcase-keys": "npm:camelcase-keys@2.0.0",
      "loud-rejection": "npm:loud-rejection@1.2.0",
      "minimist": "npm:minimist@1.2.0",
      "normalize-package-data": "npm:normalize-package-data@2.3.5",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "read-pkg-up": "npm:read-pkg-up@1.0.1",
      "redent": "npm:redent@1.0.0",
      "trim-newlines": "npm:trim-newlines@1.0.0"
    },
    "npm:micromatch@2.3.2": {
      "arr-diff": "npm:arr-diff@1.1.0",
      "array-unique": "npm:array-unique@0.2.1",
      "braces": "npm:braces@1.8.2",
      "expand-brackets": "npm:expand-brackets@0.1.4",
      "extglob": "npm:extglob@0.3.1",
      "filename-regex": "npm:filename-regex@2.0.0",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "kind-of": "npm:kind-of@2.0.1",
      "lazy-cache": "npm:lazy-cache@0.2.4",
      "normalize-path": "npm:normalize-path@2.0.1",
      "object.omit": "npm:object.omit@2.0.0",
      "parse-glob": "npm:parse-glob@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-cache": "npm:regex-cache@0.4.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.19.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.7": {
      "mime-db": "npm:mime-db@1.19.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:nan@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-pre-gyp@0.6.15": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nopt": "npm:nopt@3.0.6",
      "npmlog": "npm:npmlog@1.2.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.1.5",
      "request": "npm:request@2.67.0",
      "rimraf": "npm:rimraf@2.4.4",
      "semver": "npm:semver@5.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tar": "npm:tar@2.2.1",
      "tar-pack": "npm:tar-pack@3.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-uuid@1.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:nopt@3.0.6": {
      "abbrev": "npm:abbrev@1.0.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:normalize-package-data@2.3.5": {
      "hosted-git-info": "npm:hosted-git-info@2.1.4",
      "is-builtin-module": "npm:is-builtin-module@1.0.0",
      "semver": "npm:semver@5.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
    },
    "npm:npmlog@1.2.1": {
      "ansi": "npm:ansi@0.3.0",
      "are-we-there-yet": "npm:are-we-there-yet@1.0.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gauge": "npm:gauge@1.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oauth-sign@0.8.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:object.omit@2.0.0": {
      "for-own": "npm:for-own@0.1.3",
      "is-extendable": "npm:is-extendable@0.1.1"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-locale@1.4.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "lcid": "npm:lcid@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-tmpdir@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:output-file-sync@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.0.0",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-glob@3.0.4": {
      "glob-base": "npm:glob-base@0.3.0",
      "is-dotfile": "npm:is-dotfile@1.0.2",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1"
    },
    "npm:parse-json@2.2.0": {
      "error-ex": "npm:error-ex@1.3.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-exists@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-exists@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-type@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pify@2.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pinkie-promise@1.0.0": {
      "pinkie": "npm:pinkie@1.0.0"
    },
    "npm:pinkie-promise@2.0.0": {
      "pinkie": "npm:pinkie@2.0.1"
    },
    "npm:pinkie@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randomatic@1.1.3": {
      "is-number": "npm:is-number@2.0.2",
      "kind-of": "npm:kind-of@2.0.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rc@1.1.5": {
      "deep-extend": "npm:deep-extend@0.4.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.4",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@1.0.4"
    },
    "npm:react-dom@0.14.3": {
      "react": "npm:react@0.14.3"
    },
    "npm:react@0.14.3": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:read-pkg-up@1.0.1": {
      "find-up": "npm:find-up@1.1.0",
      "read-pkg": "npm:read-pkg@1.1.0"
    },
    "npm:read-pkg@1.1.0": {
      "load-json-file": "npm:load-json-file@1.1.0",
      "normalize-package-data": "npm:normalize-package-data@2.3.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-type": "npm:path-type@1.1.0"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.3",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readdirp@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "minimatch": "npm:minimatch@2.0.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.10.33": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.12",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:recast@0.10.39": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.12",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:redent@1.0.0": {
      "indent-string": "npm:indent-string@2.1.0",
      "strip-indent": "npm:strip-indent@1.0.1"
    },
    "npm:regenerator@0.8.42": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "commoner": "npm:commoner@0.10.4",
      "defs": "npm:defs@1.1.1",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "recast": "npm:recast@0.10.33",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:regex-cache@0.4.2": {
      "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:regexpu@1.3.0": {
      "esprima": "npm:esprima@2.7.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "recast": "npm:recast@0.10.39",
      "regenerate": "npm:regenerate@1.2.1",
      "regjsgen": "npm:regjsgen@0.2.0",
      "regjsparser": "npm:regjsparser@0.1.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:regjsparser@0.1.5": {
      "jsesc": "npm:jsesc@0.5.0"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:repeating@2.0.0": {
      "is-finite": "npm:is-finite@1.0.1"
    },
    "npm:request@2.67.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "bl": "npm:bl@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.0",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@1.0.0-rc3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.2",
      "hawk": "npm:hawk@3.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.7",
      "node-uuid": "npm:node-uuid@1.4.7",
      "oauth-sign": "npm:oauth-sign@0.8.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@5.2.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.2.1",
      "tunnel-agent": "npm:tunnel-agent@0.4.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:right-align@0.1.3": {
      "align-text": "npm:align-text@0.1.3"
    },
    "npm:rimraf@2.2.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rimraf@2.4.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver-truncate@1.1.0": {
      "semver": "npm:semver@5.0.3"
    },
    "npm:semver@4.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@5.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:signal-exit@2.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-support@0.2.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.1.32"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.32": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:spdx-correct@1.0.2": {
      "spdx-license-ids": "npm:spdx-license-ids@1.1.0"
    },
    "npm:spdx-expression-parse@1.0.1": {
      "spdx-exceptions": "npm:spdx-exceptions@1.0.4",
      "spdx-license-ids": "npm:spdx-license-ids@1.1.0"
    },
    "npm:spdx-license-ids@1.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:sshpk@1.7.0": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.10.1",
      "ecc-jsbn": "npm:ecc-jsbn@0.0.1",
      "jodid25519": "npm:jodid25519@1.0.2",
      "jsbn": "npm:jsbn@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.13.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:strip-bom@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-utf8": "npm:is-utf8@0.2.0"
    },
    "npm:strip-indent@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:strip-json-comments@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:success-symbol@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:tar-pack@3.1.0": {
      "debug": "npm:debug@0.7.4",
      "fstream": "npm:fstream@1.0.8",
      "fstream-ignore": "npm:fstream-ignore@1.0.3",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "once": "npm:once@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.33",
      "rimraf": "npm:rimraf@2.2.8",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tar": "npm:tar@2.2.1",
      "uid-number": "npm:uid-number@0.0.3",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:tar@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "block-stream": "npm:block-stream@0.0.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.8",
      "inherits": "npm:inherits@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:tough-cookie@2.2.1": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ua-parser-js@0.7.9": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:uid-number@0.0.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:v8flags@2.0.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:validate-npm-package-license@3.0.1": {
      "spdx-correct": "npm:spdx-correct@1.0.2",
      "spdx-expression-parse": "npm:spdx-expression-parse@1.0.1"
    },
    "npm:verror@1.3.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:window-size@0.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:y18n@3.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs@3.27.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@2.1.0",
      "decamelize": "npm:decamelize@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os-locale": "npm:os-locale@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.2",
      "y18n": "npm:y18n@3.2.0"
    }
  }
});
