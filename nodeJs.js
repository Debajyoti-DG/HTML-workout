//nodejs REPL --> Read, evaluate, print, loop

//If we press tab + tab in node (twice) we get a list of variables and modules that are globally available

//This is a model in which NodeJS works
/*
for example, in the NodeJs terminal, we write
    >a=34 (it is read and evaluated)
    >a
    34 (it is printed and ready for the next task [loop])
    >c=35
    >c
    >35
    >a+c
    >69
    
    _ (underscore) refers to the previous variable
    
    That is, _ now is 69 (a+c)

*/
   
   
   
// Open terminal and then type node then the name_of_your_file + tab to auto-complete
// Use ctrl + C to quit the current work and .exit to come out of NodeJS

// console.log("Hello world");



//This is a code to run your first backend website. CONGRATULATIONS !!!

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FoodHub</title>
      //<link rel="stylesheet" href="style.css">
      <link rel="stylesheet" media="screen and (max-width: 1192px)" href="phone.css">
      <link
          href="https://fonts.googleapis.com/css2?family=Akatab:wght@400;500;600;700;800;900&family=Bangers&family=Tektur:wght@500&display=swap"
          rel="stylesheet">
      <link
          href="https://fonts.googleapis.com/css2?family=Akatab:wght@400;500;600;700;800;900&family=Bangers&family=Lugrasimo&family=Tektur:wght@500&display=swap"
          rel="stylesheet">
      <link
          href="https://fonts.googleapis.com/css2?family=Akatab:wght@400;500;600;700;800;900&family=Bangers&family=DM+Sans:ital@1&family=Lugrasimo&family=Tektur:wght@500&display=swap"
          rel="stylesheet">
      <link
          href="https://fonts.googleapis.com/css2?family=Akatab:wght@400;500;600;700;800;900&family=Bangers&family=DM+Sans:ital@1&family=Lilita+One&family=Lugrasimo&family=Tektur:wght@500&display=swap"
          rel="stylesheet">
      <link
          href="https://fonts.googleapis.com/css2?family=Akatab:wght@400;500;600;700;800;900&family=Bangers&family=DM+Sans:ital@1&family=Lilita+One&family=Lobster&family=Lugrasimo&family=Tektur:wght@500&display=swap"
          rel="stylesheet">
      <link
          href="https://fonts.googleapis.com/css2?family=Akatab:wght@400;500;600;700;800;900&family=Bangers&family=DM+Sans:ital@1&family=Lilita+One&family=Lobster&family=Lugrasimo&family=Merienda:wght@600&family=Tektur:wght@500&display=swap"
          rel="stylesheet">
      <link
          href="https://fonts.googleapis.com/css2?family=Akatab:wght@400;500;600;700;800;900&family=Bangers&family=DM+Sans:ital@1&family=Lilita+One&family=Lobster&family=Lugrasimo&family=Merienda:wght@600;900&family=Tektur:wght@500&display=swap"
          rel="stylesheet">
      <link
          href="https://fonts.googleapis.com/css2?family=Akatab:wght@400;500;600;700;800;900&family=Bangers&family=DM+Sans:ital@1&family=Lato&family=Lilita+One&family=Lobster&family=Lugrasimo&family=Merienda:wght@600;900&family=Tektur:wght@500&display=swap"
          rel="stylesheet">
      <style>
      * {
      margin: 0px;
      padding: 0px;
  }
  
  html {
      scroll-behavior: smooth;
  }
  
  
  #navbar {
      display: flex;
      align-items: center;
      position: sticky;
      top: 0px;
      z-index: 1;
  }
  
  /* Logo and list(navigation) */
  
  #logo img {
      margin: 3px 27px;
      padding: 10px 10px;
      height: 50px;
      width: 50px;
  }
  
  #navbar::before {
      content: "";
      background-color: black;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      opacity: 0.5;
      z-index: -1;
  }
  
  #navbar ul {
      display: flex;
  }
  
  #navbar ul li {
      list-style: none;
      font-size: 1.3rem;
      /* font-family: 'Tektur', cursive; */
      /* font-family: 'Lugrasimo', cursive; */
      font-family: 'DM Sans', sans-serif;
  }
  
  #navbar ul li a {
      color: white;
      display: block;
      padding: 3px 15px;
      text-decoration: none;
      border-radius: 20px;
  }
  
  #navbar ul li a:hover {
      color: black;
      background-color: white;
  }
  
  
  /* Home section*/
  
  
  #home {
      display: flex;
      flex-direction: column;
      padding: 20px 210px;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 465px;
      /* font-family: 'Lugrasimo', cursive; */
  }
  
  #home::before {
      content: "";
      background: url('Background.jpg') no-repeat center center/cover;
      position: absolute;
      height: 802px;
      width: 100%;
      top: 0px;
      left: 0px;
      opacity: 0.88;
      z-index: -2;
  
  }
  
  
  
  
  .btn:hover {
      background-color: brown;
      cursor: pointer;
  }
  
  #home h1 {
      font-size: 4rem;
      color: white;
      text-align: center;
      font-family: 'Lugrasimo', cursive;
      margin-top: 11rem;
  }
  
  #home p {
      color: white;
      text-align: center;
      font-size: 1.5rem;
      font-family: 'Lugrasimo', cursive;
      font-weight: bold;
      margin: 22px 34px;
  }
  
  /* #home p::before{
      content: "";
      background-color: black;
      opacity: 0.9;
      z-index: 1;
  } */
  
  /* 
  #home p{
      margin: 21px auto;
      padding: 7px 137px;
      /* border: 2px solid red; 
  } */
  
  
  /* Services section*/
  #services {
      margin: 34px;
      display: flex;
      margin-bottom: 4.5rem;
  }
  
  #services .box {
      border: 2px solid rgb(248, 114, 114);
      padding: 36px;
      margin: 3px 30px;
      border-radius: 23px;
      background: rgb(244, 235, 235);
      /* font-family: 'Lugrasimo', cursive; */
  }
  
  #services .box img {
      height: 100px;
      margin: auto;
      display: block;
  }
  
  #services p {
      font-size: 1.3rem;
      font-style: italic;
  }
  
  #abcd {
      margin-top: 15rem;
      font-family: 'Lobster', cursive;
      font-size: 3.8rem;
      font-weight: bold;
  }
  
  #abcd2 {
      font-family: 'Lobster', cursive;
      font-size: 3.8rem;
      font-weight: bold;
  }
  
  #abcd3 {
      font-family: 'Lobster', cursive;
      font-size: 3.8rem;
      font-weight: bold;
  }
  
  /* #middle{
      position: relative;
      width: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
      
  } */
  
  /* Client section */
  
  .clients-container {
      position: relative;
      /* height: 344px; */
  }
  
  .clients-container::before {
      content: "";
      position: absolute;
      background: url('Clientbg.jpg') no-repeat center center/cover;
      width: 100%;
      height: 100%;
      opacity: 0.75;
      z-index: -1;
  }
  
  #clients {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  #clients .images {
      /* border: 2px solid red; */
      position: relative;
      display: flex;
      height: 120px;
      /* height: auto; */
      padding: 20px;
  }
  
  
  
  /* Contact Us */
  
  .contacts-container {
      position: relative;
      /* align-items: center;
      justify-content: center; */
      /* height: 344px; */
  }
  
  .contacts-container::before {
      content: "";
      position: absolute;
      background: url('contact.jpg') no-repeat center center/cover;
      width: 100%;
      height: 100%;
      /*pixel setting gets hectic */
      z-index: -1;
      opacity: 0.5;
      top: 0px;
      left: 0px;
  }
  
  .contact-box {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 22px;
  }
  
  .contact-box input,
  .contact-box textarea {
      width: 100%;
      padding: 0.5rem;
      border-radius: 9px;
      font-size: 1.1rem;
  }
  
  .contact-box form {
      width: 40%;
  }
  
  .contact-box label {
      font-size: 1.3rem;
      font-weight: bold;
      font-style: italic;
  }
  
  
  
  
  /* Utility classes */
  .h-primary {
      font-size: 3rem;
      padding: 22px 40px;
  }
  
  .h-secondary {
      font-size: 2.1rem;
      padding: 22px 40px;
      font-family: 'Merienda', cursive;
  }
  
  .btn {
      padding: 6px 20px;
      border: 2px solid white;
      background-color: rgb(197, 64, 64);
      color: white;
      border-radius: 10px;
      /* margin: 17px 17px; */
      font-size: 1.3rem;
  }
  
  .center {
      text-align: center;
  
  }
  
  
  footer {
      position: static;
      bottom: 0px;
      /* width: 99.56%; */
      background-color: black;
      color: white;
      padding: 3px;
  }      
      </style>

  </head>
  
  <body>
      <nav id="navbar">
          <div id="logo">
              <img src="https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_1280.png" alt="Not Available">
          </div>
          <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#serv">Services</a></li>
              <li><a href="#clnt">Our Clients</a></li>
              <li><a href="#contacts">Contact Us</a></li>
          </ul>
      </nav>
  
  
  
  
  
  
  
  
  
  
  
  
  
      <section id="home">
          <h1 class="h-primary">Welcome to FoodHub</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam praesentium, rerum omnis quis beatae
              blanditiis rem nemo molestias, eveniet dolorum, nulla maxime esse impedit sequi modi magni corrupti.</p>
          <button class="btn">Order now</button>
      </section>
  
  
  
  
  
  
  
  
  
      <section class="services-container" id="serv">
          <h1 class="h-primary center" id="abcd">Our Services</h1>
          <div id="services">
              <div class="box" id="item-1">
                  <img src="https://static.vecteezy.com/system/resources/previews/015/579/663/original/delivery-cute-girl-holding-cardboard-box-food-delivery-shipping-logo-hand-draw-illustration-vector.jpg"
                      alt="">
                  <h2 class="h-secondary center">Food Ordering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum, omnis doloremque
                      fuga itaque, quos, porro aspernatur2ex veritatis voluptatibus error dolorum. Dolore tenetur quia
                      perspiciatis assumenda quos delectus culpa facere. Molestias, illum mollitia.</p>
              </div>
              <div class="box" id="item-2">
                  <img src="https://i.pinimg.com/474x/3e/db/bb/3edbbb2908e9365b7c33e8735514db00.jpg" alt="">
                  <h2 class="h-secondary center">Catering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum, omnis doloremque
                      fuga itaque, quos, porro aspernatur ex veritatis voluptatibus error dolorum. Dolore tenetur quia
                      perspiciatis assumenda quos delectus culpa facere. Molestias, illum mollitia.</p>
              </div>
              <div class="box" id="item-3">
                  <img src="https://static.vecteezy.com/system/resources/previews/003/025/533/original/fast-food-delivery-cartoon-character-design-vector.jpg"
                      alt="">
                  <h2 class="h-secondary center">Bulk Ordering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum, omnis doloremque
                      fuga itaque, quos, porro aspernatur ex veritatis voluptatibus error dolorum. Dolore tenetur quia
                      perspiciatis assumenda quos delectus culpa facere. Molestias, illum mollitia.</p>
              </div>
          </div>
      </section>
  
  
  
  
  
  
  
  
  
  
      <section class="clients-container" id="clnt">
          <h1 class="h-primary center" id="abcd2">Our Clients</h1>
          <div id="clients">
              <div class="images">
                  <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/2017/April/35-Famous-Circle-Logos/19_400.png"
                      alt="">
              </div>
              <div class="images">
                  <img src="https://seeklogo.com/images/C/coca-cola-circle-logo-A9EBD3B00A-seeklogo.com.png" alt="">
              </div>
              <div class="images">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfupxga-ifnfn8e5GjBIuIe9LpWB6BQ2t6Rzui5crzlgRX1MtOmFdwTYfD_GQ9XPm-_yo&usqp=CAU"
                      alt="">
              </div>
              <div class="images">
                  <img src="https://cdn.sanity.io/images/kts928pd/production/81a030dab8e1db6bf789c4858dd987f219384316-582x582.png"
                      alt="">
              </div>
              <div class="images">
                  <img src="https://i.pinimg.com/originals/be/bc/1c/bebc1cd91b443b42f1dc8cb6b16a8e15.png" alt="">
              </div>
          </div>
      </section>
  
  
  
  
      <section class="contacts-container" id="contacts">
          <h1 class="h-primary center" id="abcd3">Contact Us</h1>
          <div class="contact-box">
              <form action="">
                  <div class="form-group">
                      <label for="name">Name: </label>
                      <input type="text" name="name" id="name" placeholder="Enter your name">
                  </div>
                  <div class="form-group">
                      <label for="email">Email: </label>
                      <input type="text" name="email" id="email" placeholder="Enter your email">
                  </div>
                  <div class="form-group">
                      <label for="number">Phone Number: </label>
                      <input type="text" name="number" id="number" placeholder="Enter your phone number">
                  </div>
                  <div class="form-group">
                      <label for="name">Message: </label>
                      <textarea name="message" id="message" cols="30" rows="10"></textarea>
                  </div>
                  <!-- <div class="form-group" id="middle">
                      <input type="submit" value="Submit Now" >
                  </div> -->
              </form>
          </div>
      </section>
  
      <footer>
          <div class="center">
              Copyright &copy; www.foodhub.com. All Rights Reserved!
          </div>
      </footer>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});