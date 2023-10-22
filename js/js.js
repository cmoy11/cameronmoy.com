console.log("js linked")

let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        
        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('projects-active');
            sortItem[k].classList.add('delete');
            console.log(sortItem[k].getAttribute('data-item').split(" "))

            if(sortItem[k].getAttribute('data-item').split(" ").includes(targetData) || targetData === "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('projects-active');
            }
        }
    });
}