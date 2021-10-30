import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  downloadResume(){
    const pdfUrl = '../../assets/pdf/Abdulwahab_Resume.pdf';
    const pdfName = 'Abdulwahab_Resume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
