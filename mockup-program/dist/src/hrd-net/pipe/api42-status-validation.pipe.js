"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api42StatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const hrd_net_status_enum_1 = require("../hrd-net-status.enum");
class Api42StatusValidationPipe {
    constructor() {
        this.StatusOptions = [
            hrd_net_status_enum_1.Api42Status.PRIVATE,
            hrd_net_status_enum_1.Api42Status.PUBLIC
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