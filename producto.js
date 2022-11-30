Vue.component('producto', {
    data:function() {
        return{
        
        }
    },
    props:{
        image:Array,
        title2:String,
        description:String,
        price:Number
    },
    template: /*html*/`
        <div class="col mb-3">
        
            <div class="card" style="width: 18rem;">
                <img :src="image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{title2}}</h5>
                    <p class="card-text">{{description}}</p>
                    <p class="card-text"><strong>$ {{price}} </strong></p>
                    <a href="#" class="btn btn-primary">Add Cart</a>
                </div>
            </div>
        
        </div>
    `
}) 