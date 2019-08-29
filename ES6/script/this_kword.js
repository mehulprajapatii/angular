"use strict";
var employee = {
    id: 1,
    greet: function () {
        // var self = this;
        // setTimeout(function(){console.log(self.id)},1000);
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000); //refering to parent
        /**
         *
        */
    }
};
employee.greet();
//# sourceMappingURL=this_kword.js.map