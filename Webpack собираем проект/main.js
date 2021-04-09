function myModule(){
    this.hello = function (){
        console.log('hello');
    };

    this.goodbue = function(){
        console.log('bye!')
    };
}

module.exports = myModule;