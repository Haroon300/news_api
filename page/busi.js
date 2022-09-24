const getApi1 = async()=>{
    let url1 = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=71ea4b119fe34276ab4d63e31daa51d3";
    const news1 = await fetch(url1);
    // console.log(); 
      if(news1){
        news1.json().then((data)=>{
          displayNews1(data.articles);
        })
      }
      console.log(news1)

  }
  getApi1();
  
  const displayNews1 = (articles)=>{

    console.log(articles)

    for (const keyt in articles) {
      let ran = Math.round(Math.random()*1000); 
      

    
       let objt = articles[keyt]
       let contentt = objt.content;
       let descriptiont = objt.description;
       let datet = new Date(objt.publishedAt);
       let publishedAtt = datet;
       let titlet = objt.title;
       let urlt = objt.url;
       let urlToImaget = objt.urlToImage;
       let authort = objt.author;



      let bodyt = document.getElementById("main");

       let divt = document.createElement("div");
       let divt2 = document.createElement("div");

       


       let h2t_title = document.createElement("h2");
       h2t_title.setAttribute("id",ran);
       let h2t_text = document.createTextNode(titlet);
       
       let figuret = document.createElement("figure");
       let imaget = document.createElement("img");
       imaget.setAttribute("src",urlToImaget);
       let figcaptiont = document.createElement("figcaption")
       let figcaptiont_text = document.createTextNode(publishedAtt)

       let descriptiont_p = document.createElement("p");
       let descriptiont_text = document.createTextNode(descriptiont);

       let urlt_rr = document.createElement("a");
       urlt_rr.setAttribute("target","_blank");
       urlt_rr.setAttribute("href",urlt);
       let urlt_text = document.createTextNode("For more details Click here ...");

       let contentt_p = document.createElement("p");
       let contentt_text = document.createTextNode(contentt);


       let authort_p = document.createElement("p");
       let authort_text = document.createTextNode("Author : "+authort);

       contentt_p.appendChild(contentt_text);
       urlt_rr.appendChild(urlt_text);
       descriptiont_p.appendChild(descriptiont_text);
       figuret.appendChild(imaget);
       figcaptiont.appendChild(figcaptiont_text);
       h2t_title.appendChild(h2t_text);
       divt.appendChild(h2t_title);
       authort_p.appendChild(authort_text)
      //  div.appendChild(image);
       divt.appendChild(figuret);
       divt.appendChild(figcaptiont);
       divt.appendChild(contentt_p);
       divt.appendChild(descriptiont_p);
       divt2.appendChild(authort_p)
       divt.appendChild(urlt_rr);
       bodyt.appendChild(divt);
       bodyt.appendChild(divt2);
  }
  }
