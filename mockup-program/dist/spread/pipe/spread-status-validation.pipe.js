"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpreadStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const spread_status_enum_1 = require("../spread-status.enum");
class SpreadStatusValidationPipe {
    constructor() {
        this.StatusOptions = [
            spread_status_enum_1.SpreadStatus.PRIVATE,
            spread_status_enum_1.SpreadStatus.PUBLIC
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
exports.SpreadStatusValidationPipe = SpreadStatusValidationPipe;
//# sourceMappingURL=spread-status-validation.pipe.js.map