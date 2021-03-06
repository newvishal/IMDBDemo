import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnDestroy  {
  rateForm: FormGroup
  submitted = false;
  constructor (
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public fb: FormBuilder,
    public activatedRoute:ActivatedRoute,
    public movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'fp-page');
    this.createRatingForm();
  }

  createRatingForm() {
    this.rateForm = this.fb.group({
        rate: ['', Validators.required]
    })
  }

  get getRateForm() {
    return this.rateForm.controls
  }

  submitRate() {
    this.submitted = true;
    if(this.rateForm.invalid) return
    const formData: any = new FormData();
    formData.append("Id", this.activatedRoute.snapshot.params.m_id);
    formData.append("Rating", this.rateForm.get("rate").value);
    console.log(formData);
    console.log(this.rateForm.value);
    this.movieService.addRating(formData).subscribe((res) => {
      console.log(res)
    }, (err) => {
        console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'fp-page');
  }

}
