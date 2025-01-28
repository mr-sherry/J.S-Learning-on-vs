function ifstate(value) {
    if (value>0) {
        let parent=10*value;

        if (parent>0) {
            let child=3*parent;
            console.log(parent);
            console.log(child);
        }
    }
    else{
        console.log("value must be greater then 0");
        
    }
    
}
ifstate(1)


function parent() {
    let value1= 1122;

    function child() {
        let value2= 2233;
        console.log(value3);
    }
    function child2() {
        let value3=7788;
        console.log(value2);        
    }

    // child();
    // child2();
}
// parent();

