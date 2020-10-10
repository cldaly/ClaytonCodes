export class ProjectObj {
   constructor(title, projectName, headerImg, status, brief, goal, gitUrl, description, techList, imgGallery) {
      this.title = title;
      this.projectName = projectName;
      this.headerImg = {
         src: headerImg.src,
         alt: headerImg.alt
      };
      this.status = status;
      this.brief = brief;
      this.goal = goal;
      this.gitUrl = gitUrl;
      this.description = description;
      this.techList = techList;
      this.imgGallery = imgGallery;
   }
}