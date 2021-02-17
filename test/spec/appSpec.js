// describe("createBoard", function(){

//     let test = createBoard();
//     spyOn(test, 'document.createElement')

//     it("create's a board of squares with dimensions being 10 x 10", function(){
//         expect(document.createElement()).toHaveBeenCalled()
//     });

// })

describe("rotate", function(){

    var event = {
        type: 'click',
        rotate: function(){}
    }

    // var spy = spyOn(event, 'rotate')

    it("checks to see if the rotate button was called", function(){
        var spy = spyOn(event, 'rotate')
        j$('#rotate').trigger(event)
        expect(spy).toHaveBeenCalled()
    })
    
})