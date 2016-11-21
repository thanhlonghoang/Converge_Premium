

function Prof_Update(){
	
	var photoID = new Array("0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16");
	var name = new Array("Mr. Jackie Chan", "Ms. Emma Watson","Ms. Madonna"," Mr. Donald Trump","Ms. Elsa","Mr. Kungfu Panda","Mr. Po","Mr. Daniel Craig","Mr. Fantastic","Mr. Clark Kent","Dr. Strange","Mrs. Eve","Ms. Coraline Jones","Mrs. Mulan","Ms. Rita","Mr. Bruce Wayne","Ms. Esmeralda");
	var temp;
	rand_list = new Array(0,"","","","","");
	rand_list[0]=Math.random() * 16| 0;
	for (var i = 1; i < 6; i++) {
		do {
			temp =Math.random() * 16| 0;
		}
		while (temp==rand_list[0] | temp==rand_list[1] | temp==rand_list[2] | temp==rand_list[3] | temp==rand_list[4] | temp==rand_list[5])	;
		rand_list[i]=temp;
	}
	
	var Professional = ["Psychologist, 3 years exp", "Mental Health Social Worker, 10 years exp","Counsellor, 2 years exp","Trainer, 5 years exp", "Mental Health Social Worker, 2 years exp", "Psychologist, 4 years exp"];
	
	var theDiv1 = document.getElementById("box1");
	var theDiv2 = document.getElementById("box2");
	var theDiv3 = document.getElementById("box3");
	var theDiv4 = document.getElementById("box4");
	var theDiv5 = document.getElementById("box5");
	var theDiv6 = document.getElementById("box6");
	
	theDiv1.innerHTML = "<img src=\"img/portfolio/"+photoID[rand_list[0]]+".jpg\" class=\"img-responsive\" alt=\"\"> <div class=\"portfolio-box-caption\"> <div class=\"portfolio-box-caption-content\"> <div class=\"project-category text-faded\">"+name[rand_list[0]]+"</div> <div class=\"project-name\">"+Professional[0]+"</div> </div> </div>";
	
	theDiv2.innerHTML = "<img src=\"img/portfolio/"+photoID[rand_list[1]]+".jpg\" class=\"img-responsive\" alt=\"\"> <div class=\"portfolio-box-caption\"> <div class=\"portfolio-box-caption-content\"> <div class=\"project-category text-faded\">"+name[rand_list[1]]+"</div> <div class=\"project-name\">"+Professional[1]+"</div> </div> </div>";
	
	theDiv3.innerHTML = "<img src=\"img/portfolio/"+photoID[rand_list[2]]+".jpg\" class=\"img-responsive\" alt=\"\"> <div class=\"portfolio-box-caption\"> <div class=\"portfolio-box-caption-content\"> <div class=\"project-category text-faded\">"+name[rand_list[2]]+"</div> <div class=\"project-name\">"+Professional[2]+"</div> </div> </div>";
	
	theDiv4.innerHTML = "<img src=\"img/portfolio/"+photoID[rand_list[3]]+".jpg\" class=\"img-responsive\" alt=\"\"> <div class=\"portfolio-box-caption\"> <div class=\"portfolio-box-caption-content\"> <div class=\"project-category text-faded\">"+name[rand_list[3]]+"</div> <div class=\"project-name\">"+Professional[3]+"</div> </div> </div>";
	
	theDiv5.innerHTML = "<img src=\"img/portfolio/"+photoID[rand_list[4]]+".jpg\" class=\"img-responsive\" alt=\"\"> <div class=\"portfolio-box-caption\"> <div class=\"portfolio-box-caption-content\"> <div class=\"project-category text-faded\">"+name[rand_list[4]]+"</div> <div class=\"project-name\">"+Professional[4]+"</div> </div> </div>";
	
	theDiv6.innerHTML = "<img src=\"img/portfolio/"+photoID[rand_list[5]]+".jpg\" class=\"img-responsive\" alt=\"\"> <div class=\"portfolio-box-caption\"> <div class=\"portfolio-box-caption-content\"> <div class=\"project-category text-faded\">"+name[rand_list[5]]+"</div> <div class=\"project-name\">"+Professional[5]+"</div> </div> </div>";
	
    
}

