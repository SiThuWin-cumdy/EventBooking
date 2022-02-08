import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/_services/form.service';

@Component({
  selector: 'app-form-renderning',
  templateUrl: './form-renderning.component.html',
  styleUrls: ['./form-renderning.component.scss']
})
export class FormRenderningComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData() {
    this.formService.getFormData().subscribe(x => {
      if (x.success) {
        console.log(x)
      }
    })

  }

}
