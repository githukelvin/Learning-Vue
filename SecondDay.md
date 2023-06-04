Hello  developers here  is my second journey into this wonderland of vue.js .It is an awesome journey first let me point out why i like vue even if am just a beginner .Here are some of my points:-
        <ul>
        <li>Vue keeps the html same no knew syntax or concept introduced</li>
        <li>Vue  is declarative in terms of you just describe your output and Vue just does the other work</li>
        <li>Lastly  it is easy to maintain.Or let me say at this level  this why i love it .</li>
        </ul>
So on this Second tour on the wonderland (***vue***) i got to explore not much but the core basics so  here it is:-
        <ol>
        <li>Instantaniating a Vue app using CDNs</li>
        <li>data  function</li>
        <li>Interpolation</li>
        <li>Vue Directives</li>
        <li>Conditional rendering</li>
        <li>ref and $ref</li>
        </ol>
<h2>Creating a vue app using CDN </h2>
There  is  3 type of CDNs to use vue   with:-

1.unpkg which i will use over  here  below it is the script:-
<code>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

</code>
2.jsdelivr
<code>

    <script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.min.js"><script>

</code>
3.cdnjs -> It has many  files thhe link to it is here <a  href="https://cdnjs.com/libraries/vue">cdnjs</a>

After you have placed  any of link in the  html either you can create a new js file to write your code or just use it  in the html file under the script tag i will use script tag  here i what it looks
<code>

         <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>v-on  directive</title>
        </head>
        <body>
        <div id="app"></div>
        <script src="https://unpkg.com/vue@next"></script> //link to the cdn
                <script>
                    //My code here
                </script>
        </body>
        </html>

</code>

This
 <code> div it is used by vue to control our app by vue it doesn't need to be a div it can be any html tag .This is also  the the same for the id it can be a class but recomended to use  id because it is unique

    <div id="app"></div>  
 </code>

After this under the script tag we can start creating our app like before
<code>

    <script>
       let app =  Vue.createApp({});
         let vm = app.mount("#app")
    </script>

</code>

The code above by doing so you will have started an vue app and we can start manupilating our website.

The  Vue in the code is an object that has function createApp that it argument it is an object and in that object  it is where we will control our vue website.let start.

<h3>The data function</h3>
The data function is one of the values of our object of createApp function
The data function it is a function that just returns an object and it must be an object and in it what we return can be used as output in our website let the fun begin:
In this funtion we wan return anything but keynote is that <b>The name of the function must be data which it is a reserved word in vue</b>

So in our script let start out putting:-
    As i said before we can return anything json,object,array,numbers,strings anything but not functions.

<code>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
       let app =  Vue.createApp({
           data(){
                return{
                    title:'v-for:iterate over[]  or {}',
                    cities:['Dhaka','Chittagong','Rajshahi','Khulna','Barishal','Sylhet','Rangpur','Mymensingh'],
                    json:[
                        {Brand:'Toyota',model:'Supra',year:2002},
                        {Brand:'Mercedes',model:'Amg',year:2011},
                        {Brand:'Honda',model:'NSX',year:2014},
                        {Brand:'Nissan',model:'GT-R',year:2017},
                        {Brand:'Toyota',model:'Camry',year:2014},
                        {Brand:'Mercedes',model:'G-wagon',year:205},
                        {Brand:'Honda',model:'Civic',year:2010},
                        {Brand:'Nissan',model:'Nism0',year:2019},
                    ],
                    car:{Brand:'Nissan',model:'GT-R32',year:2013}, 
                    cars:[
                    {Brand:'Nissan',model:'GT-R32',year:2013},
                    {Brand:'Nissan',model:'GT-R35',owner:"kelvin"},
                    {Brand:'Toyota ',owner:'Nash',price:"30m"}
                    ]
                    
              
                }
            }

         });
         let vm = app.mount("#app")
    </script>

</code>

As illustrated above you can see multiple data  types. The above code i will use it to illustrate the other parts.

<h2>Interpolation</h2>
This is the folowing this is outputtting data on the website using Mustachetag or this `{{}}`
example took the part of it .

<code>

    <div id="app" >
        <h2>`{{ title }}`</h2>

    </div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script>
           let app = Vue.createApp({
            data(){
                    return{
                        title:'v-for:iterate over[]  or {}',
                    }
                }

            });
            let vm = app.mount("#app")
        </script>

</code>
Here it is the output.
<img alt="image for interpolation"  src="./images/title.png">
<figcaption>Fig.1.Image for interpolation</figcaption>
Above it is interpolation   or using Mustachetag to display

<h2>Vue directives </h2>
Below it is a list of vue directive
<ol>
<li>v-html</li>
<li>v-for</li>
<li>v-model</li>
<li>v-text</li>
<li>v-if,v-else-if,v-else</li>
<li>v-on</li>
<li>v-cloak</li>
<li>v-bind</li>
<li>v-once</li>
<li>v-is</li>
<li>v-show</li>
</ol>
The list is some of v-directive there is also custom v-directives
What is a v-directive composed of
<code>

        v-dir_name:v-attr="v-argument"

</code>

<h4>1.v-html</h4>
This directive gives you ability to output html code in vue but not recomended since it introduces xss vulnerability

<code>

      <div id="app">
        <h2>`{{ title }}`</h2>
        <h1>`{{ html }}`</h1>
    </div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
       let app= Vue.createApp({
            data() {
                return {
                    title:"Illustrating v-html",
                    html: "<h1>This is heading</h1>"
                }
            }
        });

        let vm = app.mount("#app");
    </script>


</code>
Here it is output of the above code 
<img alt="image of Mustachehtml" src ="./images/mousthtml.png">

As output showing it can't compile the  html.below is how //v-html is used
<code>

     <div id="app">
        <h2>`{{ title }}`</h2>
        <h1 v-html="html"></h1>
    </div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
       let app= Vue.createApp({
            data() {
                return {
                    title:"Illustrating v-html",
                    html: "<h1>This is heading</h1>"
                }
            }
        });

        let vm = app.mount("#app");
    </script>
</code>
Output below  as it shows now the  code was compile as a html code remember don't use it occasionally.
<img src="./images/vhtml.png" alt="vhmtl image">

<h4>2.v-text</h4>
This v-directive is the same as interpolation or the Mustachetag
<code>

   
    <div id="app">
        <h2>`{{ title }}`</h2>
        <h2  v-text="text"></h2>
        <h1 v-html="html"></h1>
    </div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
       let app= Vue.createApp({
            data() {
                return {
                    title:"Illustrating v-html",
                    text: "Illustrating v-text",
                    html: "<h1>This is heading</h1>"
                }
            }
        });

        let vm = app.mount("#app");
    </script>

</code>

The result for this snippet is as below
<img alt="image for v-text" src="./images/vtesxt%20origin%20(2).png"> The selected is the output for the v-text

<h4>3.v-once</h4>
This directive will just render an element just once.And note to take is that the v-once doesn't require a v-attribute and v-argument as shown below

<code>

          <h2>`{{ title }}`</h2>
        <h2  v-text="text"></h2>
        <h1 v-html="html"></h1>
        <h2 v-once  v-text="vonce"></h2>
        <h2>`{{ vonce}}` don't have v-once</h2>
    </div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
       let app= Vue.createApp({
            data() {
                return {
                    title:"Illustrating v-html",
                    text: "Illustrating v-text",
                    html: "<h1>This is heading</h1>",
                    vonce: "This is v-once that renders once  only"
                }
            }
        });

        let vm = app.mount("#app");
</code>
The output is as below :-

<img alt="output" src="./images/output.png">

Image above shows two output  one has v-once the other one doesn't have.
So we will change the value of vonce in our console to  see how v-once works the image below illustrates so:-

<img alt="without v-once" src="./images/without%20v-once.png">

Above is how v-once is used as shown in the image even after the value was changed the tag that has v-once it is not rerendered again.

<h4>3.v-cloak</h4>
To illustrate v-cloak maybe a little hard.but as you are developing your app and refreshing the browser to see the output in a short moment you can see the Mustachetag or  any other vue component .So to handle this we use v-cloak on our parent div  also the directive doesn't have v-attribute and v-argument . After this in your css workspace do the following
<code>

    //vue workspace

    <div class="container" v-cloak>
        //Here other property
    </div>

    //Css workspace
    [v-cloak]{
        display:none;
    }
</code>
Doing in so the output will be displayed once processing or compilinga is done.
<h4>4.v-pre</h4>
Due to the fast compilation of vue maybe unable to illustrate but this directive purpose is if there are elements that are static instead for compiling them over and over again and there are not part or used by vue to skip them . Also it is the same for (v-once,v-cloak) no attribute name or argument
<code>

    <h2 v-pre>This is a static paragraph</h2>
</code>
This snippet will not be compiled.

<h4>5.v-bind or : for shorthand</h4>
This is one of important directive in vue as name says binds vue data to html elements attribute
example:-
<code>

     <div id="app">
        <h2>`{{ title }}`</h2>
        <h2  v-text="text"></h2>
        <h1 v-html="html"></h1>
        <h2 v-once  v-text="vonce"></h2>
        <h2>`{{ vonce}}` don't have v-once</h2>
        <a v-bind:href="link" target="_blank">My linked in profile</a>
        <br>
        <a :href="link" target="_blank">My linked in profile</a>
    </div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
       let app= Vue.createApp({
            data() {
                return {
                    title:"Illustrating v-html",
                    text: "Illustrating v-text",
                    html: "<h1>This is heading</h1>",
                     link: "https://www.linkedin.com/in/kelvingithu/",
                    vonce: "This is v-once that renders once  only"
                }
            }
        });

        let vm = app.mount("#app");
    </script>
</code>
Lets focus on this snippet of part of above snippet
<code>

     <a v-bind:href="link" target="_blank">My linked in profile</a>
        <br>
        <a :href="link" target="_blank">My linked in profile</a>
</code>
Using v-bind  or : for shorthand we can pass link value that is data value of vue to our anchor tag  as  shown below
<img alt="elements"  src="./images/element.png">

As the image above illustrate  we can have passed  this <i>https://www.linkedin.com/in/kelvingithu/</i> to the href attribute .
The v-bind or : can be used to pass or bind vue data to any html attribute that needs an argument eg src,href,classes,ids and many more.

<h4>6.v-on</h4>
To illustrate this well will be on the methods since v-on is an event listener like <b>click,mouseover,input and many more</b>  it has a shorthand for @ .<b>@</b> is it's shorthand
<h4>7.v-is</h4>
This  changes a HTML tag from one to another it is working but it is deprecated as of vue 3.1
example:-
<code>

    <div id="app">
        <h2 v-is="`p`">`{{ title }}`</h2>
    </div>
</code>
<img alt="v-is" src="./images/v-is.png">

As image above shows the h2 was changed to p tag.

<h4>8.v-model</h4>
Another important directive must know.
It creates two way data  binding to collect and display the output to the user through the input tag. More understanding is when taking user inputs
<code>

    <div id="app">
    <input type="text" v-model="username">
    
    </div>
    <script src="https://unpkg.com/vue@next"></script>
    <script>
    let app = Vue.createApp({
        data(return{
            username:''
        })
    })
    </script>
</code>

The above code if user enters any value that value can be accessible in dat in vue in username also it is the same if there is value in username it will be accesible to the user that is two way data binding.

<h4>9.v-for</h4>
This for printing arrays and object to our DOM.
<code>

       <div id="app">
        <!-- v-for  in array -->
        <h2 style="color:#ad0889e3">`{{title}}`</h2>
        <p style="color:rgba(189, 16, 16, 0.932)">v-for in array</p>
       <ul >
        <li v-for="(elem,index) in cities" :key="index" :ref="`li`+index">
            `{{elem}}`
        </li>
       </ul>
       <!-- v-for in objects -->
       <p style="color:rgba(0, 0, 0, 0.932)">v-for in object</p>
       <ul>
        <li v-for="(val,prop,index) in car" :key="index" >
            `{{index}}` `{{prop}}` `{{val}}`

        </li>
       </ul>
         <!-- v-for in json -->
            <p style="color:rgba(162, 165, 9, 0.932)">v-for in json</p>
            <ul>
                <li v-for="(elem,index) in json" :key="index">
                    `{{index}}` `{{elem.Brand}}` `{{elem.model}}` `{{elem.year}}`
                </li>
            </ul>

            <!-- v-for if the json has diferrrent values -->
            <ul v-for="(elem,index) in cars" :key="index">
                <li v-for="(val,prop,index) in elem" :key="idex">
                    `{{prop}}`:`{{val}}`
                </li>
            </ul>

    </div>
    <script src="./index.js"></script>
    <script>
        const app = Vue.createApp({
            data(){
                return{
                    title:'v-for:iterate over[]  or {}',
                    cities:['Dhaka','Chittagong','Rajshahi','Khulna','Barishal','Sylhet','Rangpur','Mymensingh'],
                    json:[
                        {Brand:'Toyota',model:'Supra',year:2002},
                        {Brand:'Mercedes',model:'Amg',year:2011},
                        {Brand:'Honda',model:'NSX',year:2014},
                        {Brand:'Nissan',model:'GT-R',year:2017},
                        {Brand:'Toyota',model:'Camry',year:2014},
                        {Brand:'Mercedes',model:'G-wagon',year:205},
                        {Brand:'Honda',model:'Civic',year:2010},
                        {Brand:'Nissan',model:'Nism0',year:2019},
                    ],
                    car:{Brand:'Nissan',model:'GT-R32',year:2013}, 
                    cars:[
                    {Brand:'Nissan',model:'GT-R32',year:2013},
                    {Brand:'Nissan',model:'GT-R35',owner:"kelvin"},
                    {Brand:'Toyota ',owner:'Nash',price:"30m"}
                    ],
                     link: "https://www.linkedin.com/in/kelvingithu/"

                    
              
                }
            }
        })
            let vm = app.mount("#app")
      
    </script>

</code>
The output for the code
<img alt="v-for" src="./images/v-for.png">


<h2>10.Conditional Rendering</h2>
conditional rendering use v-directive of v-if ,v-else-if and v-else.
Note to take home is that when using this directive they should be adjancent to each other and no other elements should appear  between them or else it will not work.
Example:-
<code>

      <div id="app">
        <p v-if="val">This an Even number</p>
        <p v-else>This is an odd number</p>

        <p v-if="fruit==='banana'">This a banana</p>
        <p v-else-if="fruit==='apple'">This an apple</p>
        <p v-else>This is another fruit</p>
    </div>
    <script src="./index.js"></script>
    <script>
       let app= Vue.createApp({
            data() {
                return {
           
                    val:true,
                    fruit:'banana'
                }
            }
        });

        let vm = app.mount("#app");
    </script>

</code>

Lets start with  this code block

<code>

    <p v-if="val">This an Even number</p>
    <p v-else>This is an odd number</p>    
</code>
The code block above we pass val data from vue that is true.we could have passed it directly but the reason behind this is :-
    1.To show we can pass vue data
    2.To change the value to see the conditional rendering
Lets see the output :-
image below is when we compile our code since val is true will print first p tag with This is an even number
<img alt="even" src="./images/even.png">

Now lets change the value of val to false in the console here it is the output:-it will print second tag with This an odd number
<img alt="odd" src="./images/odd.png">
lets inspect the second block which have v-if,v-else-if,v-else:-
The purpose of this is to show we can do simple js code in these v-directives to compare
<code>

      <p v-if="fruit==='banana'">This a banana</p>
        <p v-else-if="fruit==='apple'">This an apple</p>
        <p v-else>This is another fruit</p>
</code>
Here it is the output:-

As fruit is set to banana it will output This is a banana.
<img alt="default" src="./images/default.png">

When we change the value of the fruit to apple in the console the output will be This is an apple
<img alt="apple" src="./images/apple.png">

When we change the value of the fruit to another fruit lets say kiwi in the console the output will be This is an another fruit
<img alt="kiwi" src="./images/kiwi.png">


Another keynote to add is that in v-if,v-else-if,v-else it completely removes the element from DOM .




<h4>11.v-show</h4>
This v-directive adds a styling of display:none to the element it  doesn't remove the element form the DOM. If false else if the argument returns true it removes the styling
<code>

       <p v-show="false">This will not show</p>
    </div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
       let app= Vue.createApp({
            data() {
                return {
                
                }
            }
        });

        let vm = app.mount("#app");
    </script>

</code>

As the image below  shows 
<img alt="v-show" src="./images/v-show.png"> 

it adds the styling of display none to our paragraph.That is how v-show  works.


<h2>ref and $refs </h2>

ref and $ref works like ids but in more use case it can be illustrated by using child component passing them to parent component and retrieving them.

<code>

     <div id="app">
        <h2 ref="title"  v-if="control" id='title'>`{{title}}`</h2>
        <p ref="msg" id="msg">`{{msg}}`</p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
        const app = Vue.createApp({
            data(){
                return{
                    title:"Ref Attribute & vm.$refs",
                    msg:"access page elem. $ child comp",
                    control:true
                }
            }
        
        })
            let vm = app.mount("#app")
            let  h2 = vm.$refs.title
</code>
$refs-> This is vue keyword  that has all ref
ref-> we create ref as shown in the code below we use <i>ref="any value"</i>

<code>

    <h2 ref="title"  v-if="control" id='title'>`{{title}}`</h2>
        <p ref="msg" id="msg">`{{msg}}`</p>

</code>

Images below we can see that we have access or we have or p and h2
<img alt="ref attribute" src="./images/Ref%20Attribute.png">
This image below we can even console the whole tag with it value
<img alt="h2ref" src="./images/h2ref.png">

<b><i>Happy Developing .Bug free Codes😎😋</i></b>
<h3>Next stage is <strong>Computed, Methods, and Handling Forms</strong></h3>
