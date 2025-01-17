"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getData = (url, param) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetch(url, param)
        .then((data) => data.json())
        .then((data) => console.log(data))
        .catch((err) => err.message);
});
getData("https://petstore3.swagger.io/api/v3/store/order/10", {
    method: "GET",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
});
