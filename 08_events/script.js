
// // const waterBridge = document.getElementById('water')

// // waterBridge.onclick = function(){
// //     alert("Bridge click")
// // }

// // attachEvent()


// document.getElementById('water').addEventListener('click', function (e) {
//     console.log(e)
//     e.stopPropagation() // this will stop the propogation of bubbling

// }, false)

// // Event propogation 
// // bydefault false hota hai usske EVENT BUBBLING bolte hai (work on bottom top )
// // true ke time usse EVENT CAPTURING bolte hai ( work on top bottom )

// // types
// // timestamp
// // preventDefault
// // target
// // toElement
// // srcElement
// // currentTarget
// // clientX , clientY , screenX , screenY
// // altKey , ctrlkey ,shift , keyCode


// // example of defaultPrevent with bubbling ON
// document.getElementById('lips').addEventListener('click', function (e) {

//     console.log("Lips clicked")
//     e.preventDefault()
//     e.stopPropagation()

// }, false)


// document.getElementById('slider').addEventListener('click', function (e) {

//     console.log("Div clicked")
//     e.stopPropagation()

// }, false)



// Task --> all image should be gone after click on them 
const img = document.getElementById('slider')

img.addEventListener('click' , function(e){
    console.log(e.target.parentNode)
    // img.style.display='none'
    let removeit = e.target.parentNode;
    removeit.remove()
})