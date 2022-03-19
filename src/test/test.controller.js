"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TestController = void 0;
var common_1 = require("@nestjs/common");
var TestController = /** @class */ (function () {
    function TestController(testService) {
        this.testService = testService;
    }
    TestController.prototype.create = function (createTestDto) {
        return this.testService.create(createTestDto);
    };
    TestController.prototype.findAll = function () {
        return this.testService.findAll();
    };
    TestController.prototype.findOne = function (id) {
        return this.testService.findOne(+id);
    };
    TestController.prototype.update = function (id, updateTestDto) {
        return this.testService.update(+id, updateTestDto);
    };
    TestController.prototype.remove = function (id) {
        return this.testService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], TestController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], TestController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TestController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], TestController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TestController.prototype, "remove");
    TestController = __decorate([
        (0, common_1.Controller)('test')
    ], TestController);
    return TestController;
}());
exports.TestController = TestController;
