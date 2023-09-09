(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["jsx-dev-runtime"] = global["jsx-dev-runtime"] || {}, global["jsx-dev-runtime"].js = {})));
})(this, (function (exports) { 'use strict';

    const supportSymbol = typeof Symbol === 'function' && Symbol.for;
    const REACR_ELEMENT_TYPE = supportSymbol ? Symbol.for('react.element') : 0xeac7;

    // ReactElement
    const ReactElement = function (type, key, ref, props) {
        const element = {
            $$typeof: REACR_ELEMENT_TYPE,
            key,
            type,
            ref,
            props,
            __mark: 'Xing'
        };
        return element;
    };
    //JSX方法
    const jsx = function (type, config, ...maybeChildren) {
        const props = {};
        let ref = null;
        let key = null;
        for (const prop in config) {
            const val = config[prop];
            if (prop === 'key') {
                if (val !== undefined) {
                    key = '' + val;
                }
                continue;
            }
            if (prop === 'ref') {
                if (val !== undefined) {
                    ref = val;
                }
                continue;
            }
            if ({}.hasOwnProperty.call(config, prop)) {
                props[prop] = val;
            }
        }
        const maybeChildrenLength = maybeChildren.length;
        if (maybeChildrenLength) {
            if (maybeChildrenLength === 1) {
                props.children = maybeChildren[0];
            }
            else {
                props.children = maybeChildren;
            }
        }
        return ReactElement(type, key, ref, props);
    };
    //JSX方法
    const jsxDEV = function (type, config) {
        const props = {};
        let ref = null;
        let key = null;
        for (const prop in config) {
            const val = config[prop];
            if (prop === 'key') {
                if (val !== undefined) {
                    key = '' + val;
                }
                continue;
            }
            if (prop === 'ref') {
                if (val !== undefined) {
                    ref = val;
                }
                continue;
            }
            if ({}.hasOwnProperty.call(config, prop)) {
                props[prop] = val;
            }
        }
        return ReactElement(type, key, ref, props);
    };
    // export const jsxDEV=jsx

    exports.jsx = jsx;
    exports.jsxDEV = jsxDEV;

}));
