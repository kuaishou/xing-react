(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.index = global.index || {}, global.index.js = factory()));
})(this, (function () { 'use strict';

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

    // React
    var index = {
        version: '0.0.0',
        createElement: jsxDEV
    };

    return index;

}));
