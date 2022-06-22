"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api42StatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const api42_status_enum_1 = require("../api42-status.enum");
class Api42StatusValidationPipe {
    constructor() {
        this.StatusOptions = [
            api42_status_enum_1.Api42Status.PRIVATE,
            api42_status_enum_1.Api42Status.PUBLIC
        ];
    }
    transform(value, metadata) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} isn't in the status options`);
        }
        return value;
    }
    isStatusValid(status) {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}
exports.Api42StatusValidationPipe = Api42StatusValidationPipe;
//# sourceMappingURL=api42-status-validation.pipe.js.map