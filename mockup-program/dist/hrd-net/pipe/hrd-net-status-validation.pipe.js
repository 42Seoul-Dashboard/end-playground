"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrdnetStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
from;
"../hrd-net-status.enum";
class HrdnetStatusValidationPipe {
    constructor() {
        this.StatusOptions = [
            HrdnetStatus.PRIVATE,
            HrdnetStatus.PUBLIC
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
exports.HrdnetStatusValidationPipe = HrdnetStatusValidationPipe;
//# sourceMappingURL=hrd-net-status-validation.pipe.js.map