let plus = document.querySelector('.plus')
let moins = document.querySelector('.moins')
let numb = document.querySelector('.nombre')



const formule1 = {
    vitesse : 0,

    accelerer(){
        this.vitesse += 1;
        numb.innerHTML = this.vitesse
        return this;
    },
    decelerer(){
        this.vitesse -= 1,
        numb.innerHTML = this.vitesse
        return this;
    }
}


formule1.accelerer() ;
formule1.decelerer();

plus.addEventListener('click',function(){
formule1.accelerer() ;

})
moins.addEventListener('click',function(){
formule1.decelerer() ;

})


