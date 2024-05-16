const image = document.getElementById('productImg');
const btn = document.getElementsByClassName( 'btn' );

btn[0].addEventListener( 'click', function(){
    image.src = '../assets/noise ash.webp';
    for(bt of btn){
        bt.classList.remove( 'active' );
        
    }
    this.classList.add( 'active' )
});
btn[1].addEventListener( 'click', function(){
    image.src = '../assets/noise white.png.jpg';
    for(bt of btn){
        bt.classList.remove( 'active' );
        
    }
    this.classList.add( 'active' )
})
btn[2].addEventListener( 'click', function(){
    image.src = '../assets/noise-colorfit-pulse dblue.png.jpg';
    for(bt of btn){
        bt.classList.remove( 'active' );
        
    }
    this.classList.add( 'active' )
})

const image1 = document.getElementById('productImg1');
const btn1 = document.getElementsByClassName( 'btn1' );

btn1[0].addEventListener( 'click', function(){
    image1.src = '../assets/boat u black.jpeg';
    for(bt1 of btn1){
        bt1.classList.remove( 'active' );
        
    }
    this.classList.add( 'active' )
});
btn1[1].addEventListener( 'click', function(){
    image1.src = '../assets/u boat bronz.jpeg';
    for(bt1 of btn1){
        bt1.classList.remove( 'active' );
        
    }
    this.classList.add( 'active' )
})
btn1[2].addEventListener( 'click', function(){
    image1.src = '../assets/u boat brown.jpeg';
    for(bt1 of btn1){
        bt1.classList.remove( 'active' );
        
    }
    this.classList.add( 'active' )
})
const image2 = document.getElementById('productImg2');
const btn2 = document.getElementsByClassName( 'btn2' );

btn2[0].addEventListener( 'click', function(){
    image2.src = '../assets/GPS-Smartwatch-PNG-Transparent-Image.png';
    for(bt2 of btn2){
        bt2.classList.remove( 'active' );
        
    }
    this.classList.add( 'active' )
});
btn2[1].addEventListener( 'click', function(){
    image2.src = '../assets/GPS-Smartwatch-PNG-Image-Background.png';
    for(bt2 of btn2){
        bt2.classList.remove( 'active' );
        
    }
    this.classList.add( 'active' )
})
btn2[2].addEventListener( 'click', function(){
    image2.src = '../assets/GPS-Smartwatch-PNG-Photo.png';
    for(bt2 of btn2){
        bt2.classList.remove( 'active' );
        
    }
    this.classList.add( 'active' )
})