// import * as basicLightbox from 'basiclightbox'



let clickMeBtn = document.getElementById('clickMe');
clickMeBtn.addEventListener('click',()=>{
    console.log('hi bitch');
    const instance = basicLightbox.create(`
    <div class="modal" >
    <a><i class="fa-solid fa-xmark" width="30"></i></a>
        <p>...Their pictures tell us that it was once a sign of politeness among the Germans to pucker the lips slightly and form them as for a kiss.</p>
        
    </div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close
    }
})

instance.show()
})

/**style="background:white; width:60%" */