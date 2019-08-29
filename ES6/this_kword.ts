var employee = {
    id:1,
    greet:function(){
        // var self = this;
        // setTimeout(function(){console.log(self.id)},1000);

        setTimeout(() => {console.log(this.id)},1000);//refering to parent
        /** 
         * 
        */
    }
}

employee.greet();