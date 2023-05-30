Today  As the First Day of learning  of Vue.js What i started with is the reactivity of  Vue.js 2 and reactivity of Vue 3.

1.Vue 2 Reactivity
 It works using setter and getter function that are  passed as in an object as arguments of    Object.defineproperty();
 <code>

    Object.defineProperty(info,"reactive_msg",//proxy for the info.msg
        {
            get(){
                return info.msg
            },
            set(newValue){

                info.msg = newValue;
                document.getElementById("h1").innerText= newValue;
            },

        })
  
 </code>

The Object.definePropety()->Accepts two  values 1. The target object 2. Name of the new value 3.An object  with the getter and setter object.

![Image above showing the page showing vue 2 reactivity](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qj33pi6spz545zwoevi7.png)
<figcaption>Image above showing the page showing vue 2 reactivity</figcaption>

![Image showing the content of the info object  after define object  property](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lxsm0sbobk5dr5p5n8vz.png)

<figcaption>Fig.1. Image showing the content of the info object  after define object  property</figcaption>

So  with this it is clear  that vue.js 2  works  with the usage  using setter and getter defined  in the object.defineproperty();

In Vue 3 to implement  reactivity it  use the proxy constructor.

<code>

       let info_proxy = new Proxy(info ,{
        get(target,prop,receiver){
            if(typeof target[prop] == 'string' ){
              target[prop] = target[prop] + ' returned by proxy getter';
            }
            return Reflect.get(...arguments);
        },
        set(target,prop,newVal,receiver){
            if(typeof newVal == 'string'){
                newVal = newVal + ' returned by proxy setter';
            }
            document.getElementById("h1").innerText = newVal;
           Reflect.set(...arguments)
        },
        }
          )

</code>

The Proxy Constructor Accepts  2  values 1. The target object 2. Object with getter and setter
The getter function accepts 3 arguments 1.The target,2. Prop,3.Receiver
The setter function accepts 4 arguments 1.The target,2. Prop,3.the newval 4.receiver->as Name suggest the receiver of the new value
The Reflect.get()  or Reflect.set() it is used to return our outputs as expected
To learn more about them follow this link <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect" target="_blank">Reflect Documentation</a>

![info_proxy](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3bngit7zl6t4czcochyr.png)

<figcaption>Fig.2. Image showing console of the info_proxy</figcaption>

In Fig.2  as you can see the console it displays handler and target array  the handler array contains
the setter and getter function

the target it contains the target in our case the msg in our info object.
As explained above  below it is the display of our expanded info_proxy.

![Image showing the info_proxy object](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y5wewbrfccldn4awz7ic.png)
<figcaption>Fig.3. Image showing the info_proxy object</figcaption>

Vue 3 implementation  it use proxy to create and update our dom as  shown  below  as we run the instance of our app for the below implementation
<code>

 <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
     let app =   Vue.createApp({
      
        //options object

        })
        //mount
       let vm = app.mount('#app');
       
    </script>

</code>
As we console vm in our browser below is the output

![Image showing console of the vm](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7xir5dgqeneshpnkp80x.png)
<figcaption>Fig.4. Image showing console of the vm</figcaption>

The image fig.4 and image fig.2  there are the same where  we used proxy constructor
It  has the handler and target  as the same for our constructor in fig.2
![Image showing the handler object](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/655ajxdatmf7sg7q5ajn.png)
<figcaption>Fig.5. Image showing the handler object</figcaption>

Fig.5 shows us our get and set as same in our proxy constructor

![showing the expanded vm object](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9u5yruznl3otlb4bz1s6.png)
<figcaption>Fig.6. Image showing the expanded vm object</figcaption>

As the figure above shows our target has more values than our proxy constructor and this is because we have targets that are already define as the same in our msg in info object in our proxy constructor

This is my first progress exploring Vue.js
Next lesson is learning about directives of vue.js
