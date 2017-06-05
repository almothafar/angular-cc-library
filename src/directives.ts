import {NgModule} from "@angular/core";

import {CreditCardFormatDirective} from "./directives/credit-card-format.directive";
import {ExpiryFormatDirective} from "./directives/expiry-format.directive";
import {CvcFormatDirective} from "./directives/cvc-format.directive";

@NgModule({
    declarations: [CreditCardFormatDirective,
        ExpiryFormatDirective,
        CvcFormatDirective],
    exports: [CreditCardFormatDirective,
        ExpiryFormatDirective,
        CvcFormatDirective]
})
export class CreditCardDirectivesModule {
}
