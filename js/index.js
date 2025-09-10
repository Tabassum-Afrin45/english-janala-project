 
const loadLessons=()=>fetch("https://openapi.programming-hero.com/api/levels/all")
.then(res=>res.json())
.then((jsonData)=>displayLesson(jsonData.data));

const displayLesson=(lessons)=>{
   const levelContainer=document.getElementById("level-container");  //select container 
   levelContainer.innerHTML=""; //empty the container if any value already exist

// 2.Get every lesson
   for(let lesson of lessons)
   {
     const btnDiv=document.createElement("div");//3.Create Element
     btnDiv.innerHTML=`            
     <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open">
     </i>Lesson - ${lesson.level_no}</button>`

    // 4. Append into container
     levelContainer.append(btnDiv);
   }

}
loadLessons();