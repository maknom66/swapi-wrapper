"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapiClient = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var client = _axios["default"].create({
  baseURL: _constants.swapiBaseUrl
});

var buildUrl = function buildUrl(resource, params) {
  var url = resource;

  if (params !== null && params !== void 0 && params.id) {
    return "".concat(url, "/").concat(params === null || params === void 0 ? void 0 : params.id);
  }

  return "".concat(url, "/?search=").concat((params === null || params === void 0 ? void 0 : params.search) || "", "&page=").concat((params === null || params === void 0 ? void 0 : params.page) || "");
};

var swapiClient = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resource, params) {
    var url, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = buildUrl(resource, params);
            _context.next = 3;
            return client.get(url);

          case 3:
            res = _context.sent;
            return _context.abrupt("return", res === null || res === void 0 ? void 0 : res.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swapiClient(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.swapiClient = swapiClient;